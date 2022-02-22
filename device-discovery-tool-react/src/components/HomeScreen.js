import React from 'react'
import "../App.css"
import FavoriteContacts from './FavoriteContacts'
import FavoriteDevices from './FavoriteDevices'
import UpDownAlert from './UpDown'

function HomeScreen() {

    //TODO: Make example JSON to load into UpDownAlert
    const tester = [
        {
            'Favorite': true,
            'Device Name': 'Example1',
            'IP Address': '123.123.98.455',
            'MAC Address': 'AA:AA:AA:bc:dc',
            'Description': '',
            'Status': true
        },
        {
            'Favorite': true,
            'Device Name': 'Example2',
            'IP Address': '123.123.98.455',
            'MAC Address': 'AA:AA:AA:bc:dc',
            'Description': 'poop',
            'Status': false
        }
    ];

    return (
        <div className="main">
            <h1>MAIN PAGE (INDEX PAGE?)</h1>
            <UpDownAlert devices={JSON.stringify(tester)} />
        </div>
    )
}

export default HomeScreen
