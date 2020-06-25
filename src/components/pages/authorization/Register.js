import React,{useState, useContext} from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import UserContext from '../../context/UserContext'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'
import logo from '../../../images/logo.png'
import ErrorAlert from '../../Error/ErrorAlert.js'
import './auth.css'

const Register = () => {
    const {userData,setUserData} = useContext(UserContext)
    const [username,setUsername] = useState({username:undefined})
    const [email,setEmail] = useState({email:undefined})
    const [password,setPassword] = useState({password:undefined})
    const [passwordCheck,setPasswordCheck] = useState({password:undefined})
    const [errorMessage,setErrorMessage] = useState(undefined)
    const [image,setImage] = useState(undefined)
    const [imageUrl,setImageUrl] = useState(undefined)

    const handleSubmits = async (e) => {
        e.preventDefault()
        await imageDetail()
        const newUser = {username,email,password,passwordCheck,profileImage:imageUrl}
        try {
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

        }catch (err) {
            err.response.data.msg && setErrorMessage(err.response.data.msg)
        }
    }

    const imageDetail = () => {
        const data = new FormData()
        data.append('file',image) 
        data.append('upload_preset','team_up_hub')
        data.append('cloud_name','farsbein01')
        fetch('https://api.cloudinary.com/v1_1/farsbein01/image/upload',{
                method: 'post',
                body:data
            })
            .then((res) => res.json())
            .then((data) => setImageUrl(data.url))
            .catch((err) => console.log(data))
    }

    return (
        <div className='auth-container'>
            {userData.user  ? <Redirect to='/' />: null}
            <div className='Welcome'>
                <p>🎉Welcome!🎉</p>
            </div>
                <ReactBootStrap.Form className={'form-container'}>
                    {errorMessage ? <ErrorAlert clearError={()=>setErrorMessage(undefined)} errorMessage={errorMessage} />: null}
                    <ReactBootStrap.Form.Group  className='profile-image-container'>
                        <ReactBootStrap.Image className='profile-image' src={image ? '' : 'https://res.cloudinary.com/farsbein01/image/upload/w_200,c_scale/v1593036790/emptyAvatar_tdmn5u.png'} roundedCircle />
                        <ReactBootStrap.Form.File onChange={((e) => setImage(e.target.files[0]))}
                            id="exampleFormControlFile1" 
                            label="Profile Image (optional)"/>
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