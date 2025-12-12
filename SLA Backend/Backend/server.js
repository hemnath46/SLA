const http = require('http');
const fs = require('fs');
const path = require('path');
const {EventEmitter} = require('stream');
const EventEmitter = new EventEmitter();


const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content.type': 'text/html' })
    // res.write('<h1> Hello server hems</h1>')
    // res.end()

    // write file
    // fs.writeFileSync('demo.txt', 'Hello nodejs')

    // read file
    // data = fs.readFileSync('demo.txt', 'utf8')
    // console.log(data)
    // res.end(data)

    // data = fs.readFileSync('index.html', 'utf8')
    // console.log(data)
    // res.end(data)

    console.log('file name:',path.basename(_filename));
    console.log('file name:',path.dirname(_filename));

    const fullpath = path.join(__dirname,'public','test.html')
    console.log('fullpath:',fullpath)
    res.write(`${fullpath}`)
    res.end()
})

server.listen(5000, () => {
    console.log('server is running')
})