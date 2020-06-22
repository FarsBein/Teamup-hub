import React, { useState, useEffect } from 'react'
import * as ReactBootstrap from "react-bootstrap";
import '../../../App.css'
import { Link } from 'react-router-dom';
import pepe from '../../../images/pepe.jpg'
import Axios from 'axios';

const Feed = () => {
    const [cardsInfo,SetCardsInfo] = useState([{
            'profileImage':pepe, 
            'name':'Roy zimmakes',
            'field':'Gaming Development',
            'title':'Shooting game',
            'description':'need a team to build multiplayer shooting game using c# and unity',
            'tools':['JavaScript', 'C++', 'C#', 'Unity']
        },
        {
            'profileImage':pepe, 
            'name':'Roy zimmakes',
            'field':'Software Development',
            'title':'Desktop management app',
            'description':'I want to build asdhajskhd dajshdkj akjshdkjahjkdh jhdakjhdjk',
            'tools':['JavaScript', 'C', 'Google']
        },
        {
            'profileImage':pepe, 
            'name':'Roy zimmakes',
            'field':'Website Development',
            'title':'Website for kids',
            'description':'need help in building a website dasjd aklsjdkj dkajslkdj',
            'tools':['JavaScript']
        },
        {
            'profileImage':pepe, 
            'name':'Roy zimmakes',
            'field':'Gaming Development',
            'title':'Shooting game',
            'description':'need a team to build multiplayer shooting game using c# and unity',
            'tools':['C#']
        }
    ])

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
                            <ReactBootstrap.Card className='reactBootstrap-card'>
                                <ReactBootstrap.Card.Header as="h5">
                                    <ReactBootstrap.Container>
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Image className={'feed-profile-image'} src={card['profileImage']} roundedCircle />
                                            <ReactBootstrap.Col>
                                                <div style={{"fontSize":"15px"}}>
                                                    {card.name}
                                                </div>  
                                                <div style={{"fontSize":"10px"}}>
                                                    in {card.category}
                                                </div>                                          
                                            </ReactBootstrap.Col>                      
                                        </ReactBootstrap.Row>
                                    </ReactBootstrap.Container>
                                </ReactBootstrap.Card.Header>
                                <ReactBootstrap.Card.Body>
                                    <Link to={`/post/?id=${card._id}`} style={{ 'textDecoration': 'none'}}>
                                        <ReactBootstrap.Card.Title>{card.title}</ReactBootstrap.Card.Title>
                                    </Link>
                                    <ReactBootstrap.Card.Text>
                                        {card.briefDescription}
                                    </ReactBootstrap.Card.Text>
                                    {/* <ReactBootstrap.Button variant="warning">save</ReactBootstrap.Button>  a save button more work will have to be done*/}
                                </ReactBootstrap.Card.Body>
                                <div className='tools'>
                                    {
                                        card.tools.map((tool,i) => (
                                            <ReactBootstrap.Badge style={{
                                                'padding':'6px 10px',
                                                'margin':'0 3px'}} 
                                                pill variant="dark">
                                                {tool}
                                            </ReactBootstrap.Badge>
                                            )
                                        )
                                    }
                                </div>   
                            </ReactBootstrap.Card>                    
                        </div> 
                    ))} 
            </div>
        </div>
    )
}

export default Feed;