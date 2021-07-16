/* 提供store */

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducer from './reducer'

// 设置enhancer
const thunkEnhancer = applyMiddleware(thunkMiddleware)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose
const enhancer = composeEnhancers(thunkEnhancer)

// 根据reducer和enhancer创建store
const store = createStore(reducer, enhancer)

export default store