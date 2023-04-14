import React from 'react'
import style from './card.module.css'
import { Link } from 'react-router-dom'
function Card(props) {
  const {name, price, img, id}=props
  return (
  
         <div className='card' id={id}>
            <img src={img} alt={name+" img"} className={style.cardimage} />
            <h2 className={style.card__title}>
                {name}
            </h2>
            <p className="style.card__price">
                {price}$
            </p>
        </div>

   
  )
}

export default Card