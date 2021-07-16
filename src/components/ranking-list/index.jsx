// 榜单列表组件

import React, { memo } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { getSizeImage } from '@/utils/format-data'
import { getCurrentSongAction } from '@/pages/player/store/index'

import {
  RankingListWrapper,
  RankingTitle,
  RankingList,
  LookAllList,
} from './style'

const LxRankingList = memo(function Index (props) {
  // state/props
  const { rankingList } = props
  const { tracks = [] } = rankingList

  // redux-hooks
  const dispatch = useDispatch()

  // 其他hooks

  // 业务逻辑

  return (
    <RankingListWrapper>
      {/* 榜单标题 */}
      <RankingTitle imageUrl={getSizeImage(rankingList.coverImgUrl, 80)}>
        {/* 左边榜单图标 */}
        <div className={'icon'}>
          <a href={`https://music.163.com/#/discover/toplist?id=${rankingList.id}`}
             className={'iconBg image_cover'}>
            {rankingList.name}
          </a>
        </div>

        {/* 右边播放和添加歌曲按钮 */}
        <div className={'broadcast'}>
          {/* 标题 */}
          <a href={`https://music.163.com/#/discover/toplist?id=${rankingList.id}`}
             className={'title'}>
            {rankingList.name}
          </a>

          {/* 播放和添加按钮 */}
          <div className={'play-btn'}>
            <div className={'play sprite_02'}/>
            <div className={'add sprite_02'}/>
          </div>
        </div>
      </RankingTitle>

      {/* 榜单列表 */}
      <RankingList>
        {
          tracks.slice(0, 10).map((song, index) => {
            return (
              <div className={'list-item'} key={song.id}>
                {/* 歌曲排名 */}
                <div className={'rank'}>{index + 1}</div>

                <div className={'right'}>
                  {/* 曲名 */}
                  <a className={'song-name text-nowrap'}
                     href={`https://music.163.com/#/song?id=${song.id}`}>
                    {song.name}
                  </a>

                  {/* 播放按钮 */}
                  <div className={'play-song'}>
                    <div className={'sprite_02 btn listen'}
                       onClick={e => {dispatch(getCurrentSongAction(song.id))}}>
                      listen
                    </div>
                    <a href="todo" className={'sprite_icon2 btn add'}>
                      add
                    </a>
                    <a href="todo" className={'sprite_02 btn download'}>
                      download
                    </a>
                  </div>
                </div>
              </div>
            )
          })
        }
      </RankingList>

      {/* 查看全部 */}
      <LookAllList>
        <a href={`https://music.163.com/#/discover/toplist?id=${rankingList.id}`}>
          查看全部 &gt;
        </a>
      </LookAllList>
    </RankingListWrapper>
  )
})

LxRankingList.propTypes = {
  rankingList: PropTypes.object
}

LxRankingList.defaultProps = {
  rankingList: {}
}

export default LxRankingList


