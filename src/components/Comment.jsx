import React from 'react'
import './comment.css'
function Comment(props) {
  const {name,img,title}=props
  return (
    <div className='comment'>
        <img src={img} alt={name} />
        <p className="comment__title">
            {title}
        </p>
        <h4 className="comment__author">{name}</h4>
    </div>
  )
}

export default Comment