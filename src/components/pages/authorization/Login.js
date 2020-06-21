import React, { useState,useContext } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import Axios from 'axios'
import UserContext from '../../context/UserContext'
import { Redirect } from 'react-router-dom'

export default function Login() {
    const {userData,setUserData} = useContext(UserContext)
    
    const [username,setUsername] = useState({username:undefined})
    const [password,setPassword] = useState({password:undefined})

    const handleSubmits = async (e) => {
        e.preventDefault()


        const loginUser = {username, password}
        
        const newUserRes = await Axios.post(
            'http://localhost:5000/users/login',
            loginUser
        )

        setUserData({
            token: newUserRes.data.token,
            user: newUserRes.data.user
        })

        localStorage.setItem('auth-token', newUserRes.data.token)

    }


    return (
        <div className='auth-container'>
            {userData.user  ? <Redirect to='/' />: null}
            <div className='Welcome'>
                <p>🎉Welcome!🎉</p>
            </div>
            <ReactBootStrap.Form className={'form'}>
                <ReactBootStrap.Form.Group controlId="formBasicEmail">
                    <ReactBootStrap.Form.Label>Username</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                </ReactBootStrap.Form.Group>

                <ReactBootStrap.Form.Group controlId="formBasicPassword">
                    <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Button onClick={handleSubmits} className='btn-lg btn-dark btn-block' variant="dark" type="submit">
                    Log in
                </ReactBootStrap.Button>
            </ReactBootStrap.Form>
        </div>
    )
}
