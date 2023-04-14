import React from 'react'
import './clean.css'
import Button from '../ui/Button'
import {Cleanimg} from '../assets/images'
function Clean() {
  return (
    <section className='clean'>
        <div className="container row">
            <div className="clean__content">
                <div  className="clean__texta">
                    <h2 className="title clean-title">
                    Clean and fragrant soy wax
                    </h2>
                    <p className="clean__text">
                    Made for your home and for your wellness
                    </p>
                <ul className='clean__list'>
                        <li className='list__item'>Eco-sustainable:All recyclable materials, 0% CO2 emissions</li>
                        <li className='list__item'>Hyphoallergenic: 100% natural, human friendly ingredients </li>
                        <li className='list__item'>Handmade: All candles are craftly made with love.</li>
                        <li className='list__item'>Long burning: No more waste. Created for last long.</li>
                </ul>
                </div>
              
               <Button name="Learn more" type="active"/>
            </div>
   
                <img src={Cleanimg} alt="clean-img" />
        
        </div>
    </section>
  )
}

export default Clean