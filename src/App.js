/* 根组件 */

import React, { memo, Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import store from '@/store/index'
import { Provider } from 'react-redux'

import LxAppHeader from '@/components/app-header/index'
import LxAppFooter from '@/components/app-footer/index'
import LxPlayer from '@/pages/player/index'

import routes from '@/router/index'
import '@/assets/css/reset.css'

export default memo(function App () {
  return (
    <Provider store={store}>
      <HashRouter className="App">
        {/* 首页头部组件 */}
        <LxAppHeader/>

        {/* 首页中部路由导航 */}
        <Suspense fallback={<div>页面正在加载,请稍后~</div>}>
          {renderRoutes(routes)}
        </Suspense>

        {/* 首页底部组件 */}
        <LxAppFooter/>

        {/* 首页底部歌曲播放器组件 */}
        <LxPlayer/>
      </HashRouter>
    </Provider>
  )
})


