function Login() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Login</h1>

      <form action="/home" style={{ display: "flex", flexDirection: "column", gap: "10px", width: "250px" }}>
        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />
        <button>Login</button>
      </form>
    </div>
  );
}
export default Login; 
