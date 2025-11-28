import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            setIsLoggedIn(true);
            navigate("/home");
        }
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded-xl shadow-md w-80">
                <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded mb-3"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mb-3"
                />
                <button className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
            </form>
        </div>
    );
}
export default Login;