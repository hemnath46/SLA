function StudentList(){
    let students = ['hema','malai','dhanush'];
    return(
        <div>
            <ul style={{listStyle:"none"}}>
                {students.map((student,index)=>(
                    <li key={index}>{student}</li>
                ))}
            </ul>
            
        </div>
        
    );
}
export default StudentList;