import { useState } from "react";
import axios from "axios";
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
        let userData = {
            email: email
        }

        axios.post('https://jsonplaceholder.typicode.com/posts', userData)
            .then((response) => {
                console.log(response)
            })
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" 
                value={email} 
                    onChange={(e) => { setEmail(e.target.value) }} 
                placeholder="Enter email" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default LoginForm;