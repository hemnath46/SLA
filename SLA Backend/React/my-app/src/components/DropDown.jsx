import {useState } from "react";
const DropDown = ()=>{
    const[student,setStudent]=useState("")
    return(
        <>
        <select value={student} onChange={(e)=>setStudent(e.target.value)}>
            <option value="">select Student name</option>
            <option value="Hemnath">Hemnath</option>
            <option value="Hari">Hari</option>
            <option value="Malai">Malai</option>
        </select>
        {student && (
            <p>you selected : {student}</p>
        )}
        </>
    )
}
export default DropDown;