import React, {useState, useEffect} from 'react';
import {Route,Switch} from 'react-router-dom';
import Axois from 'axios'
import UserContext from '../context/UserContext.js'


import feed from '../pages/feed/Feed.js'
import post from '../pages/post/Post.js'
import profile from '../pages/profile/Profile.js'
import Register from '../pages/authorization/Register.js'
import Login from '../pages/authorization/Login.js'
import Navbar from '../Navbar/Navbar.js';
import createPost from '../pages/createPost/CreatePost.js';
import chat from '../pages/chat/Chat.js'
import join from '../pages/chat/Join.js'
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
            console.log("tokenResponse.data: ", tokenResponse.data)
            if(tokenResponse.data) { // if token is valid
                console.log("pass01: ", tokenResponse.data)

                const userResponse = await Axios.get(
                    "http://localhost:5000/users/",
                    {headers: {'x-auth-token':token}}
                )
            
                console.log("pass02: ", userResponse.data)

                setUserData({
                    token: token,
                    user:userResponse.data
                })
                console.log('2userData: ',userData)
            }
        }

        checkLoggedIn();
    },[])

    return (
        <div>
            <UserContext.Provider value={{ userData, setUserData}}>
                <Navbar />
                <Switch>
                    <Route name='chat' component={chat} path='/chat' />                
                    <Route name='Join' component={join} path='/join' />                
                    <Route name='post' component={post} path='/post' />                
                    <Route name='createPost' component={createPost} path='/createPost' />                
                    <Route name='profile' component={profile} path='/profile' />                
                    <Route name='authorization' component={Register} path='/register' />                
                    <Route name='authorization' component={Login} path='/login' />                
                    <Route name='feed' component={feed} path='/' />                
                </Switch>                    
            </UserContext.Provider>
        </div>
    )
}


export default Root;