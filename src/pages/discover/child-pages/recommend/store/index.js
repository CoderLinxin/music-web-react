// 统一导出constants,action,reducer

import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUMS,
  CHANGE_SOAR_RANKING,
  CHANGE_NEW_SONG_RANKING,
  CHANGE_ORIGINAL_RANKING,
} from './constants'

import {
  getTopBannersAction,
  getHotRecommendsAction,
  getNewAlbumsAction,
  getRankingListAction,
} from './actionCreators'

import reducer from './reducer'

export {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUMS,
  CHANGE_SOAR_RANKING,
  CHANGE_NEW_SONG_RANKING,
  CHANGE_ORIGINAL_RANKING,

  getTopBannersAction,
  getHotRecommendsAction,
  getNewAlbumsAction,
  getRankingListAction,

  reducer
}