import React,{useState} from 'react'

export default   function HooksArray() {
    const [student,setStudentNames] = useState(["Ruban",'Virat',"kane willamSon"])
    const changeHooksArray = ()=>{
        setStudentNames([...student,"thiyagu",'babu'])
    }
    return (
        <div>
              <button onClick={changeHooksArray}>Click</button>         
              <ul>
                  {
                  student.map(e=><li key={e}>{e}</li>)
                  
                  
                  }
              </ul>
        </div>
    )
}

