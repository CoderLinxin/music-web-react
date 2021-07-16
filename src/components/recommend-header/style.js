import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
  border-bottom: 2px solid #C10D0C;
  margin-bottom: 20px;
  
  .left{
    display: flex;
    justify-content: center; 
    
    .title{
      display: flex;
      font-size: 20px;
      
      .titleIcon:hover{
        cursor: pointer;
      }
      
      .icon{
        width: 34px;
        background-position: -225px -152px;
      }
    }
    
    .tab{
      padding-left: 20px;
      padding-top: 10px;
      
      .divider{
        color: #ccc;
        margin: 0 10px;
      }
    }
  }
  
  .right{
    line-height: 36px;
    
    .arrow{
       position: relative;
       top: 2px;
       margin-left: 7px;
       display: inline-block;
       width: 12px;
       height: 12px;
       background-position: 0 -240px;
    }
  }
`

export {
  HeaderWrapper
}