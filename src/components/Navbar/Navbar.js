import React from 'react';
import * as ReactBootstrap from "react-bootstrap";
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import AuthOption from './AuthOption';

const Navbar = () => {
    return (
        <div>
            <ReactBootstrap.Navbar bg="dark" variant="dark" expand="lg" className={'navbar'}>
                {/* <img className={'logo'} src={logo} alt={'logo'} /> */}
                <ReactBootstrap.Navbar.Brand href="/feed">
                    <img
                        src={logo}
                        width="51"
                        height="41"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
                    <ReactBootstrap.Navbar.Brand>
                        Teamup Hub
                    </ReactBootstrap.Navbar.Brand>
                </ReactBootstrap.Navbar.Brand>

                <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                    <ReactBootstrap.Nav.Link><Link className={'links'} to="/feed">Feed</Link></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="#link"><Link className={'links'} to="/profile">Profile</Link></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.Nav.Link href="#link"><Link className={'links'} to="/createPost">Create Post</Link></ReactBootstrap.Nav.Link>
                    <ReactBootstrap.NavDropdown title="Catagories" id="basic-nav-dropdown">
                        <ReactBootstrap.NavDropdown.Item>Projects</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Item>Gaming</ReactBootstrap.NavDropdown.Item>
                        <ReactBootstrap.NavDropdown.Item>school work</ReactBootstrap.NavDropdown.Item>
                    </ReactBootstrap.NavDropdown>
                    </ReactBootstrap.Nav>
                    <ReactBootstrap.Nav>
                        <AuthOption />
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
        </div>
    )
}

export default Navbar;