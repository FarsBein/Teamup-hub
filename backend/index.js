const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const {addUser,removeUser,getUser,getUsersInRoom} = require('./users.js')

const PORT = process.env.PORT || 5000 // for future live server we will use a saved PORT value

const router = require('./router.js')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket)=> {
    socket.on('join', ({ username, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, username, room });
    
        if(error) return callback(error);
    
        socket.join(user.room);
    
        socket.emit('message', { user: 'admin', text: `${user.username}, welcome to room ${user.room}.`});
        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
    
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
    
        callback();
      });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)

        io.to(user.room).emit('message', {user: user.username, text: message})
    
        callback()
    })

    socket.on('disconnect', () => {
        console.log('User had left!')
    })
}) 

app.use(router)

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`))