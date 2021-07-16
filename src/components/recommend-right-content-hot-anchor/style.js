import styled from 'styled-components'

const HotAnchorWrapper = styled.div`
  display: flex;
  width: 210px;
  height: 40px;
  padding-bottom: 10px;
  margin-top: 10px;
  background-size: cover;
  
  .avatar{
    width: 40px;
    height: 40px;
    background-image: url(${props => props.imgUrl});
    cursor: pointer;
  }
  
  .introduce{
    width: 160px;
    margin-left: 10px;
    
    .name,.detail{
      width: 160px;
    }
    .name{
      cursor: pointer;
    }
    
    .position{
    
    }
  }
`

export {
  HotAnchorWrapper
}