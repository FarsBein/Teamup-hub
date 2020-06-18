import React, { useEffect,useState } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from './chat component/InfoBar.js'
import Input from './chat component/Input.js'
import Messages from './chat component/Messages.js'

let socket;

const Chat = ({location}) => {
    const [username,setUsername] = useState('')
    const [room,setRoom] = useState('')
    const [message,setMessage] = useState('')
    const [messages,setMessages] = useState([])
    const ENDPOINT = 'localhost:5000'

    useEffect(() => {
        const {username,room} = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setUsername(username)
        setRoom(room)

        socket.emit('join',{username,room}, () => {

        })

        return () => {
            socket.emit('disconnect')

            socket.off()
        }
        
    },[ENDPOINT,location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    },[messages])

    const sendMessage = (event) => {
        event.preventDefault() // to avoid refreshing page

        socket.emit('sendMessage', message, ()=> setMessage(''))
    }

    console.log('message: ',message,'messages: ',messages)

    return (
        <div>
            <div>
                <InfoBar username={username} />

                <Messages messages={messages} username={username} />

                <Input 
                    message={message}
                    setMessage={(props) => setMessage(props)}
                    sendMessage={(event)=> sendMessage(event)}/>

            </div>
        </div>
    );
}

export default Chat;
