import React from 'react'
import './test.css'
import Comment from './Comment';
import { useState, useEffect } from 'react';
function Testmonials() {
    const [comment, setComment] = useState([]);
    useEffect(() => {
      fetch('https://my-json-server.typicode.com/rasu1ova/Json/users')
        .then(response => response.json())
        .then(data => setComment(data));
    }, []); 
  return (
    <section className='testmonials'>
        <div className="testmonials__content">
            <h2 className="title test__title">Testimonials</h2>
            <p className="describe">
                 Some quotes from our happy customers
            </p>
            <div className="row coms">
                {
                    comment.map((item,index)=>{
                        return (
                            <Comment key={index} name={item.name} title={item.title} img={item.img} />
                        )
                        
                    })
                }
            </div>
        </div>
    </section>
  )
}

export default Testmonials