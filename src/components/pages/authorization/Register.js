import React,{useState, useContext} from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import UserContext from '../../context/UserContext'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

const Register = () => {
    const {setUserData} = useContext(UserContext)
    const [toFeed,setToFeed] = useState(false)

    const [username,setUsername] = useState({username:undefined})
    const [email,setEmail] = useState({email:undefined})
    const [password,setPassword] = useState({password:undefined})
    const [passwordCheck,setPasswordCheck] = useState({password:undefined})
    


    const handleSubmits = async (e) => {
        e.preventDefault()
        const newUser = {username,email,password,passwordCheck}

        await Axios.post(
            'http://localhost:5000/users/register',
            newUser
        )
        
        const newUserRes = await Axios.post(
            'http://localhost:5000/users/login',
            {
                username,
                password
            }
        )

        setUserData({
            token: newUserRes.data.token,
            user: newUserRes.data.user
        })

        localStorage.setItem('auth-token', newUserRes.data.token)

        setToFeed(true)
    }

    return (
        <div className='auth-container'>
            {toFeed ? <Redirect to='/' />: null}
            <div className='Welcome'>
                <p>🎉Welcome!🎉</p>
            </div>
                <ReactBootStrap.Form className={'form'}>
                    <ReactBootStrap.Form.Group controlId="formBasicFirstName">
                        <ReactBootStrap.Form.Label >FirstName</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control type="text" placeholder="Enter First Name" />
                    </ReactBootStrap.Form.Group>

                    <ReactBootStrap.Form.Group controlId="formBasicLastName">
                        <ReactBootStrap.Form.Label >LastName</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control type="text" placeholder="Enter Last Name" />
                    </ReactBootStrap.Form.Group>

                    <ReactBootStrap.Form.Group controlId="formBasicUsername">
                        <ReactBootStrap.Form.Label >Username</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter Username" />
                    </ReactBootStrap.Form.Group>

                    <ReactBootStrap.Form.Group controlId="formBasicEmail">
                        <ReactBootStrap.Form.Label>Email address</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    </ReactBootStrap.Form.Group>

                    <ReactBootStrap.Form.Group controlId="formBasicPassword">
                        <ReactBootStrap.Form.Label>Password</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </ReactBootStrap.Form.Group>

                    <ReactBootStrap.Form.Group controlId="formBasicPassword">
                        <ReactBootStrap.Form.Label>Confirm Password</ReactBootStrap.Form.Label>
                        <ReactBootStrap.Form.Control onChange={(e) => setPasswordCheck (e.target.value)} type="password" placeholder="Confirm Password" />
                    </ReactBootStrap.Form.Group>

                    <ReactBootStrap.Button onClick={handleSubmits} className='btn-lg btn-dark btn-block' variant="dark" type="submit">
                        Sign up
                    </ReactBootStrap.Button>
                </ReactBootStrap.Form>
        </div>
    )
}

export default  Register;