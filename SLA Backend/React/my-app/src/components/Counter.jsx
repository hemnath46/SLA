import { useState } from "react"
import Greetings from "./Greetings"

function Counter(){
const [count, setCount] = useState(0)
const increment = ()=> setCount(count+1)
const decrement = ()=> {
   if(count>0) {
    setCount(count-1)
}else {
        alert ('counter should be more than zero')
     }
    }
    

    return (
        <>
        <h1>Counter:{count}</h1>
        <button onClick={()=>increment()}>+</button>
        
        <button onClick={()=>decrement ()}>-</button>
        <Greetings/>
        </>
    )
}
export default Counter