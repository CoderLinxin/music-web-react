/* 配置路由映射 */

import React, { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const LxDiscover = lazy(() => import('@/pages/discover'))
const LxAlbum = lazy(() => import('@/pages/discover/child-pages/album'))
const LxArtist = lazy(() => import('@/pages/discover/child-pages/artist'))
const LxDjradio = lazy(() => import('@/pages/discover/child-pages/djradio'))
const LxRanking = lazy(() => import('@/pages/discover/child-pages/ranking'))
const LxRecommend = lazy(() => import('@/pages/discover/child-pages/recommend'))
const LxSongs = lazy(() => import('@/pages/discover/child-pages/songs'))
const LxMine = lazy(() => import( '@/pages/mine'))
const LxFriend = lazy(() => import('@/pages/friend'))

const routes = [
  {
    path: '/',
    exact: true,
    // 路由重定向
    render: () => <Redirect to={'/discover'}/>
  },
  {
    path: '/discover',
    component: LxDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => <Redirect to={'/discover/recommend'}/>
      },
      {
        path: '/discover/album',
        component: LxAlbum
      },
      {
        path: '/discover/artist',
        component: LxArtist
      },
      {
        path: '/discover/djradio',
        component: LxDjradio
      },
      {
        path: '/discover/ranking',
        component: LxRanking
      },
      {
        path: '/discover/recommend',
        component: LxRecommend
      },
      {
        path: '/discover/songs',
        component: LxSongs
      },
    ]
  },
  {
    path: '/mine',
    component: LxMine
  },
  {
    path: '/friend',
    component: LxFriend
  },
]

export default routes