import React from 'react';
import { Table, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
import { toast } from 'wc-toast'


export default class Contacts extends React.Component {
    _isMounted = false;

    state = {
        Contacts: [],
        prevContacts: []
    }


    handleSuccessToast = () => {
        toast.success('Contact Successfully Deleted');
    };

    handleErrorToast = () => {
        toast.error('Error Deleting Contact');
    };

    handleContactErrorToast = () => {
        toast.loading('Error Retreiving Contacts', { duration: 15000 });
    };


    componentDidMount() {
        this._isMounted = true;
        this.retrieveContacts()
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    componentDidUpdate(){
        if(JSON.stringify(this.state.Contacts) !== JSON.stringify(this.state.prevContacts)){
            this.retrieveContacts();
            this.setState({prevContacts: this.state.Contacts});
        }
    }


    retrieveContacts() {
        axios.get(`http://127.0.0.1:8000/network/contacts/`)
            .then(res => {
                const Contacts = res.data;
                this.setState({ Contacts });
            })
            .catch(err =>{
                this.handleContactErrorToast()
            })
    }

    //TODO: Figure out backend issues so POST/DELETE can happen
    editContact(contact) {
        console.log('Editing contact! ID: ' + contact);
    }

    async deleteContact(contact) {
        console.log('Deleting contact! ID: ' + contact);
        
        await axios.delete(`http://127.0.0.1:8000/network/contacts/${contact}`)
        .then(res => {
            this.retrieveContacts()
            this.handleSuccessToast()
        })
        .catch(err => {
            this.handleErrorToast()
        })
    }

    render() {
        return (
            
            <div>
                <wc-toast></wc-toast>
                <Row>
                    <Col></Col>
                    <Col>
                        <h1><center>Contacts</center></h1>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Favorite</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Notes</th>
                                    <th>Modify</th>
                                </tr>
                            </thead>
                            {/* Only show contacts that exist in the DB */}
                            {this.state.Contacts && this.state.Contacts.map(contact => {
                                return (
                                    <tbody key={contact.id}>
                                        <tr>
                                            {contact.favorite === true ?
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                                    </div>
                                                </td>
                                                :
                                                <td>
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled />
                                                    </div>
                                                </td>
                                            }
                                            <td>{contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.phone}</td>
                                            <td>{contact.notes}</td>
                                            <td><Button variant="info" onClick={() => this.editContact(contact.id)}>Edit</Button>
                                                <Button variant="danger" onClick={() => this.deleteContact(contact.id)}>Delete</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </Table>
                    </Col>
                    <Col>
                        <div className="buttonPadding">
                            <LinkContainer to="/addcontact">
                                <Button className="individualButtonPadding" size="lg" variant="primary">Add New Contact</Button>
                            </LinkContainer>
                            <br />
                            <LinkContainer to="/">
                                <Button size="lg" target="_blank" variant="primary">Home Page</Button>
                            </LinkContainer>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
        )
    }
}