import React from 'react';
import CanvasJSReact from '../canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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

function UpDownPieChart(props) {

    // let upDevices = props.devices.map((device) => {
        
    //     let counter = 0;
        
    //     if(device.isUp === true)
    //         counter++;

    //     return counter;
    // }).reduce((a,b) => a + b, 0);
    
    // let downDevices = Object.keys(props.devices).length - upDevices;

    CanvasJS.addColorSet("redGreen",
        [
            "#33cc33", //Green
            "#ff0000"  //Red
        ]);

    let data = [
        // Up Device Types
        ...((wasDeviceFound(props, 'Endpoint') && deviceRetriever(props, 'Endpoint', true) != []) ?
            [{ y : deviceRetriever(props, 'Endpoint', true).length, label: 'Endpoint' }] : []),
        ...((wasDeviceFound(props, 'Server') && deviceRetriever(props, 'Server', true) != []) ?
            [{ y : deviceRetriever(props, 'Server', true).length, label: 'Server' }] : []),
        ...((wasDeviceFound(props, 'Access-Points') && deviceRetriever(props, 'Access-Points', true) != []) ?
            [{ y : deviceRetriever(props, 'Access-Points', true).length, label: 'Access-Points' }] : []),
        ...((wasDeviceFound(props, 'IoT/Cameras') && deviceRetriever(props, 'IoT/Cameras', true) != []) ?
            [{ y : deviceRetriever(props, 'IoT/Cameras', true).length, label: 'IoT/Cameras' }] : []),
        ...((wasDeviceFound(props, 'Firewalls') && deviceRetriever(props, 'Firewalls', true) != []) ?
            [{ y : deviceRetriever(props, 'Firewalls', true).length, label: 'Firewalls' }] : []),
        ...((wasDeviceFound(props, 'Switches') && deviceRetriever(props, 'Switches', true) != []) ?
            [{ y : deviceRetriever(props, 'Switches', true).length, label: 'Switches' }] : []),
        ...((wasDeviceFound(props, 'Routers') && deviceRetriever(props, 'Routers', true) != []) ?
            [{ y : deviceRetriever(props, 'Routers', true).length, label: 'Routers' }] : []),
        ...((wasDeviceFound(props, 'Phones') && deviceRetriever(props, 'Phones', true) != []) ?
            [{ y : deviceRetriever(props, 'Phones', true).length, label: 'Phones' }] : []),
        ...((wasDeviceFound(props, 'Unknown') && deviceRetriever(props, 'Unknown', true) != []) ?
            [{ y : deviceRetriever(props, 'Unknown', true).length, label: 'Unknown' }] : []),
        // Down Device Types
        ...((wasDeviceFound(props, 'Endpoint') && deviceRetriever(props, 'Endpoint', false) != []) ?
            [{ y : deviceRetriever(props, 'Endpoint', false).length, label: 'Endpoint' }] : []),
        ...((wasDeviceFound(props, 'Server') && deviceRetriever(props, 'Server', false) != []) ?
            [{ y : deviceRetriever(props, 'Server', false).length, label: 'Server' }] : []),
        ...((wasDeviceFound(props, 'Access-Points') && deviceRetriever(props, 'Access-Points', false) != []) ?
            [{ y : deviceRetriever(props, 'Access-Points', false).length, label: 'Access-Points' }] : []),
        ...((wasDeviceFound(props, 'IoT/Cameras') && deviceRetriever(props, 'IoT/Cameras', false) != []) ?
            [{ y : deviceRetriever(props, 'IoT/Cameras', false).length, label: 'IoT/Cameras' }] : []),
        ...((wasDeviceFound(props, 'Firewalls') && deviceRetriever(props, 'Firewalls', false) != []) ?
            [{ y : deviceRetriever(props, 'Firewalls', false).length, label: 'Firewalls' }] : []),
        ...((wasDeviceFound(props, 'Switches') && deviceRetriever(props, 'Switches', false) != []) ?
            [{ y : deviceRetriever(props, 'Switches', false).length, label: 'Switches' }] : []),
        ...((wasDeviceFound(props, 'Routers') && deviceRetriever(props, 'Routers', false) != []) ?
            [{ y : deviceRetriever(props, 'Routers', false).length, label: 'Routers' }] : []),
        ...((wasDeviceFound(props, 'Phones') && deviceRetriever(props, 'Phones', false) != []) ?
            [{ y : deviceRetriever(props, 'Phones', false).length, label: 'Phones' }] : []),
        ...((wasDeviceFound(props, 'Unknown') && deviceRetriever(props, 'Unknown', false) != []) ?
            [{ y : deviceRetriever(props, 'Unknown', false).length, label: 'Unknown' }] : [])
    ]

    const options = {
        //colorSet: "redGreen",
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Device Status"
        },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabelThickness: (data.length < 1) ? 0 : 1,
            indexLabel: "{label} - {y}",
            dataPoints: data
        }]
    }

    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    )
}

export default UpDownPieChart;