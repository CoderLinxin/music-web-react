/* 合并所有reducer并导出 */

// redux中使用immutableJS
import { combineReducers } from 'redux-immutable'

import { reducer as recommendReducer } from '@/pages/discover/child-pages/recommend/store'
import { reducer as playerReducer } from '@/pages/player/store/index'

// 合并reducer
const reducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})

export default reducer