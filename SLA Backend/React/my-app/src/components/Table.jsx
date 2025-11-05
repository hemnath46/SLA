const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Roll No</th>
                <th>Blood Group</th>
            </tr>
        </thead>
    )
}

const TableBody = () => {
    return (
        <tbody>
            <tr>
                <td>Hemnath</td>
                <td>07</td>
                <td>A-</td>
            </tr>
            <tr>
                <td>Malaiyarasi</td>
                <td>08</td>
                <td>O+</td>
            </tr>
            <tr>
                <td>Pooja</td>
                <td>10</td>
                <td>A+</td>
            </tr>
            <tr>
                <td>Prathi</td>
                <td>11</td>
                <td>O+</td>
            </tr>
        </tbody>
    )
}
function Table(){
    return(
        <table border={1}>
            <TableHead/>
            <TableBody/>
        </table>
    )
}
export default Table;