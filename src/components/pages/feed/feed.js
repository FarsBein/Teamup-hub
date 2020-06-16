import React, { useState } from 'react'
import * as ReactBootstrap from "react-bootstrap";
import '../../../App.css'
import { Link } from 'react-router-dom';
import pepe from '../../../images/pepe.jpg'

const Feed = () => {
    const [cardsInfo,SetCardsInfo] = useState([{
            'profileImage':pepe, 
            'name':'Roy zimmakes',
            'field':'Gaming Development',
            'title':'Shooting game',
            'description':'need a team to build multiplayer shooting game using c# and unity',
            'tools':['Javascript', 'C++', 'C#', 'Unity']
        },
        {
            'profileImage':pepe, 
            'name':'Roy zimmakes',
            'field':'Software Development',
            'title':'desktop management app',
            'description':'I want to build asdhajskhd dajshdkj akjshdkjahjkdh jhdakjhdjk',
            'tools':['Javascript', 'C', 'Google']
        },
        {
            'profileImage':pepe, 
            'name':'Roy zimmakes',
            'field':'Website Development',
            'title':'Website for kids',
            'description':'need help in building a website dasjd aklsjdkj dkajslkdj',
            'tools':['Javascript']
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

    return (
        <div className={'wrapper'}>
            <div className={'cards-container'}>
                    {cardsInfo.map((card,index) => (
                        <div className={'cards'} key={index}>
                            <ReactBootstrap.Card className='reactBootstrap-card'>
                                <ReactBootstrap.Card.Header as="h5">
                                    <ReactBootstrap.Container>
                                        <ReactBootstrap.Row>
                                            <ReactBootstrap.Image className={'feed-profile-image'} src={card['profileImage']} roundedCircle />
                                            <ReactBootstrap.Col>
                                                <div style={{"fontSize":"15px"}}>
                                                    {card['name']}
                                                </div>  
                                                <div style={{"fontSize":"10px"}}>
                                                    in {card['field']}
                                                </div>                                          
                                            </ReactBootstrap.Col>                      
                                        </ReactBootstrap.Row>
                                    </ReactBootstrap.Container>
                                </ReactBootstrap.Card.Header>
                                <ReactBootstrap.Card.Body>
                                    <Link to="/post" style={{ 'textDecoration': 'none'}}>
                                        <ReactBootstrap.Card.Title>{card['title']}</ReactBootstrap.Card.Title>
                                    </Link>
                                    <ReactBootstrap.Card.Text>
                                        {card['description']}
                                    </ReactBootstrap.Card.Text>
                                    <ReactBootstrap.Container>
                                    <ReactBootstrap.Row>
                                            <ReactBootstrap.Button variant="outline-warning">save</ReactBootstrap.Button>
                                            {/* <div className='tools'>
                                                {card['tools']}
                                            </div>                                             */}
                                    </ReactBootstrap.Row>
                                    </ReactBootstrap.Container>                                        
                                </ReactBootstrap.Card.Body>
                                <ReactBootstrap.Card.Header as="h5">
                                            <div className='tools'>
                                                {
                                                    card['tools'].map((tool,i) => (
                                                        <ReactBootstrap.Badge style={{'padding':'4px', 'margin':'0 3px'}} variant="dark">
                                                            {tool}
                                                        </ReactBootstrap.Badge>
                                                        )
                                                    )
                                                }
                                            </div>   
                                </ReactBootstrap.Card.Header>
                            </ReactBootstrap.Card>                    
                        </div> 
                    ))} 
            </div>
        </div>
    )
}

export default Feed;