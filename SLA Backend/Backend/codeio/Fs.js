// Fs -- file system
const fs = require('fs');

// mkdir - to create a file
fs.mkdir('./docs',(err)=>{
    if(err){
        console.log(err.message)
    }
    else{
        console.log('folder created')
    }
})