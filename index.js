
const express = require('express');
const http = require('http');
const PORT = 3031
const app = express();
const server = http.createServer(app);

app.use(express.static('public'))
app.use(express.static('views'))

app.get('/', (req,res)=>{
    res.sendFile('index.html');
})

server.listen(PORT, ()=> {
    console.log('Server Started')
})