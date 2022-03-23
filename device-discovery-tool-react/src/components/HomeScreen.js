import React from 'react'
import "../App.css"
import { Row, Col } from 'react-bootstrap';
//These are both for testing purposes
import deviceTester from "../DevicesList"
import contactTester from "../ContactsList"
//Below are all components that must be imported to the homescreen
import FavoriteContacts from './FavoriteContacts'
import FavoriteDevices from './FavoriteDevices'
import UpDownAlert from './UpDown'
import LeftHandButtons from './LeftHandButtons'
import axios from 'axios';




export default class HomeScreen extends React.Component {


    state = {
        OS: []
      }

    constructor(props){
        super()
        this.funcOne(props)
    }


    funcOne(props){
        var id = props.match.params.id
          axios.get(`http://127.0.0.1:8000/os/${id}/?format=json`)
            .then(res => {
              const OS = res.data;
              this.setState({ OS });
            })
        }      


    render() {
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

                            <h3>Scanned Network Device for OS Info</h3>
                            {
                                this.state.OS.map(OS => <h3>{OS.IP_Address}</h3>)
                            }
                            <hr></hr>
                            <h3>Detected OS of Device</h3>
                            {
                            this.state.OS
                                .map(OS => <h3> {OS.name}</h3>)
                            }
                            <hr></hr>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

