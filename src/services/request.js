import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

// 设置请求拦截
instance.interceptors.request.use(config => {
  // console.log('请求拦截~', config)
  return config // 最后记得返回配置信息(结束拦截)
}, error => {
  console.log(error)
})

// 设置响应拦截
instance.interceptors.response.use(result => {
  // console.log('响应拦截~', result.data)
  return result.data // 最后记得返回结果(结束拦截)
}, error => {
  console.log(error)
})

export default instance