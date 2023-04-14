import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
function Product() {
  const {id}=useParams()
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/rasu1ova/Json/products/${id}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [id]);
  return (
    <div className='product container row'>
      <div className="product-imgs">
         <img src={data.img} alt={data.name+" img"} className='product-img'/>
      </div>
      <div className="product-text">
        
      </div>
      
    </div>
  )
}

export default Product