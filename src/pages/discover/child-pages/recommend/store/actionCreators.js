/* 定义action */

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getRankingList,
} from '@/services/recommend'
import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUMS,
  CHANGE_SOAR_RANKING,
  CHANGE_NEW_SONG_RANKING,
  CHANGE_ORIGINAL_RANKING,
} from './constants'

// reducerAction
const changeTopBannersAction = (topBanners) => ({
  type: CHANGE_TOP_BANNERS,
  topBanners
})

const changeHotRecommendsAction = (hotRecommends) => ({
  type: CHANGE_HOT_RECOMMEND,
  hotRecommends
})

const changeNewAlbumAction = (newAlbums) => ({
  type: CHANGE_NEW_ALBUMS,
  newAlbums
})

const changeSoarRankingAction = (soarRanking) => ({
  type: CHANGE_SOAR_RANKING,
  soarRanking
})

const changeNewSongRanking = (newSongRanking) => ({
  type: CHANGE_NEW_SONG_RANKING,
  newSongRanking
})

const changeOriginalRanking = (originalRanking) => ({
  type: CHANGE_ORIGINAL_RANKING,
  originalRanking
})

// 中间件action
// 顶部轮播图action中间件
const getTopBannersAction = () => {// 包裹一层函数方便接收参数(如果有),例如网络请求的offset,limit参数
  return (dispatch, getState) => {
    getTopBanners().then(result => {
      // 派发真正的action(更新state)
      dispatch(changeTopBannersAction(result.banners))
    })
  }
}

// 热门推荐action中间件
const getHotRecommendsAction = (limit) => {
  return (dispatch, getState) => {
    getHotRecommends(limit).then(result => {
      const hotRecommends = result.result
      // 派发真正的action(更新state)
      dispatch(changeHotRecommendsAction(hotRecommends))
    })
  }
}

// 新碟上架中间件
const getNewAlbumsAction = (limit) => {
  return (dispatch, getState) => {
    getNewAlbums(limit).then(result => {
      const newAlbums = result.albums
      dispatch(changeNewAlbumAction(newAlbums))
    })
  }
}

// 榜单中间件
const getRankingListAction = (idx) => {
  return (dispatch, getState) => {
    getRankingList(idx).then(result => {
      switch (idx) {
        case 0:
          dispatch(changeSoarRankingAction(result.playlist))
          break
        case 2:
          dispatch(changeNewSongRanking(result.playlist))
          break
        case 3:
          dispatch(changeOriginalRanking(result.playlist))
          break
        default:
          break
      }
    })
  }
}

export {
  getTopBannersAction,
  getHotRecommendsAction,
  getNewAlbumsAction,
  changeNewAlbumAction,
  getRankingListAction
}