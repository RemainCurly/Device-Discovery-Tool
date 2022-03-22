import React from "react";
import { Form, Row, Table, Col, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function NetworkDevices(props) {

    const toggleFavorite = device => {
        props.toggleFavorite(device);
    }

    return (
        <div>
            <h1><center>Network Devices</center></h1>
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
                                <th>Favorite</th>
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
                                    <tr>
                                        {/* TODO: Autocheck boxes based on value of device.favorite */}
                                        <td><Form.Check onClick={() => toggleFavorite(device)} /></td>
                                        <td>{device.name}</td>
                                        <td>{device.ip}</td>
                                        <td>{device.mac}</td>
                                        <td>{device.description}</td>
                                        {device.isUp === true ?
                                            <td className='table-success'>Up</td>
                                            :
                                            <td className='table-danger'>DOWN</td>
                                        }
                                        <td>{device.location}</td>
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

export default NetworkDevices;