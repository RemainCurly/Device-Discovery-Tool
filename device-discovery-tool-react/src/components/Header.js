import React from 'react';
import {Navbar, Nav, Container, Row} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import '../App.css';

function Header()
{
    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>STAPL Solutions</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav"/>
                    <Nav className="mr-auto"> //margins auto
                        <LinkContainer to="/">
                            <Nav.Link><i className="far fa-bell"></i>Notifications</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/auth">
                            <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;