import { Fragment } from 'react'
import TopLeft from '../../img/top-left.svg'
import TopRight from '../../img/top-right.svg'
import Logo from '../../img/logo.svg'
import Batman from '../../img/IronMan.png'
import SuperMan from '../../img/superman.svg'
import BottomLeft from '../../img/bottom-left.svg'
import BottomRight from '../../img/bottom-right.svg'
import Barcode from '../../img/barcode.svg'
export default function Welcome() {
  return (
    <Fragment>
      <section className="home">
        <img className="top-left" src={TopLeft} />
        <img className="top-right" src={TopRight} />
        <img className="logo" src={Logo} alt="Logo" />
        <img className="batman" src={Batman} alt="Batman" />
        <img className="superman" src={SuperMan} alt="SuperMan" />
        <h3 className="herostext"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h3>
        <div className="block-btn">
          <div className="btn-mask">COMING SOON</div>
        </div>
        <div className="s-header">
          <div className="d-flex">
            <div className="p-2 w-50 bd-highlight">
              <h3 className="page">NEW CHARACTERS EVERY WEEK!!!!!</h3>
            </div>
          </div>
        </div>
        <img className="bottom-left" src={BottomLeft} />
        <img className="bottom-right" src={BottomRight} />
        <img className="barcode" src={Barcode} alt="Barcode" />
      </section>
    </Fragment>
  )
}
