import { useEffect } from "react"


function Profile() {
// user state

useEffect(()=>{
  // api
setUser(res.data.existingUser)


},[])

  return (
    <>
   <h1> profile</h1>
   <p>{user.name}</p>
   <p>{user.email}</p>
   
    </>
  )
}

export default Profile