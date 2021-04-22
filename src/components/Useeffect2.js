import React,{useEffect} from 'react'

function Useeffect2() {
 useEffect(() =>{
     const url = 'http://Jsonplaceholder.typicode.com/posts';
     fetch(url).then(res=>res.json())
         .then(res=>console.log(res)
     )
 },[])
    return (
        <div >
            <h1 align="center">ReactApp</h1>

            
        </div>
    )
}

export default Useeffect2
