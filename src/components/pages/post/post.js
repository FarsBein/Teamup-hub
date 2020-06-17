import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Post = () => {
    return (
        <div className={'wrapper'}>
            <ReactBootStrap.Card className='post-card'>
                {/* <ReactBootStrap.Card.Img variant="top" src="holder.js/100px180" /> */}
                <ReactBootStrap.Card.Body>
                    <ReactBootStrap.Card.Title>Card Title</ReactBootStrap.Card.Title>
                    <ReactBootStrap.Card.Text>
                        HEADING LEVEL 2
                        HEADING LEVEL 3
                        HEADING LEVEL 4
                        HEADING LEVEL 5
                        HEADING LEVEL 6
                        Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing.
                        vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent
                    </ReactBootStrap.Card.Text>
                    <ReactBootStrap.Card body>Javascript, C++, C#, Unity</ReactBootStrap.Card>
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