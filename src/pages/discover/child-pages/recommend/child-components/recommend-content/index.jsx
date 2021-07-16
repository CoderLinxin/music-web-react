/* recommend主页面 */

// 第三方库
import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

// 工具类函数
import {
  getHotRecommendsAction
} from '../../store/index'

// 组件
import {
  ContentWrapper,
  ContentLeft,
  ContentRight
} from './style'
import LxHotRecommend from '../hot-recommend/index'
import LxNewAlbum from '../new-album/index'
import LxRecommendRanking from '../recommend-ranking/index'
import LxLoginIn from '../login-in/index'
import LxSetInSinger from '../set-in-singer/index'
import LxHotAnchor from '../hot-anchor/index'

const LxRecommendContent = memo(function () {
  // state

  // redux-hooks
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendsAction(8))
  }, [dispatch])

  // 其他hooks

  // 业务逻辑

  return (
    <ContentWrapper>
      <div className={'content wrap-v2'}>
        {/* 左界面 */}
        <ContentLeft>
          {/* 热门推荐模块 */}
          <LxHotRecommend/>

          {/* 新碟上架模块 */}
          <LxNewAlbum/>

          {/* 榜单模块 */}
          <LxRecommendRanking/>
        </ContentLeft>

        {/* 右界面 */}
        <ContentRight>
          {/* 登录界面模块 */}
          <LxLoginIn/>

          {/* 入驻歌手模块 */}
          <LxSetInSinger/>

          {/* 热门主播模块 */}
          <LxHotAnchor/>
        </ContentRight>
      </div>
    </ContentWrapper>
  )
})

export default LxRecommendContent
