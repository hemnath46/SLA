const TableHeader=()=>{
    return(
         <thead>
            <tr>
                <th>Name</th>
                <th>Course</th>
            </tr>
        </thead>
    );
}

const TableBody=()=>{
    return(
        <tbody>
            <tr>
                <td>Hemnath</td>
                <td>Mern Stack</td>
            </tr>
            <tr>
                <td>Malai</td>
                <td>Mern Stack</td>
            </tr>
            <tr>
                <td>dinesh</td>
                <td>Mern Stack</td>
            </tr>
            <tr>
                <td>Sathish</td>
                <td>Mern Stack</td>
            </tr>
        </tbody>
    );
}
function Table(){
    return(
       <table>
        <TableHeader/>
        <TableBody/>
       </table>
    );
}
export default Table;