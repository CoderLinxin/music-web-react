import { Map } from 'immutable'
import {
  CHANGE_CURRENT_SONG,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_PLAY_LIST,
  CHANGE_PLAY_MODE,
  PLAY_IN_SEQUENCE,
  CHANGE_LYRIC_LIST,
  CHANGE_CURRENT_LYRIC_INDEX
} from './constants'

const defaultState = Map({
  currentSong: {},// 当前播放歌曲
  currentSongIndex: 0,// 当前播放歌曲在播放列表中的索引
  playList: [], // 播放列表
  playMode: PLAY_IN_SEQUENCE, //歌曲播放模式(默认顺序播放)
  lyricList: [], // 歌词列表 [{time:0,content:''},..]
  currentLyricIndex: 0 // 歌词列表中正在播放的歌词(的索引)
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong)
    case CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.currentSongIndex)
    case CHANGE_PLAY_LIST:
      return state.set('playList', action.playList)
    case CHANGE_PLAY_MODE:
      return state.set('playMode', action.playMode)
    case CHANGE_LYRIC_LIST:
      return state.set('lyricList', action.lyricList)
    case CHANGE_CURRENT_LYRIC_INDEX:
      return state.set('currentLyricIndex', action.currentLyricIndex)
    default:
      return state
  }
}

export default reducer