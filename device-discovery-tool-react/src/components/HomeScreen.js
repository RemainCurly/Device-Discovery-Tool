import React from 'react'
import "../App.css"
import deviceTester from "../DevicesList"
import contactTester from "../ContactsList"
//Below are all components that must be imported to the homescreen
import FavoriteContacts from './FavoriteContacts'
import FavoriteDevices from './FavoriteDevices'
import UpDownAlert from './UpDown'
import {Row, Col } from 'react-bootstrap';
import LeftHandButtons from './LeftHandButtons'

// Example JSON array usable for testing!
// export const tester = [
//Created individual tester files to import json data from

function HomeScreen() {

    return (
        <div className="main">
            <Row>
                <Col>
                    <LeftHandButtons />
                </Col>
                <Col>
                    <Row>
                        <FavoriteDevices devices={deviceTester} />
                    </Row>
                    <Row>
                        <FavoriteContacts contacts={contactTester} />
                    </Row>
                </Col>
                <Col>
                    <Row>
                        Num of impacted Devices Chart HERE (Row 1 of this Col)
                    </Row>
                    <Row>
                        <UpDownAlert devices={deviceTester} />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default HomeScreen;
