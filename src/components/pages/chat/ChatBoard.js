import React,{useContext, useEffect, useState} from 'react'
import './chat component/chatUI.css'
import { Redirect, Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'
import * as ReactBootStrap from 'react-bootstrap'
import Axios from 'axios'

export default function ChatBoard() {
    const {userData} = useContext(UserContext)
    const [userRooms,setUserRooms] = useState(undefined)
    const [profileImage,setProfileImage] = useState()
    useEffect(()=>{
        const getUserRooms = async () => {
            if(userData.user){
                const userActiveRooms = await Axios.post(
                    'http://localhost:5000/chat/getUserRooms',
                    {
                        user:userData.user.username
                    }
                )
                setProfileImage(await getImage())
                setUserRooms(userActiveRooms.data)
                console.log('userActiveRooms.data: ',userActiveRooms.data)                
            }
        }

        getUserRooms()
    },[userData])

    const getImage = async () => {
        const getProfileImage = await Axios.post(
            'http://localhost:5000/users/getProfileImage',
            {
                username:userData.user.username
            }
        )
        console.log('getProfileImage.data:',getProfileImage.data)
        return getProfileImage.data
    }

    return (
        <div>
            {/* {!userData.user  ? <Redirect to='/' />: null} */}
            <ReactBootStrap.Card className='chatBoard-cards-container'>
                {
                    userRooms ?
                    userRooms.map((room,i) => (
                        <Link to={`/chat?username=${userData.user.username}&room=${room}`}>
                            <ReactBootStrap.Card.Body className='cards-body'>
                                <ReactBootStrap.Image className={'chatBoard-profile-image'} src={profileImage} roundedCircle />
                                <ReactBootStrap.Card.Title>{room.slice(userData.user.username.length+3)}</ReactBootStrap.Card.Title>
                                <ReactBootStrap.Card.Text></ReactBootStrap.Card.Text>
                            </ReactBootStrap.Card.Body>                              
                        </Link>
                    )):
                    null
                }


            </ReactBootStrap.Card>
        </div>
    )
}
