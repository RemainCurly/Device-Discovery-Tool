import React from 'react'
import "../App.css"
import { Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';
//These are both for testing purposes
import { deviceTester, manyUpSomeDown, numberRatios, allUp } from "../DevicesList"
import contactTester from "../ContactsList"
//Below are all components that must be imported to the homescreen
import FavoriteContacts from './FavoriteContacts'
import FavoriteDevices from './FavoriteDevices'
import UpDownAlert from './UpDown'
import LeftHandButtons from './LeftHandButtons'
import UpDownPieChart from './UpDownPieChart';

const deviceTestList = numberRatios;

export default class HomeScreen extends React.Component  {

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
                <UpDownAlert devices={deviceTestList} />
                <Row>
                    <Col>
                        <LeftHandButtons />
                    </Col>
                    <Col>
                        <Row>
                            <FavoriteDevices devices={deviceTestList} />
                        </Row>
                        <Row>
                            <FavoriteContacts contacts={contactTester} />
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <UpDownPieChart devices={deviceTestList} />

                            <div className='scroll'>
                                <h3><center>Scanned Device OS</center></h3>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Device IP</th>
                                            <th>OS Detected</th>
                                        </tr>
                                    </thead>
                                    { this.state.OS && this.state.OS.map( OS => {
                                        return (
                                            <tbody key={OS.IP_Address}>
                                                        <td>{OS.IP_Address}</td>
                                                        <td>{OS.name}</td>
                                            </tbody>
                                        )
                                    })}
                                </Table>
                            </div>
                            <hr></hr>
                            <div className='scroll'>
                                <h3><center>Up Devices on Network</center></h3>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Device IP</th>
                                        </tr>
                                    </thead>
                                    { this.state.OS && this.state.OS.map( OS => {
                                        {/*hard coded, need help automating this, loop?*/}
                                        return (
                                            <tbody key={OS.pinged}>
                                                <div><center>
                                                        <tr>{OS.pinged}</tr>
                                                </center></div>
                                            </tbody>
                                        )
                                    })}
                                </Table>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

