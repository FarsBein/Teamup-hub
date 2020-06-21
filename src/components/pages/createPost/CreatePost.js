import React, { useContext } from 'react';
import * as ReactBootStrap from 'react-bootstrap'
import { Redirect } from 'react-router-dom';
import UserContext from '../../context/UserContext';

const CreatePost = () => {
    const {userData} = useContext(UserContext)

    return (
        <div className={'create-post-container'}>
            {!userData.user  ? <Redirect to='/' />: null}
            <ReactBootStrap.Form className={'create-post-form'}>
                <ReactBootStrap.Form.Group controlId="exampleForm.ControlInput1">
                    <ReactBootStrap.Form.Label>Title</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control type="text" placeholder="Title" />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Group controlId="exampleForm.ControlSelect1">
                    <ReactBootStrap.Form.Label>Category</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control as="select">
                        <option>Project</option>
                        <option>Gaming</option>
                        <option>School Work</option>
                    </ReactBootStrap.Form.Control>
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Form.Group>
                    <ReactBootStrap.Form.File id="exampleFormControlFile1" label="Image (optional) *not working yet" />
                </ReactBootStrap.Form.Group>
                
                <ReactBootStrap.Form.Group controlId="exampleForm.ControlTextarea1">
                    <ReactBootStrap.Form.Label>Description</ReactBootStrap.Form.Label>
                    <ReactBootStrap.Form.Control as="textarea" rows="3" />
                </ReactBootStrap.Form.Group>
                <ReactBootStrap.Button variant="primary" type="submit">
                            Submit
                </ReactBootStrap.Button>
            </ReactBootStrap.Form>
        </div>
    );
}

export default CreatePost;
