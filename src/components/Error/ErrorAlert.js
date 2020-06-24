import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import './Error.css'

export default function ErrorAlert({errorMessage,clearError}) {
    return (
        <div>
            <ReactBootStrap.Alert className='Error-alert' variant={"warning"}>
                {errorMessage}
                <ReactBootStrap.Button className='Error-alert-button' variant={"danger"} onClick={clearError}>✖</ReactBootStrap.Button>
            </ReactBootStrap.Alert>
        </div>
    )
}
