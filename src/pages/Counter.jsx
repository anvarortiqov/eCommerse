import React from 'react'
import { useState } from 'react'
export default function Counter() {
  
  const [state, setState]=useState(1)
    function NewDate(){
        setState(10)
    }
    function AddDate(){
        setState(state+1)
    }
    function minusDate(){
        setState(state-1)
    }
    function Reset(){
        setState(0)
    }
  return (
    <div>
        Counter{state}
        <div>
            <button onClick={minusDate}>-</button>
            <button onClick={AddDate}>+</button>
            <button onClick={Reset}>Reset</button>
        </div>
       
    </div>
  )
}
