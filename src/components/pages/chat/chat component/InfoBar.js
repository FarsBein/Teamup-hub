import React from 'react';
import './chatUI.css'

const InfoBar = ({username}) => {
    return (
        <div className='infoBar-container'>
            {username ? <p>{username}</p> : <p>username</p>}
        </div>
    );
}

export default InfoBar;
