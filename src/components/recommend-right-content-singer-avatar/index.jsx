/* 热门推荐页面右边歌手头像组件 */

import React, { memo } from 'react'

import {
  SingerAvatarWrapper
} from './style'

const LxRecommendRightContentSingeAvatar = memo(function Index (props) {
  const { linkBaseUrl = '', singer = {} } = props

  return (
    <SingerAvatarWrapper imgUrl={singer.imgUrl}
                         onClick={e => {
                           window.location.href = linkBaseUrl + singer.id
                         }}>
      {/* 歌手头像 */}
      <a className={'avatar'}
         href={`${linkBaseUrl}${singer.id}`}>
        {singer.name}
      </a>

      {/* 歌手介绍 */}
      <div className={'introduce'}>
        {/* 歌手名字 */}
        <div className={'name text-nowrap'}>
          {singer.name}
        </div>

        {/* 歌手简介 */}
        <div className={'describe text-nowrap'}>
          {singer.describe}
        </div>
      </div>
    </SingerAvatarWrapper>
  )
})

export default LxRecommendRightContentSingeAvatar


