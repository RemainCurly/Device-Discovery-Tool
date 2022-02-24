import React from 'react'
import "../App.css"
import FavoriteContacts from './FavoriteContacts'
import FavoriteDevices from './FavoriteDevices'
import UpDownAlert from './UpDown'

function HomeScreen() {

    //TODO: Make example JSON to load into UpDownAlert
    const tester = [
        {
            favorite: true,
            name: 'Example1',
            ip: '123.123.98.455',
            mac: 'AA:AA:AA:bc:dc',
            description: '',
            isUp: true,
            location: 'Office A'
        },
        {
            favorite: true,
            name: 'Example2',
            ip: '123.123.98.455',
            mac: 'AA:AA:AA:bc:dc',
            description: 'poop',
            isUp: false,
            location: 'Office B'
        }
    ];

    console.log(tester.map((testItem) => {
        if(testItem.isUp === false)
            return "DOWN DEVICE!"
        else
            return "Device is up"
    }).filter((item) => {
        console.log('Filter: ' + item);
    }));

    return (
        <div className="main">
            <h1>MAIN PAGE (INDEX PAGE?)</h1>
            <UpDownAlert devices={tester} />
        </div>
    )
}

export default HomeScreen
