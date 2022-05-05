import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class UpDownAlert extends React.Component {
    _isMounted = false;

    state = {
        Devices: [],
        prevDevices: [],
        numDownDevices: 0,
    }

    constructor() {
        super();
    }

    componentDidMount() {
        this._isMounted = true;
        this.axiosFunc();
    }

    componentDidUpdate() {
        if (JSON.stringify(this.state.Devices) !== JSON.stringify(this.state.prevDevices)) {
            let counter = 0;
            this.state.Devices.map(device => {
                if(device.status === false)
                    counter++;
            });
            this.setState({ numDownDevices: counter, prevDevices: this.state.Devices });
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    axiosFunc() {
        axios.get(`http://127.0.0.1:8000/network/devices/`)
            .then(res => {
                const Devices = res.data;
                this.setState({ Devices });
            })
    }

    render() {
        return (
            <div>
                {(this.state.numDownDevices > 0) ?
                    <div className='downDevices'>
                        <Link className={'link'} to={'/down'}>
                            <h2><center>{this.state.numDownDevices} device(s) down!</center></h2>
                        </Link>
                    </div>
                    : //No devices down
                    <div className='upDevices'>
                        <h2><center>All Devices are Currently Running.</center></h2>
                    </div>
                }
            </div>
        )
    }
}