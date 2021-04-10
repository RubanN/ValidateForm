import React,{ useState} from 'react'

const Hooks2=()=> {
    const [click,setClick] = useState(0)
    return (
        <div>
            <p>{click}</p>
            <p>The number of times you have clicked is{click%2===0? 'even':'odd'}</p>
            <button onClick={()=>setClick(click=>click+1)}>addNumber</button>
        </div>
    )
}

export default Hooks2
