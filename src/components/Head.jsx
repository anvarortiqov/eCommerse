import React from 'react'
import {logo, Background} from '../assets/images'
import './head.css'
import Button from '../ui/Button'
function Head() {
  return (
    <div className='head'>
        <div className="head__content">
                <h2> 🌱 </h2>
                <h1 className='title'>
                    The nature candle
                </h1>
                <p className="describe head__desc">
                All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments 
                </p>
            <Button name="Discovery our collection" type="active"/>
        </div>
    </div>
  )
}

export default Head