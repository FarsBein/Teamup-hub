import React from 'react'
import * as ReactBootstrap from "react-bootstrap";
import '../../../App.css'
import { Link } from 'react-router-dom';
import pepe from '../../../images/pepe.jpg'

export default function feed() {

    return (
        <div className={'wrapper'}>
            <div className={'cards-container'}>
                <div className={'cards'}>
                <Link to="/post" style={{ textDecoration: 'none'}}>
                    <ReactBootstrap.Card className='reactBootstrap-card'>
                        <ReactBootstrap.Card.Header as="h5">
                            <ReactBootstrap.Container>
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Image className={'feed-profile-image'} src={pepe} roundedCircle />
                                    <ReactBootstrap.Col>
                                        <div style={{"fontSize":"15px"}}>
                                            Roy zimmakes
                                        </div>  
                                        <div style={{"fontSize":"10px"}}>
                                            in Software Development
                                        </div>                                          
                                    </ReactBootstrap.Col>                      
                                </ReactBootstrap.Row>
                            </ReactBootstrap.Container>
                        </ReactBootstrap.Card.Header>
                        <ReactBootstrap.Card.Body>
                            <ReactBootstrap.Card.Title>Shooting game</ReactBootstrap.Card.Title>
                            <ReactBootstrap.Card.Text>
                                need a team to build multiplayer shooting game using c# and unity
                            </ReactBootstrap.Card.Text>
                            <ReactBootstrap.Button variant="outline-warning">save</ReactBootstrap.Button>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>                    
                </Link>
                </div>                <div className={'cards'}>
                <Link to="/post" style={{ textDecoration: 'none'}}>
                    <ReactBootstrap.Card className='reactBootstrap-card'>
                        <ReactBootstrap.Card.Header as="h5">
                            <ReactBootstrap.Container>
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Image className={'feed-profile-image'} src={pepe} roundedCircle />
                                    <ReactBootstrap.Col>
                                        <div style={{"fontSize":"15px"}}>
                                            Roy zimmakes
                                        </div>  
                                        <div style={{"fontSize":"10px"}}>
                                            in Software Development
                                        </div>                                          
                                    </ReactBootstrap.Col>                      
                                </ReactBootstrap.Row>
                            </ReactBootstrap.Container>
                        </ReactBootstrap.Card.Header>
                        <ReactBootstrap.Card.Body>
                            <ReactBootstrap.Card.Title>Special title treatment</ReactBootstrap.Card.Title>
                            <ReactBootstrap.Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </ReactBootstrap.Card.Text>
                            <ReactBootstrap.Button variant="outline-warning">save</ReactBootstrap.Button>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>                    
                </Link>
                </div>
                <div className={'cards'}>
                <Link to="/post" style={{ textDecoration: 'none'}}>
                    <ReactBootstrap.Card className='reactBootstrap-card'>
                        <ReactBootstrap.Card.Header as="h5">
                            <ReactBootstrap.Container>
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Image className={'feed-profile-image'} src={pepe} roundedCircle />
                                    <ReactBootstrap.Col>
                                        <div style={{"fontSize":"15px"}}>
                                            Roy zimmakes
                                        </div>  
                                        <div style={{"fontSize":"10px"}}>
                                            in Software Development
                                        </div>                                          
                                    </ReactBootstrap.Col>                      
                                </ReactBootstrap.Row>
                            </ReactBootstrap.Container>
                        </ReactBootstrap.Card.Header>
                        <ReactBootstrap.Card.Body>
                            <ReactBootstrap.Card.Title>Special title treatment</ReactBootstrap.Card.Title>
                            <ReactBootstrap.Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </ReactBootstrap.Card.Text>
                            <ReactBootstrap.Button variant="outline-warning">save</ReactBootstrap.Button>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>                    
                </Link>
                </div>
                <div className={'cards'}>
                <Link to="/post" style={{ textDecoration: 'none'}}>
                    <ReactBootstrap.Card className='reactBootstrap-card'>
                        <ReactBootstrap.Card.Header as="h5">
                            <ReactBootstrap.Container>
                                <ReactBootstrap.Row>
                                    <ReactBootstrap.Image className={'feed-profile-image'} src={pepe} roundedCircle />
                                    <ReactBootstrap.Col>
                                        <div style={{"fontSize":"15px"}}>
                                            Roy zimmakes
                                        </div>  
                                        <div style={{"fontSize":"10px"}}>
                                            in Software Development
                                        </div>                                          
                                    </ReactBootstrap.Col>                      
                                </ReactBootstrap.Row>
                            </ReactBootstrap.Container>
                        </ReactBootstrap.Card.Header>
                        <ReactBootstrap.Card.Body>
                            <ReactBootstrap.Card.Title>Special title treatment</ReactBootstrap.Card.Title>
                            <ReactBootstrap.Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </ReactBootstrap.Card.Text>
                            <ReactBootstrap.Button variant="outline-warning">save</ReactBootstrap.Button>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>                    
                </Link>
                </div>
            </div>
        </div>
    )
}
