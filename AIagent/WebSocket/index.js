const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);
const { Server } = require('socket.io');

const io = new Server(server);

io.on('connection', (socket)=>{

    socket.on('message', (data)=>{
        io.emit('message', data);
    });

    socket.on('disconnect', ()=>{
         console.log('user disconnected');
    })
})

server.listen(3000, ()=>{
    console.log('listening at 3000');
})
