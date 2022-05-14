import React from 'react'
import "../App.css"
import { useState } from 'react';
import { toast } from 'wc-toast';
import axios from 'axios';
import { useHistory } from "react-router-dom";

function AddContact() {

  const [data, setData] = useState({
    favorite: false,
    name: "",
    email: "",
    phone: "",
    notes: ""
  })

  const history = useHistory();
  const { favorite, name, email, phone, notes } = data;

  const changeHandler = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  const handleSuccessToast = () => {
    toast.success("Contact added successfully");
  }

  const changeHandlerB = e => {
    let newVal = false;
    var checkBox = document.getElementById("myCheck");
    if (checkBox.checked === true) {
      newVal = true;
    }
    setData({ ...data, [e.target.name]: newVal });
  }

  const submitHandler = e => {
    e.preventDefault();
    console.log(data);
    tryIt();

    async function tryIt() {
      try {
        await axios.post(
          "http://127.0.0.1:8000/network/contacts/",
          data,
        );
        history.push("/contacts");
        handleSuccessToast();
      } catch (error) {
        alert("Error adding contact. Make sure email and phone number are entered.");
      }
    }
  }

  return (
    <div>
      <center>
        <h1>Add Contact Form</h1>
        <hr></hr>
        <form onSubmit={submitHandler}>
          <label htmlFor="favorite">Favorite: </label> <br />
          <input type="checkbox" id="myCheck" name="favorite" value={favorite} onChange={changeHandlerB} /><br />
          <br></br>
          <label htmlFor="name">Name: </label> <br />
          <input required type="text" name="name" value={name} onChange={changeHandler} placeholder="Input Full Name" /><br />
          <br></br>
          <label htmlFor="email">Email: </label> <br />
          <input type="text" name="email" value={email} onChange={changeHandler} placeholder="Input Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" /><br />
          <br></br>
          <label htmlFor="phone">Phone: </label> <br />
          <input type="text" name="phone" value={phone} onChange={changeHandler} placeholder="format: 123-456-7890"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}" /><br />
          <br></br>
          <label htmlFor="notes">Notes: </label> <br />
          <input type="text" name="notes" value={notes} onChange={changeHandler} /><br />
          <br></br>
          <input className="formButtonPadding" required type="submit" name="submit" />
          <input className="formButtonPadding" required type="button" name="cancel" value="Cancel" onClick={() => window.location.href = "/contacts"} />
        </form>
      </center>
    </div>
  )
}

export default AddContact
