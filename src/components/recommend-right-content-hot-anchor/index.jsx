/* 热门推荐右边界面热门主播组件 */

import React, { memo } from 'react'

import { getSizeImage } from '@/utils/format-data'

import {
  HotAnchorWrapper
} from './style'

const LxRecommendRightContentHotAnchor = memo(function (props) {
  const { linkBaseUrl = '', anchor = {} } = props

  return (
    <HotAnchorWrapper imgUrl={getSizeImage(anchor.picUrl, 40)}>
      {/* 主播头像 */}
      <div className={'avatar'}
           onClick={e => {
             window.location.href = `${linkBaseUrl}${anchor.id}`
           }}/>

      {/* 主播介绍 */}
      <div className={'introduce'}>
        {/* 主播名字 */}
        <a href={`${linkBaseUrl}${anchor.id}`}
           className={'name text-nowrap'}>
          {anchor.name}
        </a>

        {/* 职位 */}
        <div className={'position text-nowrap'}>
          {anchor.position}
        </div>
      </div>
    </HotAnchorWrapper>
  )
})

export default LxRecommendRightContentHotAnchor


