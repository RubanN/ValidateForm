import React,{useState} from 'react'


export default   function Hooks3() {
    
   const [count,setCount] =useState(0);
   const increase = ()=>{
       setCount(count+1)
   }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Click</button>
            
        </div>
    )
}


