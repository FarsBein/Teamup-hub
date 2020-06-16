import React from 'react'
import * as ReactBootstrap from "react-bootstrap";
import '../../../App.css'
import { Link } from 'react-router-dom';


export default function feed() {

    return (
        <div className={'wrapper'}>
            <div className={'cards-container'}>
            <div className={'cards'}>
                <Link to="/post" style={{ textDecoration: 'none'}}>
                    <ReactBootstrap.Card className='reactBootstrap-card'>
                        <ReactBootstrap.Card.Header as="h5">Featured</ReactBootstrap.Card.Header>
                        <ReactBootstrap.Card.Body>
                            <ReactBootstrap.Card.Title>Special title treatment</ReactBootstrap.Card.Title>
                            <ReactBootstrap.Card.Text>
                                With supporting text below as a natural lead-in to additional content.
                            </ReactBootstrap.Card.Text>
                            <ReactBootstrap.Button variant="primary">Go somewhere</ReactBootstrap.Button>
                        </ReactBootstrap.Card.Body>
                    </ReactBootstrap.Card>                    
                </Link>
                </div>
                <div className={'cards'}>
                    <Link to="/post" style={{ textDecoration: 'none'}}>
                        <ReactBootstrap.Card className='reactBootstrap-card'>
                            <ReactBootstrap.Card.Header as="h5">Featured</ReactBootstrap.Card.Header>
                            <ReactBootstrap.Card.Body>
                                <ReactBootstrap.Card.Title>Special title treatment</ReactBootstrap.Card.Title>
                                <ReactBootstrap.Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </ReactBootstrap.Card.Text>
                                <ReactBootstrap.Button variant="primary">Go somewhere</ReactBootstrap.Button>
                            </ReactBootstrap.Card.Body>
                        </ReactBootstrap.Card>                        
                    </Link>
                </div>
                <div className={'cards'}>
                    <Link to="/post" style={{ textDecoration: 'none'}}>
                        <ReactBootstrap.Card className='reactBootstrap-card'>
                            <ReactBootstrap.Card.Header as="h5">Featured</ReactBootstrap.Card.Header>
                            <ReactBootstrap.Card.Body>
                                <ReactBootstrap.Card.Title>Special title treatment</ReactBootstrap.Card.Title>
                                <ReactBootstrap.Card.Text>
                                    With supporting text below as a natural lead-in to additional content.
                                </ReactBootstrap.Card.Text>
                                <ReactBootstrap.Button variant="primary">Go somewhere</ReactBootstrap.Button>
                            </ReactBootstrap.Card.Body>
                        </ReactBootstrap.Card>
                    </Link>
                </div>
            </div>
        </div>
    )
}
