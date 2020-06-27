import React, { useEffect,useState } from 'react';
import queryString from 'query-string'
import io from 'socket.io-client'
import InfoBar from './chat component/InfoBar.js'
import Input from './chat component/Input.js'
import Messages from './chat component/Messages.js'
import Axios from 'axios';
import './chat component/chatUI.css'

let socket;

const Chat = ({location}) => {
    const [username,setUsername] = useState('')
    const [room,setRoom] = useState(undefined)
    const [message,setMessage] = useState('')
    const [messages,setMessages] = useState([])
    const [pastMessages,setPastMessages] = useState(undefined)
    const ENDPOINT = 'localhost:5000'

    const createSenderRoom = async (senderName,room) => {
        const userActiveRooms = await Axios.post(
            'http://localhost:5000/chat/getUserRooms',
            {
                user:senderName
            }
        )
        console.log('userActiveRooms.data: ',userActiveRooms.data)
        if(userActiveRooms.data.length === 0){
            const response = await Axios.post(
            'http://localhost:5000/chat/createSenderRoom',
                {
                    user:senderName,
                    room:room,
                    text:' '
                }
            )
            console.log('response.data: ',response.data)
        }
    }

    const getPastMessages = async (room) => {
        try{
            const checkRes = await Axios.post(
                'http://localhost:5000/chat/getPastMessages',
                {
                    room:room
                }
            )

            if (checkRes.data) setMessages(checkRes.data)
        } catch (err) {
            console.log({err: err.response.data.msg})
        }
    }

    const addMessage = async (username,text,room) => {
        try{
            const savedMessage = await Axios.post(
                'http://localhost:5000/chat/addMessage',
                {
                    user:username,
                    text:text,
                    room:room
                }
            )
            console.log('savedMessage.data: ',savedMessage.data)
        } catch (err) {
            console.log({err: err.response.data.msg})
        }
    }

    useEffect(() => {
        const startChat = async () => {
            try {
                const {username,room} = queryString.parse(location.search)

                socket = io(ENDPOINT)

                setUsername(username)
                setRoom(room)
                await getPastMessages(room)
                await createSenderRoom(room.slice(username.length+3),room)

            
                socket.emit('join',{username,room}, () => {

                })
                return () => {
                    socket.emit('disconnect')

                    socket.off()
                }            
            } catch (err) {
                console.log({err: err.response.data.msg})
            }
        }
        startChat()

    },[ENDPOINT,location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message])
        })
    },[messages,room])

    const sendMessage = (event) => {
        event.preventDefault() // to avoid refreshing page
        if(username&&message&&room)
            addMessage(username,message,room)

        socket.emit('sendMessage', message, ()=> setMessage(''))
    }

    // console.log('message: ',message,'messages: ',messages)

    return (
        <div className={'chat-container'}>
            <div>
            </div>
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
