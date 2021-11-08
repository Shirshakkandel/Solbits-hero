import styled from 'styled-components/macro'

export const WelcomeRelative90vh = styled.div<{ width: number }>`
  position: relative;
  background-color: #25f2c8;
  height: calc(100vh - ${({ width }) => (width >= 992 ? '100px' : '50px')});
  overflow-y: hidden;
  .img__solbitHero {
    width: 100%;
    height: ${({ width }) => (width >= 992 ? '250px' : '200px')};

    margin-top: 10px;
  }
  /* background-image: url('/img/bb.png');
  background-repeat: no-repeat;
  background-size: 100%;
 

  &::before {
    background-image: url('/img/rb.png');
    position: absolute;
    content: '';
    background-size: 100%;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
  } */
`

export const TopContentRelative = styled.div`
  height: 88%;
  position: relative;

  .top__left {
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 20%;
  }

  .top__right {
    position: absolute;
    top: 0;
    right: 0;
    width: 20%;
    height: 20%;
  }

  .bottom__left {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 20%;
    height: 20%;
  }

  .bottom__right {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 20%;
    height: 20%;
  }
`
export const MobileViewContent = styled.div`
  @media (min-width: 992px) {
    display: none;
  }
  height: 95%;
  width: 70%;
  padding-top: 3%;
  margin-left: auto;
  margin-right: auto;

  .main__content {
    display: flex;
    flex-direction: column;

    .top__mobile {
      height: 60%;
      /* background-color: green; */
      display: flex;
      flex-direction: column;

      justify-content: space-between;

      .text {
        font-size: 15px;
        font-weight: 700;
        text-align: center;
      }
    }

    .bottom__mobile {
      height: 40%;
      background-color: red;
    }
  }
`
export const ContentFlexXbetween = styled.div<{ width: number }>`
  height: 95%;
  width: 70%;
  padding-top: 3%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 992px) {
    display: none;
  }
  /* background: green; */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .img__batman {
    flex: 0.4;
    height: 55vh;
    margin-left: 50px;
    margin-right: 50px;
    transform: scaleX(-1);
  }
  .img__superman {
    flex: 0.3;
    margin-right: -30px;
    height: 60vh;
  }

  .centercontent {
    align-self: flex-start;

    p {
      /* font-family: ComicSanItalic; */
      font-weight: bold;
      width: 90%;
      text-align: left;
      font-size: 20px;
      margin: auto;
    }

    button {
      margin-top: 10px;
      background: #ff1948;
      color: white;
      width: 100%;
      cursor: pointer;
      outline: none;
      padding: 20px 0px;
      text-align: center;
      font-size: 30px;
      border-radius: 25px;
    }
  }
`

export const BottomFooter = styled.div<{ width: number }>`
  height: 12%;
`

export const InfoBottomFlexXbetween = styled.div`
  height: 60%;
  background-color: #000000;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
`
export const RedBottom = styled.div`
  height: 40%;
`
