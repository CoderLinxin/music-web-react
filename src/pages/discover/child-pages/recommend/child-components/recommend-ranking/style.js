import styled from 'styled-components'

const RecommendRanking = styled.div`
  
  .ranking-lists{
    display: flex;
    width: 688px;
    height: 472px;
    padding-left: 1px;
    
    background-image: url(${require("@/assets/img/recommend-top-bg.png").default});
  }
`

export {
  RecommendRanking
}