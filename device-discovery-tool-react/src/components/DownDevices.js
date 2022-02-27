import React from 'react';
import { Form, Table } from 'react-bootstrap';

function DownDevices(props) {
    

    return (
        <div>
           <h1><center>Down Devices</center></h1>
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
                { props.devices && props.devices.map( device => {
                    return (
                        <tbody key={device.id}>
                            {/* Only show a device if it's down*/}
                            { (device.isUp == false) ?
                                <tr>
                                    <td>{device.name}</td>
                                    <td>{device.ip}</td>
                                    <td>{device.mac}</td>
                                    <td>{device.description}</td>
                                    <td>{device.isUp}</td>
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

export default DownDevices;