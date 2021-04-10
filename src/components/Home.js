import React,{ useState}from 'react'

const Home= ()=> {
   const [count,setCounter] = useState(0);
  //  const [moreStuff,setMoreStuff] = useState(...);
  const setCount = ()=>{
    setCounter(count+1);
  }
  return (
    <div>
   <button onClick={setCount}>Click me</button>  
   <h1>{count}</h1>  
    </div>
  )
}

export default Home
