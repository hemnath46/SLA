import "./Login.css";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>

        <form>
          <div className="input-group">
            <input type="email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input type="password" required />
            <label>Password</label>
          </div>

          <button className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
}