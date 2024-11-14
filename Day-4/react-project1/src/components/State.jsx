import React, { useState } from 'react'

const State = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () =>{
        setCount(count+1);
    }
  return (
    <div>
    <p>Count:{count}</p>
    <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

export default State