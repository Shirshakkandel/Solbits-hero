import React from 'react'
import { useWindowSize } from '../../hooks/useWindowSize'
import { HeaderLeft, HeaderRight, HeaderStyledFlex } from './Header-styled'

const Header = () => {
  const width = useWindowSize()

  return (
    <HeaderStyledFlex width={width}>
      <HeaderLeft width={width}>
        <h3 className="page">15 pages</h3>
        <h4 className="vol">Vol.1</h4>
      </HeaderLeft>

      <HeaderRight width={width}>
        <div>
          <h2 className="character">NEW CHARACTERS EVERY WEEK</h2>
          <p className="lorem">Solbit Heroes have landed! An exclusive 2D </p>
        </div>
      </HeaderRight>
    </HeaderStyledFlex>
  )
}

export default Header
