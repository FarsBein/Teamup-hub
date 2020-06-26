import React, { useState, useEffect } from 'react'
import * as ReactBootStrap from "react-bootstrap";
import '../../../App.css'
import { Link } from 'react-router-dom';
import pepe from '../../../images/pepe.jpg'
import Axios from 'axios';

const Feed = () => {
    const [cardsInfo,SetCardsInfo] = useState([])

    useEffect(() => {
        const getAllPosts = async () => {
            const allPosts = await Axios.get(
                "http://localhost:5000/posts/getAllPosts"
            )
            SetCardsInfo(allPosts.data)
        }
        getAllPosts()
    },[])
    
    

    return (
        <div className={'wrapper'}>
            <div className={'cards-container'}>
                    {cardsInfo.map((card,index) => (
                        <div key={card._id} className={'cards'}>
                            <ReactBootStrap.Card className='reactBootStrap-card'>
                                <ReactBootStrap.Card.Header as="h5">
                                    <ReactBootStrap.Container>
                                        <ReactBootStrap.Row>
                                            <ReactBootStrap.Image className={'feed-profile-image'} src={card.profileImage} roundedCircle />
                                            <ReactBootStrap.Col>
                                                <div style={{"fontSize":"15px"}}>
                                                    {card.name}
                                                </div>  
                                                <div style={{"fontSize":"10px"}}>
                                                    in {card.category}
                                                </div>                                          
                                            </ReactBootStrap.Col>                      
                                        </ReactBootStrap.Row>
                                    </ReactBootStrap.Container>
                                </ReactBootStrap.Card.Header>
                                <ReactBootStrap.Card.Body>
                                    <Link to={`/post/?id=${card._id}`} style={{ 'textDecoration': 'none'}}>
                                        <ReactBootStrap.Card.Title>{card.title}</ReactBootStrap.Card.Title>
                                    </Link>
                                    {card.image ? <ReactBootStrap.Card.Img variant="top" src={card.image} /> : null}
                                    <ReactBootStrap.Card.Text>
                                        {card.briefDescription}
                                    </ReactBootStrap.Card.Text>
                                    {/* <ReactBootStrap.Button variant="warning">save</ReactBootStrap.Button>  a save button more work will have to be done*/}
                                </ReactBootStrap.Card.Body>
                                <div className='tools'>
                                    {
                                        card.tools.map((tool,i) => (
                                            <ReactBootStrap.Badge style={{
                                                'padding':'6px 10px',
                                                'margin':'0 3px'}} 
                                                pill variant="dark">
                                                {tool}
                                            </ReactBootStrap.Badge>
                                            )
                                        )
                                    }
                                </div>   
                            </ReactBootStrap.Card>                    
                        </div> 
                    ))} 
            </div>
        </div>
    )
}

export default Feed;