import React from 'react'
import "../App.css"
import FavoriteContacts from './FavoriteContacts'
import FavoriteDevices from './FavoriteDevices'
import UpDownAlert from './UpDown'

function HomeScreen() {

    //TODO: Make example JSON to load into UpDownAlert
    
    return (
        <div className="main">
            <h1>MAIN PAGE (INDEX PAGE?)</h1>
            <UpDownAlert />
        </div>
    )
}

export default HomeScreen
