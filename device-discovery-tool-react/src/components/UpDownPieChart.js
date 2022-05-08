import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import {ip} from './ip'

const deviceTypes = [
    'Endpoint', 'Server', 'Access-Points', 'IoT/Cameras', 'Firewalls',
    'Switches', 'Routers', 'Phones', 'Unknown'
]

export default class UpDownPieChart extends React.Component {
    _isMounted = false;

    state = {
        Devices: [],
        prevDevices: [],
        numDownDevices: 0,
        numUpDevices: 0,
    }

    retrievedData = [];
    retrievedColors = [];
    retrievedLabels = [];

    constructor() {
        super();
        ChartJS.register(ArcElement, Tooltip, Legend);
    }

    deviceRetriever(deviceType, isUp) {
        return this.state.Devices.filter(device => {
            if(device.device_type === deviceType && device.status === isUp)
                return device;
        }).length;
    }

    wasDeviceFound(deviceType, isUp) {
        let found = false;
        this.state.Devices.map(device => {
            if (device.device_type === deviceType && device.status === isUp)
                found = true;
        });
        return found;
    }

    componentDidMount() {
        this._isMounted = true;
        this.axiosFunc();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidUpdate() {
        if (JSON.stringify(this.state.Devices) !== JSON.stringify(this.state.prevDevices)) {
            
            for(let i = 0; i < deviceTypes.length; i++)
            {
                if(this.wasDeviceFound(deviceTypes[i], true))
                {
                    this.retrievedData.push(this.deviceRetriever(deviceTypes[i], true));
                    this.retrievedColors.push("hsl(114, 80%, 27%");
                    this.retrievedLabels.push(`(${this.retrievedData[this.retrievedData.length - 1]}) ${deviceTypes[i]}`);
                }
            }

            for(let i = deviceTypes.length; i >= 0; i--)
            {
                if(this.wasDeviceFound(deviceTypes[i], false))
                {
                    this.retrievedData.push(this.deviceRetriever(deviceTypes[i], false));
                    this.retrievedColors.push("hsl(0, 100%, 47%");
                    this.retrievedLabels.push(`(${this.retrievedData[this.retrievedData.length - 1]}) ${deviceTypes[i]} (Down)`);
                }
            }

            this.setState({ prevDevices: this.state.Devices });
        }
    }

    axiosFunc() {
        axios.get(`http://` + ip+ `:8000/network/devices/`)
            .then(res => {
                const Devices = res.data;
                this.setState({ Devices });
            })
    }

    data = {
        labels: this.retrievedLabels,
        datasets: [
        {
            label: '# of Devices',
            data: this.retrievedData,
            backgroundColor: this.retrievedColors,
            borderColor: '#000000',
            borderWidth: 1
        }]
    };

    render() {
        return (
            <div className="canvas">
                <Pie data={this.data} options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                boxWidth: 0
                            }
                        }
                    }
                }} />
            </div>
        )
    }
}