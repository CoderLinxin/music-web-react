import styled from 'styled-components'

const PlayerWrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 9999;
  
  height: 53px;
  width: 100%;
  background-position: 0 0;
  background-repeat: repeat-x;
  
  .player-content{
    position: relative;
    top: 4px;
    display: flex;
    align-items: center;
    height: 100%;
  }
  
  .btn{
    cursor: pointer;
  }
  
    
  .lock-bg{
    position: absolute;
    top: -14px;
    right: 15px;
    width: 52px;
    height: 67px;
    background-position: 0 -380px;
  
    .lock{
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      background-position: -100px -380px;
      
      &:hover{
        background-position: -100px -400px;
      } 
    }
  }
`

const PlayerLeft = styled.div`
  display: flex;
  align-items: center;
  width: 137px;
  height: 36px;
  
  >.prev{
    width: 28px;
    height: 28px;
    background-position: 0 -130px;
    
    &:hover{
      background-position: -30px -130px;
    }
  }
  
  >.play{
    width: 36px;
    height: 36px;
    background-position: 0 -204px;
    
    &:hover{
      background-position: -40px -204px;
    }
  }
  
  >.pause{
    background-position: 0 -165px;
    
    &:hover{
      background-position: -40px -165px;
    }
  }
  
  >.next{
    width: 28px;
    height: 28px;
    background-position: -80px -130px;
    
    &:hover{
      background-position: -110px -130px;
    }
  }
`

const PlayerCenter = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  height: 100%;
  
  .song-image{
    width: 34px;
    height: 35px;
  }
  
  .progress{
    margin-left: 15px;
    
    .top{
      width: 478px;
      display: flex;
      font-size: 12px;

      .vocal-name{
        line-height: 16px;
        color: #e8e8e8;
      }
      
      .play-icon{
        width: 19px;
        height: 17px;
        background-position: 0 -57px;
        margin-left: 10px;
        margin-right: 15px;
        
        &:hover{
          background-position: -20px -57px;
        }
      }
      
      .author{
        line-height: 18px;
        color:#9b9b9b
      }
      
      .link{
        width: 14px;
        height: 15px;
        margin-left: 13px;
        margin-top: 1.5px;
        background-position: -110px -103px;
        
        &:hover{
          background-position: -130px -103px;
        }
      }
    }
    
    .bottom{
      .ant-slider{
        cursor: auto;
        width: 466px;
        margin-top: 3px;
        margin-bottom: 5px;
        
        .ant-slider-rail,.ant-slider-track,.ant-slider-step{
          position: absolute;
          background-color: rgba(255,255,255,0);
          opacity: 1;
          height: 9px;
          border-radius: 4.5px;
        }
        
        .ant-slider-track{
          background-image: url(${require('@/assets/img/progress_bar.png').default});
          z-index: 10;
          background-position: left -66px;
        }
        
        .ant-slider-step{
          background-image: url(${require('@/assets/img/progress_bar.png').default});
          background-position: right 0;
        }
        
        .ant-slider-handle{
          cursor: auto;
          position: relative;
          top: -2.5px;
          width: 22px;
          height: 24px;
          background-image: url(${require('@/assets/img/sprite_icon.png').default});
          background-position: 0 -250px;
          background-color: rgba(0,0,0,0);
          border: none;
          z-index: 100;
          box-shadow: none;
          
          &:hover{
            background-position: 0 -280px;
          }
        }
      }
    }
  }
  
  .playback_progress{
    position: relative;
    top: 10px;
    margin-left: 8px;
  
    display: flex;
    color: #A1A1A1;
    
    .current{
    }
    
    .divider{
      color: #797979;
      margin: 0 3px;   
    }
    
    .total{
      color: #797979;
    }
  }
`

const PlayerRight = styled.div`
  display: flex;
  justify-content: space-between;
  width: 213px;
  height: 25px;
  margin-top: 5px;
  
  .left{
    display: flex;
    width: 87px;
    height: 25px;
    margin-right: 10px;
    
     .picture-in-picture,.collect,.share{
       margin-right: 2px;
       width: 25px;
       height: 25px;
     }
    
    .picture-in-picture{
      background: url(//p1.music.126.net/DLVi_1eymwAX8gDunfd2bg==/109951165524394991) no-repeat 0 0;
    
      &:hover{
        background-position-y: -25px;
      }
    }
    
    .collect{
      background-position: -88px -163px;
      
      &:hover{
        background-position: -88px -189px;
      }
    }
    
    .share{
    
      background-position: -114px -163px;
      &:hover{
        background-position: -114px -189px;
      }
    }
  }
  
  .right{
    display: flex;

    .volume,.volume-icon,.loop,.sequence,.random,.play-list{
      margin-right: 2px;
      width: 25px;
      height: 25px;
    }
  
    .volume{
      position: relative;

        .volume-icon{
          background-position: -2px -248px;
      
          &:hover{
            background-position: -31px -248px;
          }
        }
        
        .volume-control{
         z-index: 999;
         position: absolute;
         width: 32px;
         height: 113px;
         left: 0;
         bottom: 38px;
         display: inline-block;
         background-position: 0 -503px;
         cursor: auto;

         .ant-slider{
            position: relative;
            top: 5%;
            height: 80%;
            cursor: auto;
            
            .ant-slider-handle{
              cursor: auto;
            }
         }
      }
    }
    
    .sequence{
      background-position: -3px -344px;
      
      &:hover{
        background-position: -33px -344px;
      }
    }
    
    .loop{
      background-position: -66px -344px;
      
      &:hover{
        background-position: -93px -344px;
      }
    }
 
    .random{
      background-position: -66px -248px;
      
      &:hover{
        background-position: -93px -248px;
      }
    }
    
    .play-list{
      width: 59px;
      padding-left: 36px;
      color: #666666;
      line-height: 27px;
      
      background-position: -42px -68px;
      
      &:hover{
        background-position: -42px -98px;
      }
    }
  }
`

export {
  PlayerWrapper,
  PlayerLeft,
  PlayerCenter,
  PlayerRight
}