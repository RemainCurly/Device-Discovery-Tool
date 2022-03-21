import React from "react";
import { Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import deviceTester from "../DevicesList";

function NetworkDevices(props) {

    const toggleFavorite = device => {
        props.toggleFavorite(device);
    }

    var testList = deviceTester

    return (
        <div>
            <h1><center>Network Devices</center></h1>
            <div className="scroll">
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
                    {testList && testList.map(device => {
                        return (
                            <tbody key={device.id}>
                                <tr key={device.id}>
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
            </div>
        </div>
    )
}

export default NetworkDevices;