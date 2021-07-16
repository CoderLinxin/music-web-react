import styled from 'styled-components'

const NewAlbumWrapper = styled.div``

const AlbumBannerWrapper = styled.div`
  position: relative;
  
  width: 689px;
  height: 184px;
  background-color: rgb(245, 245, 245);
  border: 1px solid #d3d3d3;
  padding: 28px 17px 20px 17px;
  margin-bottom: 30px;
  
  .album-banners{
    height: 134px;
    
    .page{
      display: flex!important;
      justify-content: space-around;
    }
  }
  
  .arrow{
  
    .left,.right{
       position: absolute;
       top: 91px;
       transform: translateY(-50%);
       cursor: pointer;
       width: 17px;
       height: 17px;
    }
  
    .left{
       left: 4px;
       background-position: -260px -75px;
    }
    
    .right{
       right: 4px;
       background-position: -300px -75px;
    }
  }
`

export {
  NewAlbumWrapper,
  AlbumBannerWrapper
}