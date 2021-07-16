// recommend

import React, { memo } from 'react'

import TopBanners from './child-components/top-banners/index'
import LxRecommendContent from './child-components/recommend-content'

function LxRecommend () {
  return (
    <div>
      {/* 顶部轮播图组件 */}
      <TopBanners/>

      {/* recommend主体内容部分 */}
      <LxRecommendContent/>
    </div>
  )
}

export default memo(LxRecommend)
