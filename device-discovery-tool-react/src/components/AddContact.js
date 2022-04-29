import React from 'react'
import { Form, Table } from 'react-bootstrap';
import "../App.css"
import {useState} from 'react';

import axios from 'axios';

function AddContact() {

    const [data,setData] = useState({
        favorite:"",
        cname: "",
        email:"",
        phone:"",
        notes:""
      })

    const {favorite, cname, email, phone, notes} = data;


    const changeHandler = e => {
        setData({...data,[e.target.name]:[e.target.value]});
      }

      
    const changeHandlerB = e => {
      let newVal = "0";
      var checkBox = document.getElementById("myCheck");
      if (checkBox.checked == true){
        newVal = "1";
      }
      setData({...data,[e.target.name]:[newVal]});
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(data);
        tryIt();

      async function tryIt()
      { 
          try {
            let result = await axios.post(          
              "http://127.0.0.1:8000/network/contacts",        
              {                                     
                data: data,
              }
            );
            console.log("Contact Added Successfully");
            alert("Contact Added Successfully!");
          } catch (error) {
            alert("Error has Occured!");
            console.error(error);     // NOTE - use "error.response.data` (not "error")
          }
      }
    }

    return (
        <div>
          <Form>
            <center>
            <h1>Add Contact Form</h1>
            <hr></hr>
            <form onSubmit={submitHandler}>
            <label for="favorite">Favorite: </label>
            <input type="checkbox" id="myCheck" name="favorite" value={favorite} onChange={changeHandlerB}/><br/>
            <br></br>
            <label for="cname">Name: </label>
            <input required type="text" name="cname" value={cname} onChange={changeHandler} placeholder="Input Full Name"/><br/>
            <br></br>
            <label for="email">Email: </label>
            <input required type="text" name="email" value={email} onChange={changeHandler} placeholder="Input Email" 
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"/><br/>
            <br></br>
            <label for="phone">Phone: </label>
            <input required type="text" name="phone" value={phone} onChange={changeHandler} placeholder="format: 123-456-789"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/><br/>
            <br></br>
            <label for="notes">Notes: </label>
            <input required type="text" name="notes" value={notes} onChange={changeHandler}/><br/>
            <br></br>
            <input required type="submit" name="submit"/>
            </form>
            </center>
            </Form>
        </div>
    )
}

export default AddContact
