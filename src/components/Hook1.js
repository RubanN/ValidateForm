import React,{useState} from 'react'

const Hook1=()=> {
 const [count,setCount] = useState(4)

 const deCrement = ()=>{
     setCount(prevcount => prevcount-1)
 }
 const inCrement =()=>{
     setCount(prevcount => prevcount+1)
 }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={deCrement}>click</button>
            <button onClick={inCrement}>click</button>
            
        </div>
    )
}

export default Hook1
