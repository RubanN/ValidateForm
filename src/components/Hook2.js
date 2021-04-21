import React,{useState,useEffect} from 'react'

export  default function Hook2() {
    const [count,setCount]= useState(0);

    useEffect(() =>{
        setCount(count+1);
    },[])
    return (
        <div>
    {count}        
        </div>
    )
}
