import React from 'react';
import { Button } from 'react-bootstrap';
import '../App.css';
import { Row, Col } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { Table } from 'react-bootstrap';

function DeviceUtility(props) {

    return (
        <div>
            <h1><center>Device Utilities</center></h1>
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
                                    <th>Device Type</th>
                                    <th>CPU</th>
                                    <th>RAM</th>
                                    <th>Disk</th>
                                    <th>Network</th>
                                    <th>MAC Address</th>
                                </tr>
                            </thead>
                            {/* Only show devices that exist in the DB */}
                            {props.devices && props.devices.map(device => {
                                return (
                                    <tbody key={device.id}>
                                            <tr>
                                                <td>{device.name}</td>
                                                <td>{device.type}</td>
                                                <td>{device.cpu}</td>
                                                <td>{device.ram}</td>
                                                <td>{device.disk}</td>
                                                <td>{device.network}</td>
                                                <td>{device.mac}</td>
                                            </tr>
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
export default DeviceUtility;