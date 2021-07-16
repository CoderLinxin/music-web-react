/* 榜单组件 */

import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getRankingListAction } from '../../store'
import { recommendHeader } from '@/common/local-data'

import { RecommendRanking } from './style'
import RecommendHeader from '@/components/recommend-header/index'
import LxRankingList from '@/components/ranking-list/index'

const LxRecommendRanking = memo(function () {
  // state

  // redux-hooks
  const dispatch = useDispatch()

  useEffect(() => {
    // [0,2,3]表示三个榜单的数据的服务器参数
    [0, 2, 3].forEach(idx => {
      dispatch(getRankingListAction(idx))
    })
  }, [dispatch])

  const { soarRanking, newSongRanking, originalRanking } = useSelector(state => ({
    soarRanking: state.getIn(['recommend', 'soarRanking']),
    newSongRanking: state.getIn(['recommend', 'newSongRanking']),
    originalRanking: state.getIn(['recommend', 'originalRanking'])
  }), shallowEqual)

  // 其他hooks

  //业务逻辑

  return (
    <RecommendRanking>
      {/* header组件 */}
      <RecommendHeader title={recommendHeader[2].title}
                       keyWords={recommendHeader[2].keyWords}
                       moreLink={recommendHeader[2].moreLink}/>

      {/* 榜单 */}
      <div className={'ranking-lists'}>
        <LxRankingList rankingList={soarRanking}/>
        <LxRankingList rankingList={newSongRanking}/>
        <LxRankingList rankingList={originalRanking}/>
      </div>
    </RecommendRanking>
  )
})

export default LxRecommendRanking