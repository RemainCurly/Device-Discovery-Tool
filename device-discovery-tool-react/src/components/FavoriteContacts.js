import React from 'react';
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import "../App.css"
import axios from 'axios';

export default class FavoriteContacts extends React.Component{
    _isMounted = false;

    state = {
        Contacts: []
      }

    componentDidMount() {
        this._isMounted = true;
        this.funcOne()
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    funcOne(){
          axios.get(`http://127.0.0.1:8000/network/contacts/`)
            .then(res => {
              const Contacts = res.data;
              this.setState({ Contacts });
            })
        }      


    render() {
        return (
            <div> 
                <h1><center>Favorite Contacts</center></h1>
                <div className='scroll'>
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
                    { this.state.Contacts && this.state.Contacts.map( contact => {
                        return (
                            <tbody key={contact.id}>
                                {/* Only show a contact if it's favorited */}
                                { (contact.favorite === true) ? 
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
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDisabled" disabled/>
                                                </div>
                                            </td> 
                                        }
                                        <td>{contact.name}</td>
                                        <td>{contact.email}</td>
                                        <td>{contact.phone}</td>
                                        <td>{contact.notes}</td>
                                    </tr>
                                : null }
                            </tbody>
                        )
                    })}
                </Table>
                </div>

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
}