import React from 'react';
import { Row, Table, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios';
import {ip} from './ip'

export default class DownDevices extends React.Component{
    _isMounted = false;

    state = {
        Devices: []
      }

    componentDidMount() {
        this._isMounted = true;
        this.funcOne();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    funcOne(){
        axios.get(`http://` + ip+ `:8000/network/devices/`)
          .then(res => {
            const Devices = res.data;
            this.setState({ Devices });
          })
      }      

    render() {
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
                                    <th>Device Type</th>
                                </tr>
                            </thead>
                            {/* Only show devices that exist in the DB */}
                            {this.state.Devices && this.state.Devices.map(device => {
                                return (
                                    <tbody key={device.id}>
                                        {/* Only show a device if it's down*/}
                                        {(device.status === false) ?
                                            <tr>
                                                <td>{device.name}</td>
                                                <td>{device.ip_address}</td>
                                                <td>{device.mac_address}</td>
                                                <td>{device.description}</td>
                                                {device.status === true ?
                                                    <td className='table-success'>Up</td>
                                                    :
                                                    <td className='table-danger'>DOWN</td>
                                                }
                                                <td>{device.location}</td>
                                                <td>{device.device_type}</td>
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
}