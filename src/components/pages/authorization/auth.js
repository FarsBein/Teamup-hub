import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'

const Auth = () => {
    return (
        <div className='auth-container'>
            <div className='Welcome'>
                <p>Welcome!</p>
            </div>
            <ReactBootStrap.Tabs defaultActiveKey="Log in" id="uncontrolled-tab-example">
                <ReactBootStrap.Tab eventKey="Log in" title="Log in">
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
                </ReactBootStrap.Tab>
                <ReactBootStrap.Tab eventKey="Sign up" title="Sign up">
                    <ReactBootStrap.Form className={'form'}>
                        <ReactBootStrap.Form.Group controlId="formBasicFirstName">
                            <ReactBootStrap.Form.Label >FirstName</ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="text" placeholder="Enter FirstName" />
                        </ReactBootStrap.Form.Group>

                        <ReactBootStrap.Form.Group controlId="formBasicLastName">
                            <ReactBootStrap.Form.Label >LastName</ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="text" placeholder="Enter FirstName" />
                        </ReactBootStrap.Form.Group>

                        <ReactBootStrap.Form.Group controlId="formBasicUsername">
                            <ReactBootStrap.Form.Label >Username</ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="text" placeholder="Enter Username" />
                        </ReactBootStrap.Form.Group>

                        <ReactBootStrap.Form.Group controlId="formBasicEmail">
                            <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="email" placeholder="Enter email" />
                        </ReactBootStrap.Form.Group>

                        <ReactBootStrap.Form.Group controlId="formBasicPassword">
                            <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
                            <ReactBootStrap.Form.Control type="password" placeholder="Password" />
                        </ReactBootStrap.Form.Group>
                        <ReactBootStrap.Button className='btn-lg btn-dark btn-block' variant="dark" type="submit">
                            Sign up
                        </ReactBootStrap.Button>
                    </ReactBootStrap.Form>
                </ReactBootStrap.Tab>
            </ReactBootStrap.Tabs>
        </div>
    )
}

export default  Auth;