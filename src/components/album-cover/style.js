import styled from 'styled-components'

const AlbumWrapper = styled.div`
  width: ${props => props.width}px;
  
  .new-album{
    position: relative;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-image: url(${props => props.albumUrl});
    background-size: cover;
    
    .album-cover{
      isplay: inline-block;
      
      width: ${props => props.width}px;
      height: ${props => props.size}px;
      background-position: 0 ${props => props.bgPosition};
      text-indent: -9999px;
    }
   
    .play{
    
    }
  }
  
  .subscribe{
    margin-top: 3px;
    font-size: 12px;
    
    .song-name,.singer{
      display: block;
    }
    
    .song-name{
    
    }
    
    .singer{
    
    }
  }
`

export {
  AlbumWrapper
}