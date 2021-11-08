import styled from 'styled-components/macro'

export const MobileViewContent = styled.div<{ width: number }>`
       background-image: url('/img/bb.png');
        background-repeat: no-repeat;
        background-size: 100%;
        position: relative;

        &::before{
       background-image: url('/img/rb.png');
        position: absolute;
        content: '';
        background-size: 80%;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;
        }

 .next-f 
    { 
      position: relative;
       background: #FF1948;
       padding: 4%;
    }
    .next-f{
       background-image: url('/img/bb.png');
        background-repeat: no-repeat;
        background-size: 100%;
    }
  background-color: #25f2c8;
  /* height: calc(100vh - 50px); */
  .flexsb {
    display: flex;
    justify-content: space-between;
  }
  .main__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .top__mobile {
      overflow: hidden;
      height: 60%;
      display: flex;
      flex-direction: column;
      margin-bottom: 30px;
      justify-content: start;
      width: 80%;
      margin-left: auto;
      margin-right: auto;
      text-align: center;

      .img__solbitHero {
        width: ${({ width }) => (width >= 500 ? '90%' : '100%')};
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        max-height: 150px;
        max-width: 350px;
      }

      .text {
        font-size: 15px;
        font-weight: 700;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 10px;
        width: ${({ width }) => (width >= 500 ? '70%' : '80%')};
      }
      .btn-soon {
        margin-top: 10px;
        background: #ff1948;
        color: white;
        width: 80%;
        margin: 0 auto;
        cursor: pointer;
        outline: none;
        padding: 10px 0px;
        text-align: center;
        font-size: 16px;
        white-space: nowrap;
        border-radius: 10px;
        width: ${({ width }) => (width >= 500 ? '60%' : '70%')};
      }
    }

    .bottom {
      display: flex;
      flex-direction: column;
    }
    .triple-images {
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      overflow: hidden;
      margin-bottom: ${({ width }) => (width >= 500 ? '-5%' : '-15%')};;
      img {
        width: 80px;
        height: 170px;
        z-index: 100;
      }
     
    } //triple-images end
    
      }
    }
    //main content :end
    .footer {
      background: #000000;
      color:white;

       .flexsb{
         display:flex;
         align-items: center;
         justify-content: space-around;
         padding:3px 0px;
      }

      p {
        font-size: 10px;
        font-weight: 900;
        font-style: italic;
        z-index: 1000;
      }

      img {
        width: 30%;
        z-index:1000;
  }

   

`
