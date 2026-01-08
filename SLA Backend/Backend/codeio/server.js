const http = require('http');
const server = http.createServer((req,res)=>{
    console.log("request made")
    console.log(req.url) // to identify the url that shows in the terminal
    console.log(req.method) // mention the get post put database

    res.setHeader('Content-Type','text/plain');
    res.write('heyy everyone');
    res.end()

    //html page
    // res.setHeader('Content-Type','text/html');
    // res.write('<h1>heyy everyone</h1>');
    // res.end()
})
server.listen(3000,'localhost',()=>{
    console.log("server is listening")
})