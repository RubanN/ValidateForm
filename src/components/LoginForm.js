import React,{useState} from 'react'

const LoginForm=()=>{
    const [username,setUserName]= useState('');
    const [password,setPassword] = useState('');

    const printValuesFrontEnd=(e)=>{
         e.preventDefault();
         console.log(username,password);
    }
    return (
        <>
        <form onSubmit={printValuesFrontEnd}>
           <label>Username
               <input 
               value={username}
               name="username"
               type="text"
               onChange={e=>setUserName(e.target.value)}
               />
           </label>
           <br/>
           <label>Password
               <input
                value={password}
                type="password"
                name="password"
                onChange={e=>setPassword(e.target.value)}
               />
           </label>
           <br/>
           <button type="submit" onClick={printValuesFrontEnd}>submit</button>
        </form>
        </>
    )
}

export default LoginForm
