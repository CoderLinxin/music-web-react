import styled from 'styled-components'

export const DiscoverWrapper = styled.div`


`

export const Top = styled.div`
  background-color: rgb(194, 12, 12);
  
  .top-menu{
    display: flex;
    align-items: center;
    
    height: 35px;
    padding-left: 180px;
    
    a{
      display: inline-block;
      color: white;
      margin: 0 17px 7px;
      padding: 2px 13px;
      cursor: pointer;
      border-radius: 20px;
      text-decoration-line: none;
    }
    
    a:hover,a.active{
      background-color: rgba(155, 9, 9);
    }
  }
`

export const MenuContent = styled.div`


`