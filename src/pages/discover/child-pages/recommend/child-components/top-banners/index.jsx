/* recommend/顶部轮播图组件 */

import React, { memo, useState, useEffect, useRef, useCallback } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopBannersAction } from '../../store/index'

import { Carousel } from 'antd'
import {
  BannersWrapper,
  BannersLeft,
  BannersRight,
  BannersController,
  Banner
} from './style'

const LxTopBanners = memo(function () {
  // state:
  const [currentIndex, setCurrentIndex] = useState(0)

  // 获取redux-state
  const { topBanners } = useSelector(state => ({
    topBanners: state.getIn(['recommend', 'topBanners'])
  }), shallowEqual)

  // redux-hooks:
  // 获取dispatch
  const dispatch = useDispatch()

  // 其他hooks:
  // 发送网络请求
  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch])

  const carouselRef = useRef()

  // 业务逻辑:
  // 轮播图切换前的回调
  const bannersChangeBefore = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  // 计算下一次切换的背景图片url(用于设置背成背景图片)
  let currentBanner = topBanners[currentIndex]
  const baseImage = currentBanner?.imageUrl
  let bgImage = (baseImage?.indexOf('?image') === -1
    ? baseImage : baseImage?.substring(0, baseImage.indexOf('?image')))
    + '?imageView&blur=40x20'

  return (
    // 通过传递bgImage属性动态设置styled组件的背景图片
    <BannersWrapper bgImage={bgImage}>
      {/* 中部轮播图部分(使用ant design库) */}
      <div className={'banners wrap-v2'}>
        <BannersLeft>
          <Carousel effect="fade" autoplay={true}
                    className={'swiper'}
                    ref={carouselRef}
                    beforeChange={bannersChangeBefore}
                    pauseOnHover={false}>
            {
              topBanners.map((banner, index) => {
                return (
                  <Banner key={banner.imageUrl} imgUrl={banner.imageUrl}>
                    <a href={`https://music.163.com/#/song?id=${banner.targetId}`}>{banner.typeTitle}</a>
                  </Banner>
                )
              })
            }
          </Carousel>
        </BannersLeft>
        <BannersRight>
          <div className={'download'}>
            <a className={'download-btn'} href={'https://music.163.com/#/download'}>下载客户端</a>
          </div>
          <div className={'text'}>PC 安卓 iPhone WP iPad Mac 六大客户端</div>
        </BannersRight>

        {/* 轮播图控制按钮 */}
        <BannersController>
          <div className="btn left" onClick={e => carouselRef.current.prev()}/>
          <div className="btn right" onClick={e => carouselRef.current.next()}/>
        </BannersController>
      </div>
    </BannersWrapper>
  )
})

export default LxTopBanners


