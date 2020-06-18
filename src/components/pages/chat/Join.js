import React, { useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Join = () => {
    const [username,setUsername] = useState('')
    const [room,setRoom] = useState('')

    return (
        <div>
            <ReactBootStrap.Form style={{'display':'flex','flexDirection':'column','alignItems':'center','justifyContent':'center'}}>
                <ReactBootStrap.Form.Group controlId="formBasicUsername">
                    <ReactBootStrap.Form.Label>Username</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control type="text" placeholder="Enter Username" onChange={(event) => setUsername(event.target.value)} />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formBasicRoom">
                    <ReactBootStrap.Form.Label>Room</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control type="text" placeholder="Room" onChange={(event) => setRoom(event.target.value)}/>
                </ReactBootStrap.Form.Group>
                <Link onClick={event => (!username||!room) ? event.preventDefault() : null} to={`/chat?username=${username}&room=${room}`}>
                    <ReactBootStrap.Button className='btn-lg btn-dark btn-block' variant="dark" type="submit">
                        Log in
                    </ReactBootStrap.Button>                    
                </Link>

            </ReactBootStrap.Form>
        </div>
    );
}

export default Join;
