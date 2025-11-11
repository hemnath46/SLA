import { useState } from "react";
function Login() {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <div>
            <h1>{isLogin ? `welcome` : `please Login`}</h1>
            <button onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? `Logout` : `Login`}
            </button>
        </div>
    )
}
export default Login;