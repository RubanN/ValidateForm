import React,{useState,useEffect} from 'react'

function Useeffect2() {
const [resource,setResource] = useState('posts')

useEffect(() =>{
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
    .then(res=>res.json())
    .then(json=> console.log(json))
},[resource])
    return (
        <div>
            <button onClick={()=>setResource('posts')}>Posts</button>
            <button onClick={()=>setResource('users')}>users</button>
            <button onClick={()=>setResource('comments')}>comments</button>
            <h1>{resource}</h1>
        </div>
    )
}

export default Useeffect2;

