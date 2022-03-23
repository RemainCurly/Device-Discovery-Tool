import React from 'react';
import CanvasJSReact from '../canvasjs.react';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function UpDownPieChart(props) {

    let upDevices = props.devices.map((device) => {
        
        let counter = 0;
        
        if(device.isUp === true)
            counter++;

        return counter;
    }).reduce((a,b) => a + b, 0);
    
    let downDevices = Object.keys(props.devices).length - upDevices;

    CanvasJS.addColorSet("redGreen",
        [
            "#33cc33", //Green
            "#ff0000"  //Red
        ]);

    const options = {
        colorSet: "redGreen",
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
            indexLabel: "{label} - {y}",
            dataPoints: [
                { label: "Up Devices", y: upDevices },
                { label: "Down Devices", y: downDevices }
            ]
        }]
    }
    
    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    )
}

export default UpDownPieChart;