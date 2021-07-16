import styled from 'styled-components'

const RankingListWrapper = styled.div`
  height: 472px;
`

const RankingTitle = styled.div`
  display: flex;
  width: 230px;
  padding: 20px 0 20px 19px;
  
  .icon{
    position: relative;
    width: 80px;
    height: 80px;
    background-image: url(${props => props.imageUrl});
    .iconBg{
      display: inline-block;
      width: 80px;
      height: 80px;
      text-indent: -9999px;
    }
  }
  
  .broadcast{
    flex-grow: 1;
    margin-left: 10px;
    margin-top: 6px;
    
    .title{
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
    
    .play-btn{
      display: flex;
      margin-top: 10px;
      
      .play,.add{
        width: 22px;
        height: 22px;
        margin-right: 10px;
        cursor: pointer;
      }
      
      .play{
        flex-grow: 0;        
        background-position: -267px -205px;
        margin-left: 0;
        
        &:hover{
          background-position: -267px -235px
        }
      }
      
      .add{
        background-position: -300px -205px;
        
        &:hover{
          background-position: -300px -235px;
        }
      }
    }
  }
`

const RankingList = styled.div`
  width: 180px;
  height: 320px;
  
  .list-item{
    display: flex;
    justify-content: space-between;
    width: 230px;
    height: 32px;
    line-height: 32px;
    padding-left: 19px;
    
    &:hover{
      .btn{
        display: block!important;
      }
    }

    :nth-child(-n+3) .rank {
      color: #c10d0c;
    }

    .rank{
      width: 35px;
      height: 32px;
      font-size: 16px;
      text-align: center;
    }
    
    .right{
      display: flex;
      width: 170px;
      justify-content: space-between;
      
      .song-name{
        width: 170px;
      }
    
      .play-song{
        display: flex;
        align-items: center;
      
        .btn{
          display: none;
          text-indent: -9999px;
          width: 17px;
          height: 17px;
          margin-left: 10px;
          cursor: pointer;
        }
        
        .btn:last-of-type{
          margin-right: 15px;
        }
        
        .listen{
          background-position: -267px -268px;
          
          &:hover{
            background-position: -267px -288px;
          }
        }
        
        .add{
          position: relative;
          top: 2px;
          background-position: 0 -700px;

           &:hover{
             background-position: -22px -700px;
          }
        }
        
        .download{
          background-position: -297px -268px;
          
          &:hover{
            background-position: -297px -288px;
          } 
        }
      }
    }
  }
`

const LookAllList = styled.div`
  display: flex;
  flex-direction: row-reverse;
  height: 32px;
  line-height: 32px;
  padding-right: 32px;
`

export {
  RankingListWrapper,
  RankingTitle,
  RankingList,
  LookAllList,
}