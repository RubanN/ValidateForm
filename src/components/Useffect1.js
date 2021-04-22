import React,{useState,useEffect} from 'react'

const Useffect1=()=> {
    const [count,setCount] = useState(0);
    const [person,setPerson] = useState(null);
    //similar to componentDidMount and componentUpdate:
    useEffect(async ()=>{
        const res = await fetch('https://api.randomuser.me/');
        const data = await res.json();
        const [item] = data.results;
        setPerson(item)
    },[])
    return (
        <div>
            <p> You clicked {count} Times! </p>
            <button onClick={()=>setCount(count+1)}>click me</button>
            {person && <div>{person.name.first}</div>}
            
        </div>
    )
}

export default Useffect1
