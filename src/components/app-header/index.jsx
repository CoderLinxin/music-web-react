/* 首页header组件 */

// react相关
import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

// antd
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'

import { headerLinks } from '@/common/local-data'

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from './style'

export default memo(function LxAppHeader () {
  /* 业务代码 */
  const showSelectItem = (item, index) => {
    // 前三个header-item为路由跳转
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          <div>{item.title}</div>
          <i className={'sprite_01 icon'}/>
        </NavLink>
      )
    } else {// 后三个为超链接
      return (
        <a href={item.link}>
          {item.title}
        </a>
      )
    }
  }

  /* jsx */
  return (
    <HeaderWrapper>
      <div className={'content wrap-v1'}>
        {/* 左边导航栏/icon */}
        <HeaderLeft>
          <a href="#/" className={'sprite_01 logo'}>网易云音乐</a>

          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div key={item.title} className={'select-item'}>
                    {showSelectItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>

        {/* 右边搜索框/创作者中心/登录 */}
        <HeaderRight>
          <div>
            <Input placeholder="音乐/视频/电台/用户"
                   prefix={<SearchOutlined/>}
                   className={'search'}/>
          </div>

          <a className={'center'} href={'https://music.163.com/#/login?targetUrl=%2Fcreatorcenter'}>创作者中心</a>

          <div className={'login'}>
            <span>登录</span>
          </div>
        </HeaderRight>
      </div>

      <div className="divider"/>
    </HeaderWrapper>
  )
})


