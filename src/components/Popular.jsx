import React from 'react'
import { useState, useEffect } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';
function Popular() {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('https://my-json-server.typicode.com/rasu1ova/Json/products')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);  

  return (
    <section className='popular container'>
        <h2 className="title">
              Popular
        </h2>
        <p className="describe">
          Our top selling product that you may like
        </p>
        <div className="row cards">
              {
                data.slice(0,4).map((item,index)=>{
                  return(
                
                    <Link  key={index}>
                        <Card id={item.id} name={item.name} img={item.img} price={item.price} />
                    </Link>
                     
                 
                  )
                })
              }
        </div>

    </section>
  )
}

export default Popular