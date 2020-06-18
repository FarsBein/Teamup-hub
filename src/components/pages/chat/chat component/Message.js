import React from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import ReactEmoji from 'react-emoji'

const Message = ({message,username}) => {
    const text = message.text

    const isUserMessage = (message.user === username)

    return (
        <div>
            {
                isUserMessage ?
                <div className="user-message-container">
                    <p className="sender-name">{username}</p>
                    <div className="message-box">
                        <p className="message-text">{ReactEmoji.emojify(text)}</p>
                    </div>
                </div>
                :
                <div className="sender-message-container">
                    <div className="sender-name">
                    <p className="message-box">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="message-text">{username}</p>
                </div>

            }
        </div>
    );
}

export default Message;
