import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Button from '../ui/Button';
import AddButton from '../ui/AddButton';
import './product.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../reducer/cartSlice';
function Product() {
  const {id}=useParams()
  const [data, setData] = useState([]);
  const [count,setCount]=useState(1)
  const [every,setEvery]=useState(0)
  function addCount(){
    setCount(count+1)
  }
  function minusCount(){
    setCount(count+1)
  }
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/rasu1ova/Json/products/${id}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [id]);
  const states=useSelector((state)=>state.cart)
  console.log(states);
  return (
    <div className='product container row'>
      <div className="product-imgs">
         <img src={data.img} alt={data.name+" img"} className='product-img'/>
      </div>
      <div className="product-text">
        <h3 className="product-name">
              {data.name}
        </h3>
        <div className="product-content row">
            <div>
              <p className="product-price">
                  {data.price} $
              </p>
              <p className="product-quantity">
                Quantity
              </p>
              <div className="quantity row">
                  <button onClick={addCount} className='quantity-btn'>
                    +
                  </button>
                  <div className="product-count">
                    {count}
                  </div>
                  <button onClick={minusCount} className='quantity-btn'>
                    -
                  </button>
              </div>

            </div>
            <div className="product__left">
              <ul>
                <li>
                  <input type="radio" id='one' name='type'/> <label htmlFor="one">One time purchase</label>
                </li>
                <li>
                  <input type="radio" id='subcribe' name='type'/>
                  <label htmlFor="subcribe">
                    Subscribe and delivery every 
                    <select name="" id="">
                        <option value="1" onClick={()=>{console.log(1);}}>1 weeks</option>
                        <option value="1" onClick={()=>{setEvery(2)}}>2 weeks</option>
                        <option value="1" onClick={()=>{setEvery(3)}}>3 weeks</option>
                        <option value="1" onClick={()=>{setEvery(4)}}>4 weeks</option>
                    </select>
                  </label>
                  <p className="select-describe">
                       Subscribe now and get the {every*10}% of discount on every recurring order. The discount will be applied at checkout. See details
                  </p>
                </li>
              </ul>
            </div>
           
        </div>
        <AddButton  />
        <div className="product-describes">
           <ul>
              <li className='dest-text'>
                <span className='dest-name'>Wax</span>
                {data.wax}
              </li>
              <li className='dest-text'>
                <span className='dest-name'>Fragrance</span>
                {data.fragrance}
              </li>
              <li className='dest-text'>
                <span className='dest-name'>Burning Time:</span>
                {data.burning_time}
                <span className='dest-name'>Dimension:</span>
                {data.dimension}
                <span className='dest-name'>Weight:</span>
                {data.weight}
              </li>
           </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Product