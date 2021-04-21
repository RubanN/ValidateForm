import React,{useState} from 'react'

export default  function Hook4() {
    const [step,setStep] = useState(0)
    const increment = ()=>{
        setStep(prevcount=>prevcount+1)
    }
    return (
        <div>
            <span>{step}</span>
         <button onClick={increment}>increse the count</button>           
        </div>
    )
}
 