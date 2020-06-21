import React, {useContext} from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../App.css'
import UserContext from '../context/UserContext.js'

export default function AuthOption() {
    const {userData, setUserData} = useContext(UserContext);


    const handleLogout = () => {
        setUserData({
            token: undefined,
            user: undefined
        })
        localStorage.setItem('auth-token','') // clear the local storage of the saved token
    }

    return (
        <div className='Register-Login'>
            {
                userData.user ?
                <div onClick={handleLogout} className={'links'}>Log out</div>:
                <>
                    <Link style={{'paddingRight': '10px'}} className={'links'} to="/register">Register</Link>
                    <Link  className={'links'} to="/login">Log in</Link>                
                </>
            }
        </div>
    )
}
