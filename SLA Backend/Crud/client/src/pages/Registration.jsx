import { useState } from "react"
import api from '../api/axiosInstance'
import { useNavigate } from "react-router-dom"

function Register() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [profilePic, setProfilePic] = useState(null)
const [profilePreview, setProfilePreview] = useState(null)
const navigate = useNavigate()

const handleFileChange = (e)=>{
console.log(e.target.files[0])
setProfilePic(e.target.files[0])
setProfilePreview(URL.createObjectURL(e.target.files[0]))
console.log('profilePic',profilePic)
}

const handleSubmit = async (e)=>{
  e.preventDefault()
console.log(profilePic)
  const formData={
  name : name,
  email: email,
  password: password,
  profilePic:profilePic
  }
  console.log('profilePic',profilePic)
  try{
   const res=  await api.post('/auth/userRegister',formData,{

     headers:{'content-Type': "multipart/form-data"}
   }
   )
      if(res.status === 200){
        alert('registration sucess')
        
navigate('/login')
      } 
          
  }catch(err){
    alert('404 error')
console.log(err)
  }
}

  return (
    <>
    <h2>Register</h2>

    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)} /><br/>
      <input type="email" placeholder="Enter your email" value={email}  onChange={(e)=>setEmail(e.target.value)} /><br/>
      <input type="password" placeholder="Enter your password" value={password}  onChange={(e)=>setPassword(e.target.value)} /><br/>
      <input type="file" onChange={handleFileChange}/><br/>
      <button>Register</button>
    </form>
  {profilePreview && <img src={profilePreview}/>}
    </>
  )
}

export default Register