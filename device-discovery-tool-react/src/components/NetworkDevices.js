import React from "react";
import { Form, Table } from 'react-bootstrap';

function NetworkDevices(props) {

    const toggleFavorite = device => {
        props.toggleFavorite(device);
    }

    return (
        <div className="main">
            <h1><center>Network Devices</center></h1>
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
                    { props.devices && props.devices.map( device => {
                        return (
                            <tbody key={device.id}>
                                <tr>
                                    {/* TODO: Autocheck boxes based on value of device.favorite */}
                                    <td><Form.Check onClick={() => toggleFavorite(device)} /></td>
                                    <td>{device.name}</td>
                                    <td>{device.ip}</td>
                                    <td>{device.mac}</td>
                                    <td>{device.description}</td>
                                    { device.isUp === true?
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
    )
}

export default NetworkDevices;