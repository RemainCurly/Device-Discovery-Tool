import React from 'react';
import { Form, Table } from 'react-bootstrap';

function DownDevices(props) {
    
    const toggleFavorite = device => {
        props.toggleFavorite(device);
    }

    return (
        <div>
           <h>Down Devices</h>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Favorite</th>
                        <th>Device Name</th>
                        <th>IP Address</th>
                        <th>MAC Address</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                {/* Only show devices that exist in the DB */}
                { props.devices && props.devices.map( device => {
                    return (
                        <tbody key={device.id}>
                            {/* Only show a device if it's favorited */}
                            { (device.favorite == true) ?
                                <tr>
                                    <td><Form.Check onClick={() => toggleFavorite(device)} /></td>
                                    <td>{device.name}</td>
                                    <td>{device.ip}</td>
                                    <td>{device.mac}</td>
                                    <td>{device.description}</td>
                                    <td>{device.isUp}</td>
                                </tr>
                            : null }
                        </tbody>
                    )
                })}
            </Table>
        </div>
    )
}

export default DownDevices;