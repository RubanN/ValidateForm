import React, {useState, useEffect} from 'react'

function HookUseEffect() {
    const [value,setValues] = useState([])
    useEffect (()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setValues([json]));
    },[])
    return (
        <div>
            {
                value.map((e)=><h1>{e.title}</h1>)
            }
        </div>
    )
}

export default HookUseEffect
