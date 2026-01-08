const User = require('../models/User')
const bycrypt = require('bcrypt')
const jwt  = require('jsonwebtoken')
const UserRegister = async (req, res,next)=>{
    console.log('1') 
    const {userName, email,password,age} = req.body
    console.log(userName)
    try{
        // req.body--> data
        //  password---> password hash
        // db store  using queries ( hashed)
        //  res message :  registation sucess
        console.log('12')
 const hashedPassword = await bycrypt.hash(password, 10);  
console.log(hashedPassword)
     const createdUser = await  User.insertOne(
         {name:userName,email, password : hashedPassword,age})

             if(!createdUser){
        res.status(404).json({
            message: 'Registration failed'
        })
    }
          res.status(200).json({
            message: 'user created sucessfully'
        })

    
    }catch(err){
        console.log(err)
      next(err)
    }

}
const  UserLogin = async (req,res,next)=>{
  const   {email, password} = req.body
    try{
  const userDetails = await User.findOne({email:email})
  if(!userDetails){
   res.status(404).json({
            message: 'no such user'
        })
  }else{
    const hashedPassword = userDetails.password
 const isMatch = await bycrypt.compare(password, hashedPassword)
if(!isMatch){
   res.status(404).json({
            message: 'credential error'
        })
}else{
    
// jwt

    const token = jwt.sign({email},process.env.JWT_SECRET_KEY, { expiresIn: '1h' });


      res.status(200).json({
            message: 'login sucessfully',
            token 
        })
}
  }
    }catch(err){
next(err)
    }

}

module.exports ={
UserRegister,
UserLogin

}