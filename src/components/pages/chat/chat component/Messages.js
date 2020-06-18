import React from 'react';
import './chatUI.css'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message.js'

const Messages = ({messages,username}) => {

    return (
        <div>
            <ScrollToBottom>
                {messages.map((message,i) => (
                    <div key={i}>
                        <Message message={message} username={username}/>
                    </div>
                ))}
            </ScrollToBottom>
        </div>
    );
}

export default Messages;
