/* 新碟上架组件 */

import React, { memo, useEffect, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { recommendHeader } from '@/common/local-data'
import { getNewAlbumsAction } from '../../store/index'

import { Carousel } from 'antd'
import {
  NewAlbumWrapper,
  AlbumBannerWrapper
} from './style'
import RecommendHeader from '@/components/recommend-header/index'
import LxAlbumCover from '@/components/album-cover/index'

const LxNewAlbum = memo(function () {
  // state

  // redux-hooks
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(['recommend', 'newAlbums'])
  }), shallowEqual)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewAlbumsAction(10))
  }, [dispatch])

  // 其他hooks
  const albumBannersRef = useRef()

  // 业务逻辑

  return (
    <NewAlbumWrapper>
      {/* 导航 */}
      <RecommendHeader title={recommendHeader[1].title}
                       keyWords={recommendHeader[1].keyWords}
                       moreLink={recommendHeader[1].moreLink}/>

      {/* 新碟上架 */}
      <AlbumBannerWrapper>
        {/* 图片轮播 */}
        <div className={'album-banners'}>
          <Carousel autoplay={false} ref={albumBannersRef} dots={false}>
            {
              [0, 1].map(offset => {// 2页轮播,一页5张图片
                return (
                  <div className={'page'} key={offset}>
                    {
                      newAlbums.slice(offset * 5, (offset + 1) * 5).map((newAlbum, index) => {
                        return (
                          <div key={newAlbum.id}>
                            <LxAlbumCover newAlbum={newAlbum}
                                          bgPosition={'-570px'}
                                          size={100}
                                          width={118}/>
                          </div>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>

        {/* 轮播按钮 */}
        <div className={'arrow'}>
          <div className={'left sprite_02'} onClick={e => albumBannersRef.current.prev()}/>
          <div className={'right sprite_02'} onClick={e => albumBannersRef.current.next()}/>
        </div>
      </AlbumBannerWrapper>
    </NewAlbumWrapper>
  )
})

export default LxNewAlbum


