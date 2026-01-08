const express = require('express');

const app = express();
const connectDB = require('./config/db')
const errorHandler = require('./middleware/errorHandler')
const userRouter = require('./routes/usersRouter')
const authRouter = require('./routes/authRouter')
 app.use(express.json())
const dotenv=require('dotenv')
dotenv.config()

// const connectDB  = async  () =>{

//     await  mongoose.connect('mongodb://127.0.0.1:27017/crud-test')
//   .then(() => console.log('mongodb Connected!'))
//   .catch((err)=>console.log(err))
// }

connectDB()

app.get('/test-api',(req,res)=>
  res.send('server is running properly')

)

app.use('/users',userRouter)
app.use('/auth',authRouter)

app.use(errorHandler)

const port = 5000;
// 'localhost:5000/users/get-user'
 app.listen(port, ()=>{
    console.log('server is running')
 })