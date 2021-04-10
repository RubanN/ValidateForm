import React,{useState} from 'react'

const Hooks1=()=> {
    const [userInfo,setUserInfo] = useState({
        firstName:"john", lastName:"Doe"
    })
    return (
        <div>
            <p>UserInfo:{JSON.stringify(userInfo)}</p>
        <button onClick={()=>setUserInfo({firstName:'ruban'})}>update the firstName</button>    
        </div>
    )
}

export default Hooks1
