import React from 'react';
import {Button, Navbar, Nav, Container, Row} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import '../App.css';
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Header()
{
    const { user, logoutUser } = useContext(AuthContext);
    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                {user ? (
                <>
                    <LinkContainer to="/">
                        <Navbar.Brand>STAPL Solutions</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav"/>
                        <Nav className="mr-auto"> {/* Margins auto */}
                            <LinkContainer to="#">
                                <Button variant="secondary" bsSize="large" active onClick={logoutUser} >
                                    Log-Out
                                </Button>
                            </LinkContainer>
                        </Nav>
                </>
                ):(
                    <>
                        <LinkContainer to="/">
                        <Navbar.Brand>STAPL Solutions</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav"/>
                            <Nav className="mr-auto"> {/* Margins auto */}
                                <LinkContainer to="/login">
                                <Button variant="primary" bsSize="large">
                                    Log-In
                                </Button>
                                </LinkContainer>
                            </Nav>
                    </>
                )}  
            </Container>
        </Navbar>
    )
}

export default Header;