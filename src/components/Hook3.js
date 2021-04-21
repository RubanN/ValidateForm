import React,{useState} from 'react'

export default function Hook3(text,maxLength) {
    const [hidden,setHidden] = useState(true)
  if(text.length <= maxLength){
      return <span>{text}</span>

      
  }
    return (
     <span>
         {hidden ? `${text.substr(0, maxLength).trim()}...` : text}
         {hidden ? (
             <a onClick={()=>setHidden(false)}>read more</a>
         ):(
             <a onClick={()=>setHidden(false)}>read less</a>
         )}
     </span>
    )
}

