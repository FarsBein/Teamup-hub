import React from 'react';
import {Route,Switch} from 'react-router-dom';
import feed from '../pages/feed/Feed.js'
import post from '../pages/post/Post.js'
import profile from '../pages/profile/Profile.js'
import Register from '../pages/authorization/Register.js'
import Login from '../pages/authorization/Login.js'
import Navbar from '../Navbar/Navbar.js';
import createPost from '../pages/createPost/CreatePost.js';
import chat from '../pages/chat/Chat.js'
import join from '../pages/chat/Join.js'

const Root = () => {
    return (
        <div>
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
        </div>
    )
}


export default Root;