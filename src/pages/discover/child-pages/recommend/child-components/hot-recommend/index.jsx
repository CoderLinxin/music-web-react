/* 热门推荐组件 */

import React, { memo } from 'react'
import RecommendHeader from '@/components/recommend-header/index'
import { shallowEqual, useSelector } from 'react-redux'

import { recommendHeader } from '@/common/local-data'

import {
  HotRecommendWrapper
} from './style'
import LxSongCover from '@/components/song-cover/index'

const LxHotRecommend = memo(function Index () {
  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.getIn(['recommend', 'hotRecommends'])
  }), shallowEqual)

  return (
    <HotRecommendWrapper>
      <RecommendHeader title={recommendHeader[0].title}
                       keyWords={recommendHeader[0].keyWords}
                       moreLink={recommendHeader[0].moreLink}/>
      <div className={'song-items'}>
        {
          hotRecommends.map((item, index) => {
            return (
              <LxSongCover key={item.id} lyric={item}/>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})

export default LxHotRecommend


