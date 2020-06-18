import React from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import ReactEmoji from 'react-emoji'

const Message = ({message,username}) => {
    const text = message.text

    const isUserMessage = (message.user.trim().toLowerCase() === username.trim().toLowerCase())

    console.log(message.user.trim().toLowerCase(),username)

    return (
        <div>
            {
                isUserMessage ?
                <div className="user-message-container">
                    <p className="user-name">{username}</p>
                    <div className="user-message-box">
                        <p className="user-message-text">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
                :
                <div className="sender-message-container">
                    <p className="sender-name">{message.user}</p>
                    <div className="sender-message-box">
                        <p className="sender-message-text">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Message;
