import { useState } from "react";
function Login(){
    const [isLogin,setIsLogin]=useState(false);
    return(
        <div>
            <h1>{isLogin ? `welcome hemnath` : `please Login`}</h1>
            <button onClick={()=>setIsLogin(!isLogin)}>
                {isLogin ? "logout" : "login"}
            </button>
        </div>
    )
}
export default Login;