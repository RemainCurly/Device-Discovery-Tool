import React from 'react'
import "../App.css"
//Below are all components that must be imported to the homescreen
import FavoriteContacts from './FavoriteContacts'
import FavoriteDevices from './FavoriteDevices'
import UpDownAlert from './UpDown'

// Example JSON array usable for testing!
export const tester = [
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
        isUp: true,
        location: 'Office B'
    },
    {
        favorite: true,
        name: 'Example3',
        ip: '123.123.98.455',
        mac: 'AA:AA:AA:bc:dc',
        description: 'poop',
        isUp: true,
        location: 'Office B'
    }
];

function HomeScreen() {

    return (
        <div className="main">
            <h1>MAIN PAGE (INDEX PAGE?)</h1>
            <UpDownAlert devices={tester} />
            <FavoriteDevices devices={tester} />
        </div>
    )
}

export default HomeScreen
