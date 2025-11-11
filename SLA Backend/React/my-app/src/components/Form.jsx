import { useState } from "react";
const Form = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [date, setDate] = useState('');
    const [age, setAge] = useState('');
    const [registered, setRegistered] = useState(false);


    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     // prevent reload page
    //     alert(`Name:${name} \n Mail:${mail} \n DOB:${date} \n Age:${age}`)
    // }


    const handleSubmit = (e) => {
        e.preventDefault();
        setRegistered(true);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td><label>Enter your Name :</label></td>
                            <td><input type="text" value={name} placeholder="Name" onChange={(e) => { setName(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><label>Enter your Mail :</label></td>
                            <td><input type="email" value={mail} placeholder="@gmail.com" onChange={(e) => { setMail(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><label>Enter your DOB :</label></td>
                            <td><input type="date" value={date} onChange={(e) => { setDate(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><label>Enter your age :</label></td>
                            <td><input type="number" value={age} onChange={(e) => { setAge(e.target.value) }} /></td>
                        </tr>
                        <tr>
                            <td><button type="submit"> submit</button></td>
                        </tr>
                    </tbody>
                </table>
            </form>
            {registered && (
                <div>
                    <h3>Student Registered:</h3>
                    <p>
                        {name} - {age} years old
                    </p>
                </div>
            )}
        </>
    );
}
export default Form;