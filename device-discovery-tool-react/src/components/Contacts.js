import React from 'react';
import { Form, Table } from 'react-bootstrap';

function Contacts(props) {

    const toggleFavorite = device => {
        props.toggleFavorite(device);
    }

    return (
        <div>
            <h1><center>Contacts</center></h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                {/* Only show contacts that exist in the DB */}
                { props.contacts && props.contacts.map( contact => {
                    return (
                        <tbody key={contact.id}>
                                <tr>
                                    <td><Form.Check onClick={() => toggleFavorite(contact)} /></td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phoneNum}</td>
                                </tr>
                        </tbody>
                    )
                })}
            </Table>
        </div>
    )
}

export default Contacts;