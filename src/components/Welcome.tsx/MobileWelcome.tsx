import React from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { MobileViewContent } from './MobileWelcome-style'

const MobileWelcome = () => {
  const width = useWindowSize()
  return (
    <MobileViewContent width={width}>
      <div className="flexsb">
        <img src="./img/1.png" alt="cloud" />
        <img src="./img/2.png" alt="cloud" />
      </div>
      <div className="main__content">
        <div className="top__mobile">
          <img src="./img/SolbitHero.png" alt="" className="img__solbitHero" />
          <p className="text">
            There are 10,000 Solbit Heroes in our first collection that will be randomly generated during the minting process. Our universe is full of Solbit Heroes ready to believe in the good.
          </p>
          <button type="submit" className="btn-soon">
            Launching November 18
          </button>
        </div>
        <div className="bottom">
          <div className="triple-images">
            <img src="./img/Superman.png" alt="Superman" className="superman__image" style={{ width: '100px', height: '180px' }} />
            <img src="./img/Batman.png" alt="batman" className="batman__image" style={{ transform: 'scaleX(-1)' }} />
            <img src="./img/bar.png" alt="bar" />
          </div>

          <div className="flexsb">
            <img src="/img/3.png" alt="" />
            <img src="/img/4.png" alt="" />
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="flexsb">
          <p>NEW CHARACTERS EVERY WEEK!!</p>
          <img src="/img/freePoster.png" alt="Bar" />
        </div>
      </footer>
    </MobileViewContent>
  )
}

export default MobileWelcome
