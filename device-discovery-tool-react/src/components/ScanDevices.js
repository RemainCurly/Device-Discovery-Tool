import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function ScanDevices(props) {

    const toggleFavorite = device => {
        props.toggleFavorite(device);
    }


    return (
        <div>
            <h1><center>This page is for scanning devices right now.</center></h1>
            <Row>
                <Col>
                    <div className='row m-3'>
                        <div className='col'>
                            <LinkContainer to="/">
                                <Button size="lg" target="_blank" variant="primary">Home Page</Button>
                            </LinkContainer>
                        </div>
                    </div>
                </Col>
                <Col>
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    )
}
export default ScanDevices;