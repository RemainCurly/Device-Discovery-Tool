import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

const deviceTypes = [
    'Endpoint', 'Server', 'Access-Points', 'IoT/Cameras', 'Firewalls',
    'Switches', 'Routers', 'Phones', 'Unknown'
]

function deviceRetriever(props, deviceType, isUp) {
    return props.devices.filter((device) => {
        if(device.deviceType === deviceType && device.isUp === isUp)
            return device;
    });
}

function wasDeviceFound(props, deviceType, isUp) {
    let found = false;
    for(let i = 0; i < props.devices.length; i++)
    {
        if(props.devices[i].deviceType === deviceType && props.devices[i].isUp === isUp)
            found = true;
    }
    return found;
}

//TODO: Figure out formula for calculating the colors
function randomGreenColor(modifier) {
    const lighten = 11 - modifier;
    const r = 0; const g = 255; const b = 0;
    let max = Math.max(Math.max(r, Math.max(g, b)), 1);
    let step = 255 / (max * 10);
    //return `rgba(${r}, ${g * step * lighten}, ${b}, ${modifier*.1})`;
    return `rgba(${r}, ${g}, ${b}, ${modifier*.1})`;
}

function randomRedColor(modifier) {
    const lighten = 11 - modifier;
    const r = 255; const g = 0; const b = 0;
    let max = Math.max(Math.max(r, Math.max(g, b)), 1);
    let step = 255 / (max * 10);
    return `rgba(${r}, ${g}, ${b}, ${modifier*.1})`;
}

function UpDownPieChart(props) {

    ChartJS.register(ArcElement, Tooltip, Legend);
    let retrievedData = [];
    let retrievedColors = [];
    let retrievedLabels = [];

    for(let i = 0; i < deviceTypes.length; i++)
    {
        if(wasDeviceFound(props, deviceTypes[i], true) === true)
        {
            retrievedData.push(deviceRetriever(props, deviceTypes[i], true).length);
            retrievedColors.push(randomGreenColor(i+1));
            retrievedLabels.push(deviceTypes[i]);
        }
    }

    for(let i = 0; i < deviceTypes.length; i++)
    {
        if(wasDeviceFound(props, deviceTypes[i], false) === true)
        {
            retrievedData.push(deviceRetriever(props, deviceTypes[i], false).length);
            retrievedColors.push(randomRedColor(i+1));
            retrievedLabels.push(`${deviceTypes[i]} (Down)`);
        }
    }

    const data = {
        labels: retrievedLabels,
        datasets: [
        {
            label: '# of Devices',
            data: retrievedData,
            backgroundColor: retrievedColors,
            borderColor: '#000000',
            borderWidth: 1,
        }]
    };

    return (
        <div className="canvas">
            <Pie data={data} options={{
                responsive: true,
                maintainAspectRatio: false,
            }}/>
        </div>
    )
}

export default UpDownPieChart;