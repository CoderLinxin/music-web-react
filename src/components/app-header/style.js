/* header样式(css in js) */

import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  
  .content{
    display: flex;
    justify-content: space-between;
    
    height: 70px;
  }
  
  .divider{
    height: 5px;
    background-color: #C20C0C;
  }
`

export const HeaderLeft = styled.div`
  display: flex;

  .logo{
    display: inline-block;
    width: 176px;
    height: 69px;
    background-position: 0 0;
    
    text-indent: -999px;
  }
  
  .select-list{
    display: flex;
  
    line-height: 70px;
    font-size: 14px;
  
    .select-item {
      position: relative;
      
      a{
        display: block;
        padding: 0 20px;
        color: #ccc;
      } 
      
      &:hover a, a.active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }
      
      :last-of-type a{
       position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require('@/assets/img/sprite_01.png').default});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }
      
      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center; 
  color: #ccc;
  font-size: 12px;
  
  .search{
    display: flex;
    align-items: center;
    
    width: 158px;
    height: 32px;
    background-color: #fff;
    border-radius: 16px;
    
    input{
      border: none;
    }
    
    svg{
      width: 17px;
      height: 17px;
    }
  }
  
  .center{
    width: 90px;
    height: 32px;
    margin: 0 16px;
    border: 1px solid #666;
    border-radius: 16px;
    background-color: transparent;
    
    line-height: 32px;
    text-align: center;
  }
  
  .center:hover{
    display: block;
    text-decoration-line: none;
    color:white;
    border-color: white;
    opacity: .8;
    cursor: pointer;
  }
  
  .login{
    height: 70px;
    line-height: 70px;
  }
  
  .login:hover{
    color: rgba(255,255,255,.9);
    
    span:hover{
       text-decoration-line: underline;
       cursor: pointer;
    }
  }
`