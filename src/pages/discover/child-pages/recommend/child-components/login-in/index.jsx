/* 首页登录组件 */

import React, { memo } from 'react'
import {
  LoginInWrapper
} from './style'

const LxLoginIn = memo(function () {
  return (
    <LoginInWrapper className={'sprite_02'}>
      {/* 登录描述 */}
      <div className={'login-text'}>
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </div>

      {/* 登录按钮 */}
      <div className={'login-btn sprite_02'}>
        用户登录
      </div>
    </LoginInWrapper>
  )
})

export default LxLoginIn


