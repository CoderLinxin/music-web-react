/* 歌曲播放器组件 */

import React, { memo, useState, useEffect, useCallback, Fragment, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import moment from 'moment'
import classNames from 'classnames'

import {
  PLAY_IN_SEQUENCE,
  PLAY_IN_LOOP,
  PLAY_IN_RANDOM,

  changePlayModeAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction
} from './store/index'
import {
  getSizeImage,
  getPlaySong
} from '@/utils/format-data'

import { Slider, message } from 'antd'
import {
  PlayerWrapper,
  PlayerLeft,
  PlayerCenter,
  PlayerRight
} from './style'

const LxPlayer = memo(function () {
  const defaultState = useRef({
    playing: false,// 歌曲播放状态
    playTime: 0,// 歌曲当前播放时间(用于设置audio)
    currentTime: '00:00', // 歌曲当前播放时间(用于显示)
    currentDistance: 0,// 滚动条当前滚动距离
    isMove: false,// 是否手动拖拽滚动条
  })

  // state和props
  // 音乐播放状态
  const [play, setPlay] = useState(defaultState)

  // 音量控制
  const [audioControl, setAudioControl] = useState({
    isShow: false, // 是否显示音量控制条
    audioProcess: 0, // 音量控制条进度
  })

  // redux-hooks
  // 获取当前播放歌曲信息
  const {
    currentSong,
    playList,
    playMode,
    lyricList,
    currentLyricIndex
  } = useSelector(state => ({
    currentSong: state.getIn(['player', 'currentSong']),
    playList: state.getIn(['player', 'playList']),
    playMode: state.getIn(['player', 'playMode']),
    lyricList: state.getIn(['player', 'lyricList']),
    currentLyricIndex: state.getIn(['player', 'currentLyricIndex']),
  }), shallowEqual)
  const { name = '', al: image = '', id: songId, ar: singers = [], dt: duration = 0 } = currentSong

  const dispatch = useDispatch()

  // 其他hooks
  const audioRef = useRef()

  useEffect(() => {// 每当点击切换歌曲则播放切换的歌曲
    audioRef.current.src = getPlaySong(songId)
    audioRef.current.play().then(() => {
      setPlay({
        ...defaultState,
        playing: true,
      })

      // 同步音量控制条
      setAudioControl({
        ...audioControl,
        audioProcess: audioRef.current.volume * 100
      })
    }).catch((error) => {
      setPlay({
        ...defaultState,
        playing: false
      })
    })
  }, [songId])

  // 业务逻辑:
  // 当前播放状态
  const newPlaying = !play.playing
  // 当前歌曲播放时间(获取/更新自audio)获取到的是秒钟
  const newPlayTime = audioRef.current?.currentTime
  // 当前显示的歌曲播放时间:
  const newCurrentTime = moment(newPlayTime * 1000).format('mm:ss')
  // 歌曲总时长
  const totalTime = moment(duration).format('mm:ss')
  // 歌曲播放进度对应的滚动条长度(用于更新进度条,这里进度条的长度被我们设置为1000),duration为毫秒数
  const newPlayDistance = (newPlayTime * 1000 / duration) * 1000

  // 播放歌曲
  const playMusic = (newCurrentTime) => {
    audioRef.current.currentTime = newCurrentTime // 更新歌曲播放进度
    audioRef.current.play()// 播放歌曲
  }

  // 音频播放过程中的回调
  const onPlaying = (event) => {
    if (!play.isMove) {// 当没有手动拖拽滚动条时才更新滚动条
      setPlay({// 更新歌曲播放进度
        ...play,
        playTime: newPlayTime,
        currentTime: newCurrentTime,
        currentDistance: newPlayDistance
      })
    }

    // 根据歌曲播放时间定位歌词
    let i
    for (i = lyricList.length - 1; i >= 0; i--) {
      if (lyricList[i].time <= newPlayTime * 1000 && currentLyricIndex < i + 1) {
        // 当i !== currentLyricIndex时才dispatch(防止过多地dispatch相同的action)
        dispatch(changeCurrentLyricIndexAction(i + 1))

        // 更新歌词提示框(ant design组件)
        const content = lyricList[i]?.content
        if (content)
          message.open({
            icon: null,
            content,
            duration: 0,
            key: 'lyric',// key设置为常量保证message最多在页面中只存在一个
            className: 'lyric-message'
          })
        break
      }
    }
  }

// 歌曲播放完毕后回调
  const onEnd = () => {
    // 更新播放状态为初始状态
    setPlay({
      ...defaultState,
      playing: true
    })
    if (playMode === PLAY_IN_LOOP) {// 单曲循环
      playMusic(0)
    } else {// 顺序播放/随机播放
      dispatch(changeCurrentIndexAndSongAction(1))
    }
    audioRef.current.play()
  }

// 播放歌曲
  const playToggle = () => {
    newPlaying ? playMusic(play.playTime) : audioRef.current.pause()
    setPlay({// 更新播放状态
      ...play,
      playing: newPlaying
    })
  }

// 滚动条滚动时的回调
  const moving = useCallback((currentDistance) => {
    const newCurrentTime = moment(play.playTime * 1000).format('mm:ss')
    setPlay({
      ...play,
      currentTime: newCurrentTime,// 需要更新显示的歌曲当前播放时间
      playTime: currentDistance / 1000 * duration / 1000,// 更新playTime但是不必同步到音频上
      currentDistance,
      isMove: true
    })
  }, [play, duration])

// 松开鼠标
  const mouseUp = useCallback(() => {
    setPlay({
      ...play,
      playing: true,
      isMove: false
    })
    // 播放歌曲(并根据playTime更新歌曲播放进度)
    playMusic(play.playTime)
  }, [play])

// 切换播放模式
  const changePlayMode = () => {
    switch (playMode) {// 顺序播放 -> 随机播放 -> 循环播放
      case  PLAY_IN_RANDOM:
        dispatch(changePlayModeAction(PLAY_IN_LOOP))
        break
      case  PLAY_IN_LOOP:
        dispatch(changePlayModeAction(PLAY_IN_SEQUENCE))
        break
      default :
        dispatch(changePlayModeAction(PLAY_IN_RANDOM))
    }
  }

// 切换歌曲
  const changePlayMusic = (step) => {// step用于表示手动切换歌曲时的步长
    dispatch(changeCurrentIndexAndSongAction(step))
    audioRef.current.currentTime = 0 // 设置currentTime为0防止影响滚动条发生抖动
  }

  return (
    <PlayerWrapper className={'sprite_player'}>
      <div className={'player-content wrap-v2 '}>
        {/* 播放器左边播放按钮 */}
        <PlayerLeft>
          {/* 播放上一首 */}
          <button className={'prev sprite_player btn'}
                  onClick={e => {changePlayMusic(-1)}}/>

          {/* 播放按钮 */}
          <button className={classNames('sprite_player play', 'btn', { pause: play.playing })}
                  onClick={playToggle}/>

          {/* 播放下一首 */}
          <button className={'next sprite_player btn'}
                  onClick={e => {changePlayMusic(1)}}/>
        </PlayerLeft>

        {/* 播放器中间进度条区域 */}
        <PlayerCenter>
          {/* 歌曲图片 */}
          <img src={getSizeImage(image?.picUrl, 34)}
               className={'song-image btn'}
               alt={''}/>

          {/* 进度条区域 */}
          <div className={'progress'}>
            {/* 顶部作者和歌曲名 */}
            <div className={'top text-nowrap'}>
              {/* 歌曲名 */}
              <a href="todo" className={'vocal-name'}>
                {name}
              </a>

              {/* 播放图标 */}
              <div className={'play-icon btn sprite_player'}/>

              {/* 作者 */}
              <div className={'authors'}>
                {
                  singers?.map((singer, index) => {
                    return (
                      <Fragment key={singer.id}>
                        <a href={`https://music.163.com/#/artist?id=${singer.id}`}
                           className={'author'}>
                          {singer.name}
                        </a>
                        {index < singers.length - 1 && <span style={{ color: '#9B9B9B' }}>/</span>}
                      </Fragment>
                    )
                  })
                }
              </div>

              {/* 作者链接 */}
              {true && <div href="todo" className={'link sprite_player'}></div>}
            </div>

            {/* 底部进度条 */}
            <div className={'bottom'}>
              <Slider value={play?.currentDistance}
                      max={1000}
                      onChange={moving}
                      onAfterChange={mouseUp}/>
            </div>
          </div>

          {/* 播放进度 */}
          <div className={'playback_progress'}>
            {/* 当前播放时长 */}
            <div className={'current'}>{play.currentTime}</div>

            {/* 分割线 */}
            <div className={'divider'}>/</div>

            {/* 歌曲总时长 */}
            <div className={'total'}>
              {totalTime}
            </div>
          </div>
        </PlayerCenter>

        {/* 播放器右边收藏歌曲区域 */}
        <PlayerRight>
          {/* 左边按钮 */}
          <div className={'left'}>
            {/* 画中画歌词 */}
            <div className={'btn picture-in-picture'}/>

            {/* 收藏歌曲 */}
            <div className={'btn collect sprite_player'}/>

            {/* 分享歌曲 */}
            <div className={'btn share sprite_player'}/>
          </div>

          {/* 右边按钮 */}
          <div className={'btn right'}>
            {/* 音量控制 */}
            <div className={'btn volume'}>

              {/* 音量图标 */}
              <div className={'volume-icon sprite_player'}
                   onClick={e => {
                     setAudioControl({
                       ...audioControl,
                       isShow: !audioControl.isShow
                     })
                   }}/>

              {/* 控制音量的组件(未封装) */}
              <div className={'volume-control sprite_player'}
                   style={{ visibility: audioControl.isShow ? 'visible' : 'hidden' }}>
                <Slider vertical
                        value={audioControl.audioProcess}
                        onChange={value => {
                          audioRef.current.volume = value / 100
                          setAudioControl({
                            ...audioControl,
                            audioProcess: value
                          })
                        }}/>
              </div>
            </div>

            {/* 循环模式 */}
            <div
              className={
                classNames('btn', 'sprite_player', 'sequence',
                  { loop: playMode === PLAY_IN_LOOP }, { random: playMode === PLAY_IN_RANDOM })
              }
              onClick={e => {changePlayMode()}}/>

            {/* 播放列表 */}
            <div className={'btn play-list sprite_player'}>
              {playList.length}
            </div>
          </div>
        </PlayerRight>

      </div>

      {/* 锁定播放器按钮 */}
      <div className={'lock-bg sprite_player'}>
        <div className={'lock btn sprite_player'}/>
      </div>

      {/* 音频 */}
      <audio src={getPlaySong(songId)}
             ref={audioRef}
             onTimeUpdate={onPlaying}
             autoPlay={false}
             onEnded={onEnd}/>

      message
    </PlayerWrapper>
  )
})

export default LxPlayer


