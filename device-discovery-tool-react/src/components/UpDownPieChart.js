import React, { Component } from 'react';
import CanvasJSReact from '../canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function UpDownPieChart() {

    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Example chart!"
        },
        data: [{
            type: "column",
            dataPoints: [
                { label: "Me", y: 100 },
                { label: "You", y: 1 }
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