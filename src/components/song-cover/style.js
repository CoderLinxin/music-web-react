import styled from 'styled-components'

const SongCoverWrapper = styled.div`
  display: inline-block;
  height: 234px;
`

const Cover = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  background-image: url(${props => props.imgUrl});
  background-size: cover;
  
  .glassBg{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: 0 0;
      text-indent: -9999px;
      
    &:hover{
      cursor: pointer;
    }
  }
  
  .play{
    display: flex;
    justify-content: space-between;
    align-items: center;
  
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-position: 0 -537px;
    height: 27px;
    padding: 0 10px;
    
    color: #ccc;
    
    .play-count{
      
      .icon{
          margin-right: 5px;
          display: inline-block;
          width: 14px;
          height: 11px;
          background-position: 0 -24px;
      }
    }
    
    .play-button{
       display: inline-block;
       width: 16px;
       height: 17px;
       background-position: 0 0;
       text-indent: -9999px;
       
       &:hover{
          background-position: 0 -60px;
       }
    }
  }
`

const SongScribe = styled.div`
  width: 140px;
  height: 43px;
  margin-top: 5px;
  
  font-size: 14px;
  
  overflow: hidden;
  text-overflow: ellipsis;
`

export {
  SongCoverWrapper,
  Cover,
  SongScribe
}