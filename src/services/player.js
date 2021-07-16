import request from './request'

// 请求一条歌曲信息
const getSongDetail = (ids) => {
  return request({
    url: '/song/detail',
    params: {
      ids
    }
  })
}

// 请求歌词
const getLyric = (id) => {
  return request({
    url: '/lyric',
    params: {
      id
    }
  })
}

export {
  getSongDetail,
  getLyric
}