const express = require('express');
const app = express();

app.get ('/',(req,res)=>{
res.send('welcome to express server')
})
const port = 5001
app.listen(port,()=>{
    console.log(`server is running the port ${port}`)
})