import React from 'react';
import { Form, Modal, Table, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
import { toast } from 'wc-toast'


export default class Contacts extends React.Component {
    _isMounted = false;

    state = {
        Contacts: [],
        prevContacts: [],
        contactBeingEdited: {
            id: 0,
            favorite: false,
            name: "",
            email: "",
            phone: "",
            notes: ""
        },
        modalShow: false
    }

    handleModalShow = () => this.setState({ modalShow: true });
    handleModalClose = () => this.setState({ modalShow: false });

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

    componentDidUpdate() {
        if (JSON.stringify(this.state.Contacts) !== JSON.stringify(this.state.prevContacts)) {
            this.retrieveContacts();
            this.setState({ prevContacts: this.state.Contacts });
        }
    }

    retrieveContacts() {
        axios.get(`http://127.0.0.1:8000/network/contacts/`)
            .then(res => {
                const Contacts = res.data;
                this.setState({ Contacts });
            })
            .catch(err => {
                this.handleContactErrorToast()
            })
    }

    findContactByID(id) {
        this.state.Contacts.filter(contact => {
            if (contact.id === id) {
                this.setState({ contactBeingEdited: contact });
            }
        });
    }

    triggerEdit(id) {
        this.findContactByID(id);
        this.setState({ modalShow: true });
    }

    //TODO: Fix toast messages not appearing upon edit
    async editContact(contact) {
        await axios.put(`http://127.0.0.1:8000/network/contacts/${contact}/`, this.state.contactBeingEdited)
            .then(res => {
                this.retrieveContacts();
                toast.success("Contact Successfully Updated");
            })
            .catch(() => {
                this.handleErrorToast();
            })
    }

    async deleteContact(contact) {
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
                <Modal show={this.state.modalShow} onHide={this.handleModalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Contact</Modal.Title>
                    </Modal.Header>
                    <Form onSubmit={() => {
                        this.editContact(this.state.contactBeingEdited.id);
                        this.handleModalClose();
                    }}>
                        <Modal.Body>
                            <Form.Group className="mb-3">
                                {/* TODO: Make it so Favorite can be changed onSubmit */}
                                {(this.state.contactBeingEdited.favorite) ?
                                    <Form.Check type="checkbox" inline defaultChecked label={'Favorite'}
                                        onChange={e => {
                                            this.setState({ contactBeingEdited: { ...this.state.contactBeingEdited, favorite: false } });
                                        }} />
                                    :
                                    <Form.Check inline label={'Favorite'}
                                        onChange={e => {
                                            this.setState({ contactBeingEdited: { ...this.state.contactBeingEdited, favorite: true } });
                                        }} />
                                }
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                {/* TODO: Find out why autoFocus isn't focusing */}
                                <Form.Control autoFocus type="text" required placeholder="FirstName LastName" defaultValue={this.state.contactBeingEdited.name} onChange={e => {
                                    this.setState({ contactBeingEdited: { ...this.state.contactBeingEdited, name: e.target.value } });
                                }} />
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" required placeholder="Format: example@email.com" defaultValue={this.state.contactBeingEdited.email} onChange={e => {
                                    this.setState({ contactBeingEdited: { ...this.state.contactBeingEdited, email: e.target.value } });
                                }} />
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="tel" required placeholder="Format: 111-111-1111" defaultValue={this.state.contactBeingEdited.phone} onChange={e => {
                                    this.setState({ contactBeingEdited: { ...this.state.contactBeingEdited, phone: e.target.value } });
                                }} />
                                <Form.Label>Notes</Form.Label>
                                <Form.Control as="textarea" rows="3" defaultValue={this.state.contactBeingEdited.notes} onChange={e => {
                                    this.setState({ contactBeingEdited: { ...this.state.contactBeingEdited, notes: e.target.value } });
                                }} />
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" type="submit">Submit</Button>
                            <Button variant="secondary" onClick={this.handleModalClose}>Close</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
                <wc-toast />
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
                                            <td><Button variant="info" onClick={() => this.triggerEdit(contact.id)}>Edit</Button>
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