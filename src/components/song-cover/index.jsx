/* 歌曲封面组件 */

import React, { memo } from 'react'

import {
  formatPlayCount,
  getSizeImage
} from '@/utils/format-data'

import {
  SongCoverWrapper,
  Cover,
  SongScribe
} from './style'

const LxSongCover = memo(function (props) {
  const { lyric } = props
  return (
    <SongCoverWrapper>
      {/* 歌曲图片 */}
      <Cover imgUrl={getSizeImage(lyric.picUrl, 140)} alt={lyric.name}>
        {/* 玻璃图片背景 */}
        <a className={'sprite_cover glassBg'}
           href={`https://music.163.com/#/playlist?id=${lyric.id}`}>
          {lyric.name}
        </a>

        {/* 播放量及播放按钮 */}
        <div className={'play sprite_cover'}>
          {/* 左边播放量 */}
          <div className={'play-count'}>
            <span className={'sprite_icon icon'}/>
            <span>{formatPlayCount(lyric.playCount)}</span>
          </div>

          {/* 右边播放按钮 */}
          <a className={'sprite_icon play-button'} href={'todo'}>播放歌曲</a>
        </div>
      </Cover>

      {/* 歌曲描述 */}
      <SongScribe>
        <a href={`https://music.163.com/#/playlist?id=${lyric.id}`}>{lyric.name}</a>
      </SongScribe>
    </SongCoverWrapper>
  )
})

export default LxSongCover

