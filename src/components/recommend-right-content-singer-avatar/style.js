import styled from 'styled-components'

const SingerAvatarWrapper = styled.div`
  display: flex;
  width: 210px;
  height: 62px;
  background-color: #fafafa;
  cursor: pointer;
  border: 1px solid #e9e9e9;
  
  &:hover{
    background-color: #f4f4f4;
  }
  
  .avatar{
    display: inline-block;
    background-image: url(${props=>props.imgUrl});
    background-size: cover;
    width: 62px;
    height: 62px;
    text-indent: -9999px;
  }
  
  .introduce{
    width: 133px;
    height: 60px;
    padding-left: 14px;
    
    .name,.describe{
      width: 119px;
      margin-top: 8px;
    }
    
    .name{
      font-size: 14px;
      color: #333;
      font-weight: bold;
    }
  }
`

export {
  SingerAvatarWrapper
}