import React from 'react';
import { Button } from 'react-bootstrap';
import { Form, Table } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import "../App.css"

function FavoriteContacts(props) {

    const toggleFavorite = contact => {
        props.toggleFavorite(contact);
    }

    return (
        <div>
            <h1><center>Favorite Contacts</center></h1>
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
                {/* Only show contacts that exist in the DB */}
                { props.contacts && props.contacts.map( contact => {
                    return (
                        <tbody key={contact.id}>
                            {/* Only show a contact if it's favorited */}
                            { (contact.favorite == true) ? 
                                <tr>
                                    <td><Form.Check defaultChecked='checked' onClick={() => toggleFavorite(contact)} /></td>
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

            <div className='allContactsButton'>
              <div className='btn btn-primaryl'>
                <LinkContainer to="/contacts">
                    <Button size="lg" target="_blank" variant="primary">See All Contacts</Button>
                </LinkContainer>
              </div>
            </div>
        </div>
    )
}

export default FavoriteContacts;