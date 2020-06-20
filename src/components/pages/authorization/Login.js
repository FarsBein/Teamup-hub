import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'

export default function Login() {
    return (
        <div className='auth-container'>
            <div className='Welcome'>
                <p>🎉Welcome!🎉</p>
            </div>
            <ReactBootStrap.Form className={'form'}>
                <ReactBootStrap.Form.Group controlId="formBasicEmail">
                    <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control type="email" placeholder="Enter email" />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formBasicPassword">
                    <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control type="password" placeholder="Password" />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Button className='btn-lg btn-dark btn-block' variant="dark" type="submit">
                    Log in
                </ReactBootStrap.Button>
            </ReactBootStrap.Form>
        </div>
    )
}
