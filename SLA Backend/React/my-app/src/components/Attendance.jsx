import { useState } from "react";

function Attendance(){
const students = ["Hema","Malai"," Kamesh"]
const [isPresent,setPresent] = useState(true)
// const students = [
//     {
// name: "Harish",
// isPresent: false
// },
//    {
// name: "Manu",
// isPresent: false
// },

// ]
function handleclick(){
setPresent(!isPresent)
}
return(
    <>
    {/* <button onClick={handleclick}>--</button> */}
 <ul>
    {
students.map((student,index)=>(
    <>
<button onClick={handleclick} style={{backgroundColor:(isPresent )? "green"  : "red"}}>{(isPresent )? "present"  : "absent"}</button>
    <li key={index} >{student}</li>
    {/* <span key={index} style={{backgroundColor:(isPresent )? "green"  : "red"}}>{(isPresent )? "present"  : "absent"}</span> */}
    </>
))
    }
 </ul>
    </>
)
}
export default Attendance;