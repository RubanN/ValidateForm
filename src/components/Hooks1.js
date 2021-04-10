import React,{useState} from 'react'

const Hooks1=()=> {
    const [userInfo,setUserInfo] = useState({
        firstName:"john", lastName:"Doe"
    })
    const [count,setCount]= useState(0)

    const buttonClicker=(e)=>{
        setCount(count+1)
    }
    // const click = useState("Hey ruban")
    const [click,setClick] = useState(0)
    return (
        <div>
            <p>You clicked {click}times</p>
            <p>UserInfo:{JSON.stringify(userInfo)}</p>
        <button onClick={()=>setUserInfo({firstName:'ruban'})}>update the firstName</button>
        <button onClick={()=>setUserInfo(prevState=>({
            ...prevState,firstName:"Kevin pertterSon"
        }))}>click me</button>
        <button onClick={buttonClicker}>+</button>
        <h1>{count}</h1>
        <h1>{click}Welcome to home</h1>
        <button onClick={()=>setClick(click+1)}>Click or increase</button>
        </div>
    )
}

export default Hooks1
