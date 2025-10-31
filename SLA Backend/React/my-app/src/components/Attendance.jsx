// import {useState} from "react";
// function Attendance(props){
//     const [ispresent, setIsPresent]=useState(true);
//      const toggleAttendance=()=>setIsPresent(!ispresent);
//     return(
//        <div>
//         <h1>{props.name}</h1>
//         <p>Status :{ispresent ? "Present": "Absent"}</p>
//         <button onClick={toggleAttendance}>
//             {ispresent? "Mark absent": "Mark present"}
//         </button>
//        </div>
//     );
// }
// export default Attendance;


import{useState} from "react";
function Attendance(){
    const students=["hemnath","malai","hema"]
    const [isPresent,setIsPresent]=useState(true)
    function handleclick(){
        setIsPresent(!isPresent)
    }
    return(
        <>
        {/* {<button onclick={handleclick}>---</button>} */}
        <ul>
            {
                students.map(student,index)=>(
                    <>
                    <button key={index} onClick={handleclick} style={{backgroundColor:(isPresent)? "green" : "red"}}>{(isPresent)? "present" : "absent"}</button>
                    <li key={index}>{student}</li>
                    </>
                )
            }
        </ul>
        </>
    )
}   
export default Attendance