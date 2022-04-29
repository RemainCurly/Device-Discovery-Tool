import React from 'react';
import { Form, Table, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';


export default class Contacts extends React.Component {

    state = {
        Contacts: []
    }

    constructor() {
        super()
        this.funcOne()
    }

    funcOne() {
        axios.get(`http://127.0.0.1:8000/network/contacts?format=json`)
            .then(res => {
                const Contacts = res.data;
                this.setState({ Contacts });
            })
    }


    render() {
        return (
            <div>
                <center>
                    <Col>
                        <Row className='sideChartPadding'>
                            <h1><center>Contacts</center></h1>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Favorite</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone Number</th>
                                        <th>Notes</th>
                                    </tr>
                                </thead>
                                {/* Only show contacts that exist in the DB */}
                                {this.state.Contacts.Contacts && this.state.Contacts.Contacts.map(contact => {
                                    return (
                                        <tbody key={contact.id}>
                                            <tr>
                                                {contact.favorite === true ?
                                                    <td>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                                        </div>
                                                    </td>
                                                    :
                                                    <td>
                                                        <div class="form-check">
                                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled />
                                                        </div>
                                                    </td>
                                                }
                                                <td>{contact.name}</td>
                                                <td>{contact.email}</td>
                                                <td>{contact.phone}</td>
                                                <td>{contact.notes}</td>
                                            </tr>
                                        </tbody>
                                    )
                                })}
                            </Table>
                        </Row>
                        <Row className="buttonPadding">
                            <Button className="individualButtonPadding" size="lg" variant="primary">Add New Contact</Button>
                            <Button className="individualButtonPadding" size="lg" variant="primary">Edit Contact</Button>
                            <Button className="individualButtonPadding" size="lg" variant="primary">Remove Contact</Button>
                            <LinkContainer to="/">
                                    <Button size="lg" target="_blank" variant="primary">Home Page</Button>
                            </LinkContainer>
                        </Row>
                    </Col>
                </center>
            </div>
        )
    }
}