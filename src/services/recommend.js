/* recommend-page-service */

import request from './request'

// 获取顶部轮播图数据
const getTopBanners = () => {
  return request({
    url: '/banner'
  })
}

// 获取热门推荐数据
const getHotRecommends = (limit) => {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}

// 获取新碟上架数据
const getNewAlbums = (limit) => {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}

// 获取榜单数据
const getRankingList = (idx) => {
  return request({
    url: '/top/list',
    params: {
      idx
    }
  })
}

export {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getRankingList
}