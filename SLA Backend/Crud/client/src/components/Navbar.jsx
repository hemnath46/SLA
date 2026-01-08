import { Link, useNavigate } from "react-router-dom"

function Navbar() {
  const navigate = useNavigate()
const handleLogout =()=>{
  // const token = localStorage.getItem('token')
  // console.log(token)
  localStorage.removeItem('token')
  navigate('/login')
}
  return (
    <>
      <Link to={'/'}>Register</Link>
      <Link to={'/login'}>Login</Link>
      <Link to={'/profile'}>Profile</Link>
      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Navbar