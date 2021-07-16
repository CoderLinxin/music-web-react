/* 入驻歌手组件 */

import React, { memo } from 'react'

import { setInSinger } from '@/common/local-data'

import {
  SetInSingerWrapper
} from './style'
import Header from '@/components/recommend-right-content-header/index'
import SingeAvatar from '@/components/recommend-right-content-singer-avatar/index'

const LxSetInSinger = memo(function () {
  const { linkBaseUrl, artists } = setInSinger

  return (
    <SetInSingerWrapper>
      {/* 标题 */}
      <Header title={'入驻歌手'}/>

      {/* 歌手列表 */}
      {
        artists.map((singer, index) => {
          return (
            <div className={'singer-list'} key={singer.id}>
              <SingeAvatar linkBaseUrl={linkBaseUrl} singer={singer}/>
            </div>
          )
        })
      }

      {/* 成为歌手 */}
      <div className={'apply-parent sprite_button'}>
        <div className={'apply sprite_button'} >
          申请成为网易音乐人
        </div>
      </div>
    </SetInSingerWrapper>
  )
})

export default LxSetInSinger


