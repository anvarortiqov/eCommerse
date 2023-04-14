import React from 'react'
import './footer.css' 
import {Logodark} from '../../assets/images'
function Footer() {
  return (
    <footer className='footer'>
        <div className="container">
           <hr className='line' />
           <div className="row">
            <div className="footer__logo">
                <a href="footer__link">
                    <img src={Logodark} alt="footer dark-logo" />
                </a>
                <p className='footer__text'>
                    Your natural candle made for your home and for your wellness.
                </p>
            </div>
            <div className="footer__links row">
                <div className="f-col">
                    <h3 className="f-title">
                        Discovery
                    </h3>
                    <ul>
                        <li className='list-item'>
                             Discovery
                        </li>
                        <li className='list-item'>
                              Most searched
                        </li>
                        <li className='list-item'>
                             Most selled
                        </li>
                    </ul>
                </div>
                <div className="f-col">
                    <h3 className="f-title">
                        Discovery
                    </h3>
                    <ul>
                        <li className='list-item'>
                             Discovery
                        </li>
                        <li className='list-item'>
                              Most searched
                        </li>
                        <li className='list-item'>
                             Most selled
                        </li>
                    </ul>
                </div>
                <div className="f-col">
                    <h3 className="f-title">
                        Discovery
                    </h3>
                    <ul>
                        <li className='list-item'>
                             Discovery
                        </li>
                        <li className='list-item'>
                              Most searched
                        </li>
                        <li className='list-item'>
                             Most selled
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
       
    </footer>
  )
}

export default Footer