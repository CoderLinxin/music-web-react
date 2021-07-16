import styled from 'styled-components'

const HeaderWrapper =styled.div`
  display: flex;
  justify-content: space-between;
  width: 210px;
  height: 23px;
  line-height: 23px;
  border-bottom: 1px solid #ccc;
  
  .title{
    color: #333;
    font-weight: bolder;
  }
`

export {
  HeaderWrapper
}