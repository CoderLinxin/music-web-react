import styled from 'styled-components'

const ContentWrapper = styled.div`
  .content{
    display: flex;
  }
`

const ContentLeft = styled.div`
    width: 729px;
    padding: 20px 20px 40px 20px;
    background-color: white;
    border: 1px solid #d3d3d3;
    
    .song-items{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
`

const ContentRight = styled.div`
  flex-grow: 1;
  border: 1px solid #d3d3d3;
  border-left: none;
  background-color: white;
`

export {
  ContentWrapper,
  ContentLeft,
  ContentRight
}