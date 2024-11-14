import React from 'react'
import Child from './Child'

const Parent = () => {
  return (
    <div> 
    Parent
      <Child  name="jhon" age={30}/>
    </div>
  )
}
export default Parent