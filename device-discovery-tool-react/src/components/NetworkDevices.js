import React from "react";
import { Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";

function NetworkDevices(props) {

    const toggleFavorite = device => {
        props.toggleFavorite(device);
    }

    return (
        <div className="main">
            <h1><center>Network Devices</center></h1>
            <div class="scrollable">
                <ReactBootStrap.Table striped bordered hover>
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
                    { props.devices && props.devices.map( device => {
                        return (
                            <tbody key={device.id}>
                                    <tr>
                                        <td><Form.Check onClick={() => toggleFavorite(device)} /></td>
                                        <td>{device.name}</td>
                                        <td>{device.ip}</td>
                                        <td>{device.mac}</td>
                                        <td>{device.description}</td>
                                        <td>{device.isUp}</td>
                                    </tr>
                            </tbody>
                        )
                    })}
            </ReactBootStrap.Table>
            </div>
        </div>
    )
}

export default NetworkDevices;