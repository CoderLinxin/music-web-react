import {
  CHANGE_TOP_BANNERS,
  CHANGE_HOT_RECOMMEND,
  CHANGE_NEW_ALBUMS,
  CHANGE_SOAR_RANKING,
  CHANGE_NEW_SONG_RANKING,
  CHANGE_ORIGINAL_RANKING,
} from './constants'
import { Map } from 'immutable'

const defaultState = Map({// 使用immutable对象
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  soarRanking: {},
  newSongRanking: {},
  originalRanking: {}
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_TOP_BANNERS:
      return state.set('topBanners', action.topBanners)
    case CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommends', action.hotRecommends)
    case CHANGE_NEW_ALBUMS:
      return state.set('newAlbums', action.newAlbums)
    case CHANGE_SOAR_RANKING:
      return state.set('soarRanking', action.soarRanking)
    case CHANGE_NEW_SONG_RANKING:
      return state.set('newSongRanking', action.newSongRanking)
    case CHANGE_ORIGINAL_RANKING:
      return state.set('originalRanking', action.originalRanking)
    default:
      return state
  }
}

export default reducer