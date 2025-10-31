import { useState } from "react"
function Message(){
const [message,setMessage]=useState("welcome")

    return(

        <>
        <p>Hello this is message</p>
        <p>{message}</p>
        
        </>

    )
    
    
}
export default Message