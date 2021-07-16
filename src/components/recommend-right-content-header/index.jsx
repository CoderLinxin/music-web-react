/* 热门推荐页面右边内容header组件 */

import React, { memo } from 'react'

import {
  HeaderWrapper
} from './style'

const LxRecommendRightContentHeader = memo(function (props) {
  const { title = '', showMore = true } = props

  return (
    <HeaderWrapper>
      <div className={'title'}>{title}</div>
      {showMore && <div>查看全部 &gt;</div>}
    </HeaderWrapper>
  )
})
export default LxRecommendRightContentHeader



