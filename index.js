const express = require('express')
const socketio = require('socket.io')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config() //npm dotenv and required for env

const {addUser,removeUser,getUser,getUsersInRoom} = require('./users.js')

const PORT = process.env.PORT || 5000 // for future live server we will use a saved PORT value

const router = require('./router/router.js')
const userRouter = require('./router/userRouter.js')
const postRouter = require('./router/postRouter.js')
const chatRouter = require('./router/chatRouter.js')

const app = express()
app.use(express.json()) // to parse our javascript code
app.use(cors())

const server = app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
const io = socketio(server) // attach the used server with io to receive emit

io.on('connection', (socket)=> {
    socket.on('join', ({ username, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, username, room });
    
        if(error) return callback(error);
    
        socket.join(user.room);
    
        socket.emit('message', { user: 'admin', text: `${user.username}, welcome!`});

        // db connection
        // chat.find().limit(100).sort({_id:1}).toArray(function(err, res){
        //     if(err){
        //         throw err;
        //     }

               // Emit the messages
        //     socket.emit('output', res);
        // });

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



// Mongoose set up

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, // to avoid annoying pop ups asking for upgrade
    useCreateIndex: true
}, (err) => {
    if (err) throw err
    console.log('MongoDB connection is established')
})

// check heroku
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}


// set up middleware router

app.use(router)
app.use('/users',userRouter)
app.use('/posts',postRouter)
app.use('/chat',chatRouter)
