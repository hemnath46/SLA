const jwt  = require('jsonwebtoken')

const jwtMiddleware = (req,res,next)=>{
let token;
if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){

 token =req.headers.authorization.split(" ")[1]
}
    if(!token){
        return res.status(404).json(
            {
                message: " Acess denied"
            }
        )
    }
    try{
       const decorded =  jwt.verify(token, "secretjwt11")
        console.log(decorded)
        req.user = decorded; 
next()
    }catch(err){
 res.status(404).json(
            {
                message: " Acess denied"
            }
        )
    }

}
module.exports = jwtMiddleware