import styled from 'styled-components'

const SetInSingerWrapper = styled.div`
  margin-top: 15px;
  padding: 0 20px;
  
  .singer-list{
    padding: 10px 0 0 0;
    margin-top: 7px;
  }
  
  .apply-parent{
    position: relative;
    width: 200px;
    background-position: 0 -59px;
    margin-top: 15px;
    margin-left: 5px;
    cursor: pointer;
    border-radius: 4px;
    
    line-height: 31px;
    text-align: center;
    font-weight: bold;
    
    &:hover{
      background-position: 0 -141px;
    }
    
    .apply{
      height: 31px;
      background-position: right -100px;
      font-weight: bolder;
     
     &:hover{
       background-position: right -182px;
     }
    }
  }
  
`

export {
  SetInSingerWrapper
}