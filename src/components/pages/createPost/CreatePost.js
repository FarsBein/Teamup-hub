import React, { useContext,useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import Axios from 'axios';

const CreatePost = () => {
    const {userData} = useContext(UserContext)
    const [title,setTitle] = useState()
    const [category,setCategory] = useState('Project')
    const [briefDescription, setBriefDescription] = useState()
    const [fullDescription,SetFullDescription] = useState()
    const [tools,setTools] = useState([])
    const [toFeed,setToFeed] =useState(false)

    const createPost = async (e) => {
        e.preventDefault()
        const newPost = {
                name:userData.user.username, 
                title:title,
                category:category,
                briefDescription:briefDescription, 
                fullDescription:fullDescription,
                tools:tools
        }

        const savedPost = await Axios.post(
            'http://localhost:5000/posts/createPost',
            newPost
        )
        setToFeed(true)
        //savedPost.data
    }

    return (
        <div className={'create-post-container'}>
            {toFeed || !userData.user  ? <Redirect to='/' />: null}
            <ReactBootStrap.Form className={'create-post-form'}>
                <ReactBootStrap.Form.Group controlId="exampleForm.ControlInput1">
                    <ReactBootStrap.Form.Label>Title</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Title" />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Group controlId="exampleForm.ControlSelect1">
                    <ReactBootStrap.Form.Label>Category</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control 
                        defaultValue={category} 
                        onChange={(e)=>setCategory(e.target.value)} as="select">
                        <option>Project</option>
                        <option>Gaming</option>
                        <option>School</option>
                    </ReactBootStrap.Form.Control>
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Group>
                    <ReactBootStrap.Form.File id="exampleFormControlFile1" label="Image (optional) *not working yet" />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Group controlId="exampleForm.ControlInput1">
                    <ReactBootStrap.Form.Label>Brief Description</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control onChange={(e) => setBriefDescription(e.target.value)} type="text" placeholder="brief description..." />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Group controlId="exampleForm.ControlTextarea1">
                    <ReactBootStrap.Form.Label>Full Description</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control onChange={(e) => SetFullDescription(e.target.value)} as="textarea" rows="3" />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Group controlId="exampleForm.ControlTextarea1">

                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Button onClick={createPost} variant="primary" type="submit">
                            Create
                </ReactBootStrap.Button>
            </ReactBootStrap.Form>
        </div>
    );
}

export default CreatePost;
