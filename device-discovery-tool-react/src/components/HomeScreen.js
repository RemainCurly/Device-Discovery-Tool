import React from 'react'
import "../App.css"
import FavoriteContacts from './FavoriteContacts'
import FavoriteDevices from './FavoriteDevices'
import UpDownAlert from './UpDown'

function HomeScreen() {
    return (
        <div className="main">
            <h1>MAIN PAGE (INDEX PAGE?)</h1>
            <UpDownAlert />
        </div>
    )
}

export default HomeScreen
