import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react'
import {increment,decrement,incrementByAmount, getUserByAccount} from '../features/counter/counterSlice.js'

const Counter = () => {
    const [value, setValue] = useState(0)
    const dispatch = useDispatch()
    
    return (
        <>
            <div className="card">
                <button onClick={()=>dispatch(increment())}>
                    count +
                </button>
                <button onClick={() =>dispatch(decrement())}>
                    count -
                </button>
                <input type='text' onChange={(e)=>setValue(+e.target.value)}/>
                <button onClick={() =>dispatch(incrementByAmount(value))}>
                    count is {value}
                </button>
                <button onClick={() =>dispatch(getUserByAccount(1))}>
                    Get User 
                </button>
                <p>


                </p>
            </div>
        </>
    )
}

export default Counter