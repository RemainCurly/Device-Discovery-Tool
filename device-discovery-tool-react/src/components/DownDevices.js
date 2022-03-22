import React from 'react';
import { Form, Row, Table, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function DownDevices(props) {


    return (
        <div>
            <h1><center>Down Devices</center></h1>
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
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Device Name</th>
                                <th>IP Address</th>
                                <th>MAC Address</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        {/* Only show devices that exist in the DB */}
                        {props.devices && props.devices.map(device => {
                            return (
                                <tbody key={device.id}>
                                    {/* Only show a device if it's down*/}
                                    {(device.isUp == false) ?
                                        <tr>
                                            <td>{device.name}</td>
                                            <td>{device.ip}</td>
                                            <td>{device.mac}</td>
                                            <td>{device.description}</td>
                                            <td>{device.isUp}</td>
                                            <td>{device.location}</td>
                                        </tr>
                                        : null}
                                </tbody>
                            )
                        })}
                    </Table>
                </Col>
                <Col></Col>
            </Row>
        </div>
    )
}

export default DownDevices;