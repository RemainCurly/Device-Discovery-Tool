import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function ScanDevicesScheduled(props) {

    const toggleFavorite = device => {
        props.toggleFavorite(device);
    }


    return (
        <div>
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
                    <h1>This page is for scheduling scans</h1>
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    )
}
export default ScanDevicesScheduled;