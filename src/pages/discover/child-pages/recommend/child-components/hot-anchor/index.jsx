/* 热门主播组件 */

import React, { memo } from 'react'

import {
  hotRadios
} from '@/common/local-data'

import {
  HotAnchorWrapper
} from './style'
import Header from '@/components/recommend-right-content-header'
import HotAnchor from '@/components/recommend-right-content-hot-anchor'

const LxHotAnchor = memo(function () {

  const { linkBaseUrl, anchors } = hotRadios

  return (
    <HotAnchorWrapper>
      <Header title={'热门主播'} showMore={false}/>

      <div style={{ paddingTop: '10px' }}>
        {
          anchors.map((anchor, index) => {
            return (
              <HotAnchor linkBaseUrl={linkBaseUrl}
                         anchor={anchor}
                         key={anchor.id}/>
            )
          })
        }</div>
    </HotAnchorWrapper>
  )
})

export default LxHotAnchor


