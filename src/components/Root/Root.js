import React, {useState, useEffect} from 'react';
import {Route,Switch} from 'react-router-dom';
import Axois from 'axios'
import UserContext from '../context/UserContext.js'


import Feed from '../pages/feed/Feed.js'
import Post from '../pages/post/Post.js'
import Profile from '../pages/profile/Profile.js'
import Register from '../pages/authorization/Register.js'
import Login from '../pages/authorization/Login.js'
import Navbar from '../Navbar/Navbar.js';
import CreatePost from '../pages/createPost/CreatePost.js';
import Chat from '../pages/chat/Chat.js'
import Join from '../pages/chat/Join.js'
import ChatBoard from '../pages/chat/ChatBoard.js'

import Axios from 'axios';

const Root = () => {
    const [userData, setUserData] = useState({
        token:undefined,
        user: undefined
    })

    useEffect(()=>{ // cant have async function as useEffect so u have to create a separate function
        const checkLoggedIn = async () => {
            let token = localStorage.getItem('auth-token')
            if (token === null) { // if the user opens the website for the first time there will be local stored auth-token to avoid null we changed it to ""
                localStorage.setItem('auth-token','')
                token= ''
            }
            const tokenResponse = await Axois.post(
                "http://localhost:5000/users/tokenIsValid",
                null, //the body is null
                {headers:{"x-auth-token":token}}
            )
            if(tokenResponse.data) { // if token is valid

                const userResponse = await Axios.get(
                    "http://localhost:5000/users/",
                    {headers: {'x-auth-token':token}}
                )

                setUserData({
                    token: token,
                    user:userResponse.data
                })
            }
        }

        checkLoggedIn();
    },[])

    return (
        <div>
            <UserContext.Provider value={{ userData, setUserData}}>
                <Navbar />
                <Switch>                    
                    <Route name='createPost' component={CreatePost} path='/createPost' />                
                    <Route name='chat' component={Chat} path='/chat' />
                    <Route name='profile' component={Profile} path='/profile' />                
                    <Route name='Join' component={Join} path='/join' />                
                    <Route name='ChatBoard' component={ChatBoard} path='/ChatBoard' />

                    <Route name='authorization' component={Register} path='/register' />                
                    <Route name='authorization' component={Login} path='/login' />  
                    
                    <Route name='post' component={Post} path='/post' />                
                    <Route name='feed' component={Feed} path='/' />                
                </Switch>                    
            </UserContext.Provider>
        </div>
    )
}


export default Root;