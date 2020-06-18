import React from 'react';
import {Route,Switch} from 'react-router-dom';
import feed from '../pages/feed/Feed.js'
import post from '../pages/post/Post.js'
import profile from '../pages/profile/Profile.js'
import authorization from '../pages/authorization/Auth.js'
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
                <Route name='authorization' component={authorization} path='/authorization' />                
                <Route name='feed' component={feed} path='/' />                
            </Switch>
        </div>
    )
}


export default Root;