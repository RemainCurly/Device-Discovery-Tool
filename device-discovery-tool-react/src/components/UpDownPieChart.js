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

function randomGreenColor(modifier) {
    return `hsl(114, 80%, 27%)`;
}

function randomRedColor(modifier) {
    return `hsl(0, 100%, 47%)`;
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
            retrievedLabels.push(`(${retrievedData[retrievedData.length - 1]}) ${deviceTypes[i]}`);
        }
    }

    for(let i = deviceTypes.length; i >= 0; i--)
    {
        if(wasDeviceFound(props, deviceTypes[i], false) === true)
        {
            retrievedData.push(deviceRetriever(props, deviceTypes[i], false).length);
            retrievedColors.push(randomRedColor(i+1));
            retrievedLabels.push(`(${retrievedData[retrievedData.length - 1]}) ${deviceTypes[i]} (Down)`);
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
                plugins: {
                    legend: {
                        labels: {
                            boxWidth: 0
                        }
                    }
                }
            }}/>
        </div>
    )
}

export default UpDownPieChart;