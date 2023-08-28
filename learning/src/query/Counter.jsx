import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Counter = () => {
    const [counter, setcounter] = useState(0)
  
    useEffect(() => {
      console.log("counter: "+counter)
    }, [counter])
    

    return (
    <div>
        Counter
        <button onClick={()=>{setcounter(counter+1)}}>+</button>
    </div>
  )
}
