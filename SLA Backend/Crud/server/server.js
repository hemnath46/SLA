const express = require('express');
const app = express();
const connectDB = require('./config/db')
const cors = require('cors')
const errorHandler = require('./middleware/errorHandler')
const dotenv=require('dotenv')
const userRouter = require('./routes/usersRouter')
const authRouter = require('./routes/authRouter')

app.use(express.json())
dotenv.config()

app.use(cors({
  orgin: "http://localhost:5173/",
  credentials: true
}))
connectDB()

app.get('/test-api',(req,res)=>
  res.send('server is running properly')

)

app.use('/users',userRouter)
app.use('/auth',authRouter)

app.use(errorHandler)

// const port = 5000;
// 'localhost:5000/users/get-user'
 app.listen(process.env.PORT, ()=>{
    console.log(`server is running ${process.env.PORT}`)
 })



