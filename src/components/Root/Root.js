import React from 'react';
import {Route,Switch} from 'react-router-dom';
import feed from '../pages/feed/feed.js'
import post from '../pages/post/post.js'
import profile from '../pages/profile/profile.js'
import authorization from '../pages/authorization/auth.js'
import Navbar from '../Navbar/Navbar.js';

const Root = () => {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route name='post' component={post} path='/post' />                
                <Route name='profile' component={profile} path='/profile' />                
                <Route name='authorization' component={authorization} path='/authorization' />                
                <Route name='feed' component={feed} path='/' />                
            </Switch>
        </div>
    )
}


export default Root;