const User = require('../models/User')
const bycrypt = require('bcrypt')
const getUser = async (req,res)=>{
    console.log(1)
try{
const userData = await User.find({age:{$lt : 21}})

// const userData = await User.findOne({_id : "6944f286811d475958fc4675"})

const {password} = userData
const PlaintextPassword = '123'
 const  compare =await bycrypt.compare(PlaintextPassword, password);
//   console.log(compare)
// console.log(password)
   console.log(userData)
if(!userData){
    res.status(404).json({
        message: 'no users found'
    })
}
res.status(200).json({
    userData
})

}catch(err){
  res.status(500).json({
            message: 'server error'
        })
}

}

// findById(id) -- mongoose

// User.findOne({_id: id}) 

// Assignment - 19/12/2025
// 1. User.updateOne and User.updateMany
  // User.findOneAndUpdate

//    User.deleteOne User.deleteMany

const updateUser = async (req,res)=>{
   
    const   {id}=req.params
    const {userName } = req.body
   
    try{
    const existingUser = await User.findById(id)
    if(!existingUser){
         res.status(404).json({
                message: 'no such user'
            })
    }
    
    // const      updatedData=  await User.updateOne({_id : id}, {$set : {name : userName}})
    // console.log(updatedData)

    // mongoose methods

    // existingUser.name = userName
    // await existingUser.save();
    //    const      udatedData=  await User.updateOne({_id : id},{name : userName},{new :true})

      res.status(200).json({
            message: 'updated sucessfully ',
            // updatedData
             existingUser
        })


}catch(err){
  res.status(500).json({
            message: 'server error'
        })
}



}


const createUser = async (req,res)=>{
const {userName, email,password,age} = req.body

console.log(userName)
try{
    //2. check if user exist
    const hashedPassword = await bycrypt.hash(password, 10);              
 console.log(hashedPassword)

console.log(1)
    const createdUser = await  User.insertOne(
        {name:userName,email,password : hashedPassword,age})
        // console.log(createdUser)
    if(createdUser){
        res.status(200).json({
            message: 'user created sucessfully'
        })
    }else{
           res.status(404).json({
            message: 'user created failed'
        })
    }
}catch(err){
       res.status(500).json({
            message: 'server error'
        })
}


}

const sendData = (req,res)=>{
   const  data = 
    res.json(

    )
}
module.exports = {
    createUser,
    getUser,
    sendData,
    updateUser

}