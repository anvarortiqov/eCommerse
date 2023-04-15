import React from 'react'

import { AiOutlineShoppingCart } from 'react-icons/ai';

function AddButton({items}) {
  return (
    <button className='btn active'><AiOutlineShoppingCart/> +Add to cart</button>
  )
}

export default AddButton