import React, { useState,useEffect } from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import queryString from 'query-string'


const Post = ({location}) => {
    const [post,setPost] = useState({})
    
    useEffect(() => {
        const {id} = queryString.parse(location.search)
        console.log('id: ', id)
        const getPost = async () => {
            const postReceived = await Axios.post(
                'http://localhost:5000/posts/getPost',
                {
                    id: id
                }
            )
            setPost(postReceived.data)
            console.log('postReceived.data: ', postReceived.data)
        }
        getPost()
    },[])

    return (
        <div className={'wrapper'}>
            <ReactBootStrap.Card className='post-card'>
                {/* <ReactBootStrap.Card.Img variant="top" src="holder.js/100px180" /> */}
                <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title>{post.title}</ReactBootStrap.Card.Title>
                    <ReactBootStrap.Card.Text>
                        {post.fullDescription}
                    </ReactBootStrap.Card.Text>
                        <div className="post-tools">
                            {
                                post.tools ? 
                                post.tools.map((tool,i)=>(
                                            <ReactBootStrap.Badge style={{'padding':'10px', 'margin':'0 3px'}} pill variant="light">
                                                {tool}
                                            </ReactBootStrap.Badge>
                                        )
                                    ):
                                null
                            }                            
                        </div>
                    <Link to='/chat'>
                        <ReactBootStrap.Button style={{'margin':'13px'}} variant="dark">Chat</ReactBootStrap.Button>
                    </Link>                        
                </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
            <ReactBootStrap.Card className={'post-card'}>
                {/* <ReactBootStrap.Card.Header>Comments</ReactBootStrap.Card.Header> */}
                <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title>Comments</ReactBootStrap.Card.Title>
                    <ReactBootStrap.Card.Text>
                    <ReactBootStrap.Form>
                        <ReactBootStrap.Form.Group controlId="formBasicEmail">
                            <ReactBootStrap.Form.Control placeholder="" />
                            <ReactBootStrap.Form.Text className="text-muted">
                                please say something nice or don't say shit
                            </ReactBootStrap.Form.Text>
                        </ReactBootStrap.Form.Group>
                    </ReactBootStrap.Form>
                    </ReactBootStrap.Card.Text>
                    <ReactBootStrap.Button variant="primary">COMMENT</ReactBootStrap.Button>
                </ReactBootStrap.Card.Body>
            </ReactBootStrap.Card>
        </div>
    )
}

export default Post;