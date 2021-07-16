/* 新碟封面组件 */

import React, { memo } from 'react'
import PropTypes from 'prop-types'

import {
  AlbumWrapper
} from './style'
import { getSizeImage } from '@/utils/format-data'

const LxAlbumCover = memo(function Index (props) {
  // 三个参数分别为:新碟信息,图片大小,背景图片大小,背景图片位置信息
  const { newAlbum, size, width, bgPosition } = props

  return (
    <AlbumWrapper albumUrl={getSizeImage(newAlbum?.picUrl, size)}
                  size={size}
                  width={width}
                  bgPosition={bgPosition}>
      {/* 顶部新碟封面 */}
      <div className={'new-album'}>
        {/* 图片背景(毛玻璃效果) */}
        <a href={`https://music.163.com/#/album?id=${newAlbum.id}`}
           className={'album-cover image_cover'}>
          {newAlbum.name}
        </a>

        {/* 歌曲播放按钮 */}
        <a href="todo" className={'play'}>

        </a>
      </div>

      {/* 新碟描述 */}
      <div className={'subscribe'}>
        {/* 歌曲名 */}
        <a className={'song-name text-nowrap'}
           href={`https://music.163.com/#/album?id=${newAlbum.id}`}>
          {newAlbum.name}
        </a>

        {/* 歌手名 */}
        <a className={'singer text-nowrap'}
           href={`https://music.163.com/#/artist?id=${newAlbum.artist.id}`}>
          {newAlbum.artist.name}
        </a>
      </div>
    </AlbumWrapper>
  )
})

LxAlbumCover.propTypes = {
  newAlbum: PropTypes.object,
  size: PropTypes.number,
  width: PropTypes.number,
  bgPosition: PropTypes.string
}

LxAlbumCover.defaultProps = {
  newAlbum: {},
  size: 130,
  width: 150,
  bgPosition: '-845px'
}

export default LxAlbumCover


