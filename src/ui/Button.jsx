import React from 'react'
import './button.css'
function Button({name, type}) {  
  return (
    <button className={'btn '+type}>{name}</button>
  )
}

export default Button