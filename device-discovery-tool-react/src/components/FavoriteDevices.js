import React from 'react';
import { Form, Table } from 'react-bootstrap';

function FavoriteDevices(props) {
    
    const toggleFavorite = device => {
        props.toggleFavorite(device);
    }

    return (
        <div>
            <h1><center>Favorite Devices</center></h1>
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
                            {/* Only show a device if it's favorited */}
                            { (device.favorite == true) ?
                                <tr key={device.id}>
                                    <td><Form.Check defaultChecked='checked' onClick={() => toggleFavorite(device)} /></td>
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
                            : null }
                        </tbody>
                    )
                })}
            </Table>
        </div>
    )
}

export default FavoriteDevices;