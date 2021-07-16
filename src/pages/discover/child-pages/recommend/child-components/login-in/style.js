import styled from 'styled-components'

const LoginInWrapper = styled.div`
  width: 250px;
  height: 126px;
  background-position: 0 0;
  
  .login-text{
    font-size: 12px;
    line-height: 22px;
    margin: 0 22.5px;
    padding: 16px 0;
  }
  
  .login-btn{
    width: 100px;
    height: 31px;
    margin: 0 75px;
    text-shadow: 0 1px 0 #8a060b;
    background-position: 0 -195px;
    
    color: #fff;
    text-align: center;
    line-height: 31px;
    cursor: pointer;
    
    &:hover{
      background-position: -110px -195px;
    }
  }
`

export {
  LoginInWrapper
}