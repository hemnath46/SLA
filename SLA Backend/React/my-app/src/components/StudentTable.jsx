const StudentTable = () => {
    const students = [
        {
            rollNo: 1,
            name: "Hemnath",
            grade: "A"

        },
        {
            rollNo: 2,
            name: "Malai",
            grade: "A"

        },
        {
            rollNo: 3,
            name: "Hema",
            grade: "A"

        }
    ]
    return (
        <div className="studentTable">
            <table>
                <thead>
                    <tr>
                        <th>rollNo</th>
                        <th>name</th>
                        <th>grade</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students?.map((student, index) => (

                            <tr key={index}>
                                <td>{student.rollNo}</td>
                                <td>{student.name}</td>
                                <td>{student.grade}</td>
                            </tr>
                        ))

                    }
                </tbody>

            </table>
        </div>

    )
}
export default StudentTable;