import { useState } from "react";
import Home from "./Home";
function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      {!isLoggedIn && (
        <>
          <h2>You are not logged in</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
      {isLoggedIn && (
        <>
          <Home />
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}
export default LoginButton;