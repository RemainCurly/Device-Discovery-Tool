import React from 'react';
import { Form, Table } from 'react-bootstrap';

function FavoriteContacts(props) {

    const toggleFavorite = contact => {
        props.toggleFavorite(contact);
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Favorite</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone #</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                { props.contacts && props.contacts.map( contact => {
                    return (
                        <tbody key={contact.id}>
                            { (contact.favorite == true) ? 
                                <tr>
                                    <td><Form.Check onClick={() => toggleFavorite(contact)} /></td>
                                    <td>{contact.name}</td>
                                    <td>{contact.email}</td>
                                    <td>{contact.phoneNum}</td>
                                    <td>{contact.notes}</td>
                                </tr>
                            : null }
                        </tbody>
                    )
                })}
            </Table>
        </div>
    )
}

export default FavoriteContacts;