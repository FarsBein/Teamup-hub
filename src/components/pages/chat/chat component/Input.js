import React from 'react';
import './chatUI.css'
import * as ReactBootStrap from 'react-bootstrap'
import sendIcon from '../../../../images/sendIcon.png'

const Input = ({message,setMessage,sendMessage}) => {
    return (
        <div className={'input'}>
            <ReactBootStrap.Form.Group className={'input-container'}>
                        <ReactBootStrap.Form.Control 
                                onChange={(event) => setMessage(event.target.value)} 
                                onKeyDown={event => event.key === 'Enter' ? sendMessage(event) : null}
                                value={message}
                                size="lg" 
                                type="text" 
                                placeholder="send text..." />
                        <ReactBootStrap.Button variant="light" onClick={(event) => message !== '' ? sendMessage(event): null}>
                            <img className='send-icon' src={sendIcon} alt={'made by www.flaticon.com'}/>
                        </ReactBootStrap.Button>                         
            </ReactBootStrap.Form.Group>
        </div>
    );
}

export default Input;
