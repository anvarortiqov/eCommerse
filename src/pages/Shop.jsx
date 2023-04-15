import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import './shop.css'
function Shop() {
  return (
    <div className='shop container'>
        <div className="shop-header">
            <h3 className="page-name">
                Your cart items
            </h3>
            <Link to="/" >Back to shopping</Link>
        </div>
        <table width='100%' className='table'>
           <thead>
            <tr >
                    <th className='product-titles' width="50%">Product</th>
                    <th className='product-titles'>Price</th>
                    <th className='product-titles'>Quantity</th>
                    <th className='product-titles'>Total</th>
                </tr>
           </thead>
          <tbody>
          <tr colspan="" >
                
             <tr></tr>
          </tr>
      
          <tr>
              <td>
                  Lorem, ipsum dolor.
              </td>
              <td>
                  998
              </td>
              <td>
                  Lorem ipsum dolor sit.
              </td>
              <td>
                  lkl
              </td>
          </tr>
          
          <tr>
              <td>
                  Lorem, ipsum dolor.
              </td>
              <td>
                  998
              </td>
              <td>
                  Lorem ipsum dolor sit.
              </td>
              <td>
                  lkl
              </td>
          </tr>
          </tbody>
          
        </table>
        <div className="subtotal row">
            <div className="summa">
                <h4 className='subtotal-text'>Sub-total  </h4>
                <p className='total-describe'>
                    Tax and shipping cost will be calculated later
                </p>
            </div>
            <Button name="Check-out" type="active"/>
        </div>
      
        
    </div>
  )
}

export default Shop