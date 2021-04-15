import React,{useState,useReducer} from 'react'

function reducer(state,action){
    return {count:state.count+1}
}

function Usereducer() {
    const [state,dispatch] = useReducer(reducer,{count:0})
    const [count,setCount] = useState(0);

    const incremental =()=>{
        // setCount(prevcount=>prevcount+1);
        dispatch()
    }
    const decremental= ()=>{
        setCount(prevcount=>prevcount-1)
    }
    return (
        <div>
    <button onClick={incremental}>+</button>
    <span>{state.count}</span>
    <button onClick={decremental}>-</button>
        </div>
    )
}

export default Usereducer
