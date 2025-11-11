import { useEffect, useState } from "react";
const SideEffect=({username})=>{
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    useEffect(()=>{
        // side effect code
        console.log("i am here every render")
    })

    useEffect(()=>{
        // side effect code
        console.log("i am here intially render")
    })

    useEffect(()=>{
        console.log("i am run only when state change")
        if(name === "admin"){
            alert("plz check notification")
        }
    })
    return(
        <>
        {name}
        {email}
        <button onClick={()=>setName("admin")}>Change name</button>
        <button onClick={()=>setName(username)}>Change to props name</button>
        <button onClick={()=>setEmail(`${name}@gmail.com`)}>Change email</button>
        </>
    )
}
export default SideEffect;