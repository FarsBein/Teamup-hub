import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../App.css'

export default function AuthOption() {
    return (
        <div className='Register-Login'>
            <Link style={{'paddingRight': '10px'}} className={'links'} to="/register">Register</Link>
            <Link  className={'links'} to="/login">Log in</Link>
        </div>
    )
}
