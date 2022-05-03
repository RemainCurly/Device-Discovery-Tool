import React from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

export default class FavoriteDevices extends React.Component{
    _isMounted = false;

    state = {
        Devices: []
      }

    constructor(){
        super();
    }

    componentDidMount() {
        this._isMounted = true;
        this.funcOne()
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    funcOne(){
        axios.get(`http://127.0.0.1:8000/network/devices?format=json`)
          .then(res => {
            const Devices = res.data;
            this.setState({ Devices });
          })
    }      

    render() {
        return (
            <div>
                <h1><center>Favorite Devices</center></h1>
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
                            <th>Device Type</th>
                        </tr>
                    </thead>
                    {/* Only show devices that exist in the DB */}
                    { this.state.Devices.Devices && this.state.Devices.Devices.map( device => {
                        return (
                            <tbody key={device.id}>
                                {/* Only show a device if it's favorited */}
                                { (device.favorite == true) ?
                                    <tr key={device.id}>
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
                                : null }
                            </tbody>
                        )
                    })}
                </Table>
                </div>
            </div>
        )
    }
}