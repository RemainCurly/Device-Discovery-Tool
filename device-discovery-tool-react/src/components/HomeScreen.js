import React from 'react'
import "../App.css"
import {Row, Col } from 'react-bootstrap';
//These are both for testing purposes
import deviceTester from "../DevicesList"
import contactTester from "../ContactsList"
//Below are all components that must be imported to the homescreen
import FavoriteContacts from './FavoriteContacts'
import FavoriteDevices from './FavoriteDevices'
import UpDownAlert from './UpDown'
import LeftHandButtons from './LeftHandButtons'

function HomeScreen() {

    return (
        <div className="main">
            <UpDownAlert devices={deviceTester} />
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
                        <p>Total number of discovered devices here (pie chart? up devices and down)</p>
                        <p>Also put device category in pie chart (<i>discoverable</i> operating system)</p>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default HomeScreen;
