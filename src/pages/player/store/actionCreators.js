import {
  getSongDetail,
  getLyric
} from '@/services/player'
import {
  getRandom0ToNum,
  parseLyric
} from '@/utils/format-data'

import {
  CHANGE_CURRENT_SONG,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAY_LIST,
  CHANGE_PLAY_MODE, PLAY_IN_RANDOM,
  CHANGE_LYRIC_LIST,
  CHANGE_CURRENT_LYRIC_INDEX
} from './constants'

// action
const changeCurrentSongAction = (currentSong) => ({
  type: CHANGE_CURRENT_SONG,
  currentSong
})

const changeCurrentSongIndexAction = (currentSongIndex) => ({
  type: CHANGE_CURRENT_SONG_INDEX,
  currentSongIndex
})

const changePlayListAction = (playList) => ({
  type: CHANGE_PLAY_LIST,
  playList
})

const changePlayModeAction = (playMode) => ({
  type: CHANGE_PLAY_MODE,
  playMode
})

const changeLyricListAction = (lyricList) => ({
  type: CHANGE_LYRIC_LIST,
  lyricList
})

const changeCurrentLyricIndexAction = (currentLyricIndex) => ({
  type: CHANGE_CURRENT_LYRIC_INDEX,
  currentLyricIndex
})

// 中间件
const getLyricAction = (id) => {
  return (dispatch, getState) => {
    getLyric(id).then(result => {
      const lyric = result.lrc.lyric
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricListAction(lyricList))
    })
  }
}

const getCurrentSongAction = (ids) => {
  return (dispatch, getState) => {// 添加歌曲动作
    const playList = getState().getIn(['player', 'playList'])

    // 歌曲列表中查找是否存在已添加歌曲
    const songIndex = playList.findIndex(song => song.id === ids)// 找不到则currentIndex为-1

    let song = null
    if (songIndex !== -1) {// 如果歌曲存在于播放列表则只更新currentIndex和currentSong
      song = playList[songIndex]
      dispatch(changeCurrentSongIndexAction(songIndex))
      dispatch(changeCurrentSongAction(playList[songIndex]))

      // 初始化歌词索引
      dispatch(changeCurrentLyricIndexAction(0))
    } else { // 如果歌曲不存在则添加到播放列表并更新currentIndex和currentSong
      getSongDetail(ids).then(result => {
        song = result?.songs[0]
        dispatch(changePlayListAction([...playList, song]))
        dispatch(changeCurrentSongIndexAction(playList.length))
        dispatch(changeCurrentSongAction(song))

        // 初始化歌词索引
        dispatch(changeCurrentLyricIndexAction(0))

        if (!song)
          return console.log('请求歌词失败~')

        // 请求歌词
        dispatch(getLyricAction(song.id))
      })
    }
  }
}

// 根据播放模式切换歌曲(更新currentIndex和currentSong,这里不做网络请求)
const changeCurrentIndexAndSongAction = (step) => {// step表示手动切换歌曲时的步长
  return (dispatch, getState) => {
    const playList = getState().getIn(['player', 'playList'])
    const playMode = getState().getIn(['player', 'playMode'])
    let currentSongIndex = getState().getIn(['player', 'currentSongIndex'])

    switch (playMode) {
      case PLAY_IN_RANDOM: {// 随机播放
        if (playList.length === 1) break // 如果歌曲列表只有一个歌曲则重新播放当前歌曲
        let randomIndex = currentSongIndex
        while (randomIndex === currentSongIndex) {// 下一次随机播放的歌曲不和上一首相同
          randomIndex = getRandom0ToNum(playList.length)
        }
        currentSongIndex = randomIndex
      }
        break
      default:// 顺序播放
        currentSongIndex += step
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1
        if (currentSongIndex >= playList.length) currentSongIndex = 0
    }

    // 更新currentIndex和currentSong
    dispatch(changeCurrentSongAction(playList[currentSongIndex]))
    dispatch(changeCurrentSongIndexAction(currentSongIndex))

    // 初始化当前播放歌词索引
    dispatch(changeCurrentLyricIndexAction(0))

    // 请求歌词
    dispatch(getLyricAction(playList[currentSongIndex].id))
  }
}

export {
  getCurrentSongAction,
  changePlayModeAction,
  changeCurrentIndexAndSongAction,
  changeCurrentLyricIndexAction
}