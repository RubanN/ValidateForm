import React,{ useState} from 'react'

export const Hooks2=()=> {
   const [name,setName]= useState("name")
     const changeInput = ()=>{
         setName("uban")
     }
    return (
        <div>
<h1>{name}</h1>
<button onClick={changeInput}>Click</button>
        </div>
    )
}

export default Hooks2
