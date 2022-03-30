import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function deviceRetriever(props, deviceType, isUp) {
    return props.devices.filter((device) => {
        if(device.deviceType === deviceType && device.isUp === isUp)
            return device;
    });
}

function wasDeviceFound(props, deviceType) {
    return props.devices.filter((device) => {
        return device.deviceType === deviceType;
    }).length > 0;
}

function randomGreenColor() {
    const max = 200;
    const min = 100;
    let green = Math.floor(Math.random() * (max - min + 1)) + min;
    return `rgba(0, ${green}, 0, 0.2)`;
}

function randomRedColor() {
    const max = 200;
    const min = 100;
    let red = Math.floor(Math.random() * (max - min + 1)) + min;
    return `rgba(${red}, 0, 0, 0.2)`;
}

function UpDownPieChart(props) {

    // let upDevices = props.devices.map((device) => {
    //     let counter = 0;
    //     if(device.isUp === true)
    //         counter++;
    //     return counter;
    // }).reduce((a,b) => a + b, 0);
    // let downDevices = Object.keys(props.devices).length - upDevices;

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: ['Endpoint', 'Server', 'Access-Points', 'IoT/Cameras', 'Firewalls', 'Switches', 'Routers', 'Phones', 'Unknown'],
        options: {
            responsive: false,
        },
        datasets: [
        {
            label: '# of Devices',
            data: [ 
                deviceRetriever(props, 'Endpoint', true).length,
                deviceRetriever(props, 'Server', true).length,
                deviceRetriever(props, 'Access-Points', true).length,
                deviceRetriever(props, 'IoT/Cameras', true).length,
                deviceRetriever(props, 'Firewalls', true).length,
                deviceRetriever(props, 'Switches', true).length,
                deviceRetriever(props, 'Routers', true).length,
                deviceRetriever(props, 'Phones', true).length,
                deviceRetriever(props, 'Unknown', true).length,
                deviceRetriever(props, 'Endpoint', false).length,
                deviceRetriever(props, 'Server', false).length,
                deviceRetriever(props, 'Access-Points', false).length,
                deviceRetriever(props, 'IoT/Cameras', false).length,
                deviceRetriever(props, 'Firewalls', false).length,
                deviceRetriever(props, 'Switches', false).length,
                deviceRetriever(props, 'Routers', false).length,
                deviceRetriever(props, 'Phones', false).length,
                deviceRetriever(props, 'Unknown', false).length
            ],
            backgroundColor: [
                randomGreenColor(),
                randomGreenColor(),
                randomGreenColor(),
                randomGreenColor(),
                randomGreenColor(),
                randomGreenColor(),
                randomGreenColor(),
                randomGreenColor(),
                randomGreenColor(),
                randomRedColor(),
                randomRedColor(),
                randomRedColor(),
                randomRedColor(),
                randomRedColor(),
                randomRedColor(),
                randomRedColor(),
                randomRedColor(),
                randomRedColor()
            ]
        }]
    };

    return (
        <div>
            <Pie data={data} options={{
                responsive: false,
                maintainAspectRatio: false,
            }}/>
        </div>
    )
}

export default UpDownPieChart;