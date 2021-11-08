import React from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import MobileWelcome from './MobileWelcome'
import { MobileViewContent, ContentFlexXbetween, TopContentRelative, WelcomeRelative90vh, BottomFooter } from './Welcome-styles'

const Welcome = () => {
  const width = useWindowSize()

  return width <= 992 ? (
    <MobileWelcome />
  ) : (
    <WelcomeRelative90vh width={width}>
      {/* 1)Top content section */}
      <TopContentRelative>
        {/* 1.1 all position images  at coner*/}
        <img src="img/1.png" alt="Cloude top left" className="top__left" />
        <img src="img/2.png" alt="Cloude top Right" className="top__right" />
        <img src="img/3.png" alt="Cloud buttom left" className="bottom__left" />
        <img src="img/4.png" alt="Cloud button Right" className="bottom__right" />
        {/* 1.2 Center content */}
        <ContentFlexXbetween width={width}>
          <img src="img/Superman.png" alt="" className="img__leftRight img__superman" />
          <div className="centercontent">
            <img src="img/SolbitHero.png" alt="SolbitHero" className="img__solbitHero" />
            <p>
              There are 10,000 Solbit Heroes in our first collection that will be randomly generated during the minting process. Our universe is full of Solbit Heroes ready to believe in the good.
            </p>
            <button>Launching November 18</button>
          </div>
          <img src="img/Batman.png" alt="" className="img__leftRight img__batman" />
        </ContentFlexXbetween>

        <MobileViewContent>
          <div className="main__content">
            <div className="top__mobile">
              <img src="./img/SolbitHero.png" alt="" className="img__solbitHero" />
              <p className="text"></p>
              <button type="submit" className="btn-soon"></button>
            </div>
            <div className="bottom-images">
              <img src="./img/Superman.png" alt="Superman" />
              <img src="./img/Batman.png" alt="batman" />
              <img src="./img/bar.png" alt="bar" />
            </div>
          </div>
        </MobileViewContent>
      </TopContentRelative>
    </WelcomeRelative90vh>
  )
}

export default Welcome
