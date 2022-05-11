import React from "react";
import { Row, Table, Col, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import axios from 'axios';

export default class NetworkDevices extends React.Component {
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
        axios.get(`http://127.0.0.1:8000/network/devices/`)
          .then(res => {
            const Devices = res.data;
            this.setState({ Devices });
          })
      }      



    render() {
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
                                    <th>Device Type</th>
                                </tr>
                            </thead>
                            {/* Only show devices that exist in the DB */}
                            {this.state.Devices && this.state.Devices.map(device => {
                                return (
                                    <tbody key={device.id}>
                                        <tr>
                                            {/* TODO: Autocheck boxes based on value of device.favorite */}
                                            {device.favorite === true ?
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                                    </div>
                                                </td> 
                                                :
                                                <td> 
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled/>
                                                    </div>
                                                </td> 
                                            }
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