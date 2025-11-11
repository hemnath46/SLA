import { useState } from "react";
const Form = () => {
    const [name, setName] = useState('');
    const handelSubmit = (e) => {
        e.preventDefault();
        alert(`${name}`)
    }
    return (
        <>
            <form onSubmit={handelSubmit}>
                <label htmlFor="">Enter Name</label>
                <input type="text" value={name} name="" id="" onChange={(e) => { setName(e.target.value) }} />
                <button type="submit">submit</button>
            </form>

        </>
    )
}
export default Form;