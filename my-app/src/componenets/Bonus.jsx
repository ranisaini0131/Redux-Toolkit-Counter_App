import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { increment } from '../features/counter/bonusSlice.js'

function Bonus() {
    const dispatch= useDispatch()
    
    return (
      <>
          <h1>Bonus</h1>
          <div  className="card">
              <button onClick={()=>{dispatch(increment())}}>Increment +</button>
          </div>
      
      
      
      
      </>
  )
}

export default Bonus