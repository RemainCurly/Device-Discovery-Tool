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
                        Num of impacted Devices Chart HERE (Row 1 of this Col)
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default HomeScreen;
