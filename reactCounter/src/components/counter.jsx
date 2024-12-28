import React from "react"
import { useState } from "react";

function Counter(){
    const [count, setCount] = useState(0)
    const addValue = () =>{
      if(count >= 20){
        return;
      }
      setCount(count+1);
      
    }
    const removeValue = ()=>{
      
      if(count <= 0){
        return;
      }
      setCount(count-1);
      
    }

    return(
        <div class="flex justify-center items-center h-screen">
            <div class="bg-blue-500 p-5  rounded-md"> 
                <h1>Hello React</h1>
                <h1>I'm a counter</h1>
                <h1>{count}</h1>
                <button className='btn m-2' onClick={addValue}>Add</button>
                <button className='btn m-2' onClick={removeValue}>Remove</button>
            </div>
        </div>
    )

}

export default Counter;