import React, { useContext,useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/UserContext';
import Axios from 'axios';
import ErrorAlert from '../../Error/ErrorAlert.js'

import Select, { components } from 'react-select';
import {toolOptions} from './toolsOptions'

const CreatePost = () => {
    const {userData} = useContext(UserContext)
    const [title,setTitle] = useState()
    const [category,setCategory] = useState('Project')
    const [briefDescription, setBriefDescription] = useState()
    const [fullDescription,SetFullDescription] = useState()
    const [tools,setTools] = useState([])
    const [toFeed,setToFeed] =useState(false)
    const [errorMessage,setErrorMessage] = useState(undefined)
    const [image,setImage] = useState(undefined)
    const [imageUrl,setImageUrl] = useState(undefined)


    const createPost = async (e) => {
        e.preventDefault()
        if (image) await imageDetail()
        const newPost = {
                name:userData.user.username, 
                title:title,
                category:category,
                briefDescription:briefDescription, 
                fullDescription:fullDescription,
                tools:tools,
                image:imageUrl?imageUrl:'',
                profileImage: userData.user.profileImage
        }
        try {
            const savedPost = await Axios.post(
                'http://localhost:5000/posts/createPost',
                newPost
            )
            setToFeed(true)
            //savedPost.data

        }catch (err) {
            err.response.data.msg && setErrorMessage(err.response.data.msg)
        } 
    }

    const imageDetail = () => {
        const data = new FormData()
        data.append('file',image) 
        data.append('upload_preset','team_up_hub')
        data.append('cloud_name','farsbein01')
        fetch('https://api.cloudinary.com/v1_1/farsbein01/image/upload',{
                method: 'post',
                body:data
            })
            .then((res) => res.json())
            .then((data) => setImageUrl(data.url))
            .catch((err) => console.log(data))
    }


    const IndicatorsContainer = props => {
        return (
          <div style={{ background: toolOptions[2].color }}>
            <components.IndicatorsContainer {...props} />
          </div>
        );
      };

    return (
        <div className={'create-post-container'}>
            {toFeed || !userData.user  ? <Redirect to='/' />: null}
            <ReactBootStrap.Form className={'create-post-form'}>
                {errorMessage ? <ErrorAlert clearError={()=>setErrorMessage(undefined)} errorMessage={errorMessage} />: null}
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
                    <ReactBootStrap.Form.File onChange={((e) => setImage(e.target.files[0]))}
                     id="exampleFormControlFile1" 
                     label="Image (optional)"/>
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
                    <ReactBootStrap.Form.Label>Tools Used</ReactBootStrap.Form.Label>
                    <Select
                        closeMenuOnSelect={false}
                        components={{ IndicatorsContainer }}
                        isMulti
                        options={toolOptions}
                        onChange={setTools}
                    />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Button onClick={createPost} variant="primary" type="submit" size="lg" block>
                            Create
                </ReactBootStrap.Button>
            </ReactBootStrap.Form>
        </div>
    );
}

export default CreatePost;
