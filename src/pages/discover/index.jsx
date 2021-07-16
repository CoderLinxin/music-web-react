/* 发现音乐页面 */

import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { dicoverMenu } from '@/common/local-data'

import {
  DiscoverWrapper,
  Top,
  MenuContent
} from './style'

export default memo(function LxDiscover (props) {
  return (
    <div>
      <DiscoverWrapper>
        {/* 顶部导航栏 */}
        <Top>
          <div className={'wrap-v1 top-menu'}>
            {
              dicoverMenu.map((item, index) => {
                return (
                  <NavLink to={item.link} key={item.title}>{item.title}</NavLink>
                )
              })
            }
          </div>
        </Top>

        {/* 路由页面切换 */}
        <MenuContent>
          {renderRoutes(props.route.routes)}
        </MenuContent>
      </DiscoverWrapper>
    </div>
  )
})


