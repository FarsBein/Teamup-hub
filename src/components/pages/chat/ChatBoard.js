import React,{useContext} from 'react'
import './chat component/chatUI.css'
import { Redirect } from 'react-router-dom'
import UserContext from '../../context/UserContext'

export default function ChatBoard() {
    const {userData} = useContext(UserContext)
    console.log(userData.user )
    return (
        <div>
            {/* {!userData.user  ? <Redirect to='/' />: null} */}
            <div>
                Chat Board
            </div>
        </div>
    )
}
