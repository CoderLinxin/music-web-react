/* css in js */

import styled from 'styled-components'

// top-banners组件根标签
const BannersWrapper = styled.div`
  .banners{
    position: relative;
    display: flex;
    height: 280px;
  }
  
  background: url(${props => props.bgImage}) center;
  background-size: 6000px;
`

const BannersLeft = styled.div`
  width: 730px;
  height: 280px;
  
  .swiper{
    li{
       margin-bottom: 10px;
    }
  
    button{
        width: 10px!important;
        height:10px!important;
        border-radius: 5px!important;
    }
  }
`

const Banner = styled.div`
    background-image: url(${props => props.imgUrl});
    background-size:cover;
    
    a{
      text-indent: -9999px;
      display: block;
      height: 280px;
    }
`

const BannersRight = styled.div`
  position: relative;
  flex-grow: 1;
  background-color:red;
  
  .download{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 280px;
    background: url(${require('@/assets/img/download.png').default});
    
    .download-btn{
       width: 215px;
       height: 56px;
       margin-top: 186px;
       background: url(${require('@/assets/img/download.png').default}) -19px -185px;
       z-index: 999;
       
       &:hover{
        cursor: pointer;
        background-image: url(${require('@/assets/img/download2.png').default});
       }
       
      text-indent:-9999px;
    }
  }
  
  .text{
    position: absolute;
    bottom: 0;
    
    width: 250px;
    height: 36px;
    
    line-height: 36px;
    text-align: center;
    color: #8d8d8d;
  }
`

// 轮播图控制按钮部分
const BannersController = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-36.5px);
  
  .btn{  
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${require('@/assets/img/banner_sprite.png').default});
    cursor: pointer;
    
    &:hover {
      background-color: rgba(0, 0, 0, .1);
    }
  }
  
  .left{
    left: -68px;
    background-position: 0 -360px;
  }
  
  .right{
    right: -68px;
    background-position: 0 -508px;
  }
`

export {
  BannersWrapper,
  BannersLeft,
  Banner,
  BannersRight,
  BannersController
}