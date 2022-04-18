import React from 'react';
import {Navbar, Nav, Container, Row} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import '../App.css';
import Notifications from "react-notifications-menu";
import { useState } from "react";

function Header()
{
    const DEFAULT_NOTIFICATION = {
        image:
            "https://cutshort-data.s3.amazonaws.com/cloudfront/public/companies/5809d1d8af3059ed5b346ed1/logo-1615367026425-logo-v6.png",
        message: "Notification one.",
        detailPage: "/events",
        receivedTime: "12h ago"
    };

    const [data, setData] = useState([DEFAULT_NOTIFICATION]);

    return (
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand>STAPL Solutions</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav"/>
                    <Nav className="mr-auto"> {/* Margins auto */}
                        <LinkContainer to="/Notifications">
                            <Nav.Link><i className="far fa-bell"></i>Notifications</Nav.Link>
                        </LinkContainer>
                        <Notifications
                            data={data}
                            header={{
                                title: "Notifications",
                                option: { text: "Mark All As Read", onClick: () => console.log("Clicked") }
                            }}
                            markAsRead={(data) => {
                                console.log(data);
                            }}
                        />
                        <LinkContainer to="/auth">
                            <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                        </LinkContainer>
                    </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;