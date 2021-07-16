/* 对数据进行格式化的工具函数 */

// 对歌曲播放量格式化
const formatPlayCount = (count) => {
  if (count < 0)
    return
  else if (count < 10000)
    return count
  else if (Math.floor(count / 10000) < 10000)// 大于10000 < 1亿
    // 小数点后保留一位:注意JS中整数相除结果为浮点数,所以最后的除以10实际上就是为了小数点后一位的目的
    return Math.floor(count / 1000) / 10 + '万'
  else
    // 小数点后保留一位
    return Math.floor(count / 10000000) / 10 + '亿'
}

// 根据size向服务器请求较小的图片
function getSizeImage (imgUrl, size) {
  return `${imgUrl}?param=${size}y${size}`
}

// 根据歌曲id获取歌曲链接
const getPlaySong = (id) =>
  `https://music.163.com/song/media/outer/url?id=${id}.mp3`

// 获取0 - num之间的随机整数数
const getRandom0ToNum = (num) => Math.floor(Math.random() * num)

// [03:12.00]May all the beauty be blessed
// [03:19.228] 人声录音 : 徐威@52HzStudio

// 歌词解析 => [{time:时间,content:歌词},....]
const parseExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/ // 用于匹配一段歌词中的时间
const parseLyric = (lyricString) => {
  const lyricArray = lyricString.split('\n')
  const lyrics = []
  for (let lyric of lyricArray) {
    const result = parseExp.exec(lyric)
    if (!result) continue // 当前匹配不到则继续匹配

    // 时间
    const minute = result[1] * 60 * 1000 // 分钟化为毫秒
    const second = result[2] * 1000 // 秒钟化为毫秒
    const millisecond = result[3].length === 3 ? +result[3] : result[3] * 10
    const time = minute + second + millisecond

    // 歌词
    const content = lyric.replace(parseExp, '').trim()

    lyrics.push({ time, content })
  }
  return lyrics
}

export {
  formatPlayCount,
  getSizeImage,
  getPlaySong,
  getRandom0ToNum,
  parseLyric
}