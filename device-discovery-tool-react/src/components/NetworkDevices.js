import React from "react";
import { Table } from 'react-bootstrap';


function NetworkDevices(props) {

    function NetworkDevices(props) {
        const toggleFavorite = device => {
            props.toggleFavorite(device);
        }
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
            <tbody>
                <tr>
                    <td> <input type="checkbox" /> </td>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                <tr>
                    <td> <input type="checkbox" /> </td>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
                <tr>
                    <td> <input type="checkbox" /> </td>
                    {Array.from({ length: 6 }).map((_, index) => (
                        <td key={index}>Table cell {index}</td>
                    ))}
                </tr>
        </tbody>
        </Table>
        </div>
    )
}

export default NetworkDevices;