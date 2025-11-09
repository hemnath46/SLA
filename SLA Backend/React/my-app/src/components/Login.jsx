import { useState } from "react";
function Login({name}) {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>
      <h1>{isLogin ? `Welcome! ${name}` : `Please Login`}</h1>
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Login;