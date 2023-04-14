import React from 'react'
import  { useState, useEffect } from 'react';
import Card from './Card';
import './cards.css'
import { Link } from 'react-router-dom';
function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/rasu1ova/Json/products')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);  
  return (
    <section className="products">
        <div className="container">
            <h2 className="title products__title">Products</h2>
            <p className="describe">Order it for you or for your beloved ones </p>
            <div className="row cards">
              {
                data.map((item,index)=>{
                  return(
                    <Link key={item.id} to={`/product/${item.id}`}>
                      <Card  id={item.id} name={item.name} img={item.img} price={item.price} />
                    </Link>
                  )
                })
              }
            </div>
        </div>
    </section>
  )
}

export default Cards