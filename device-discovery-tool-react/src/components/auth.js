import React, { Component } from "react"
import logo from './logo.png'
import '../App.css'


export default class Auth extends Component {
    render() {
        return (
            <div className="auth-wrapper">
              <div className="auth-inner">
                <form>
                <div class="login-image">
                    <img src={logo} />
                </div>
                <h3>Sign In</h3>
                <div class="login-fields">
                    <label for="exampleInputEmail1">Email Address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <br></br>
                </div>
                <div class="login-fields">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div class="login-fields form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                </div>
                <div class="button">
                    <button type="submit" class="btn btn-primary">Log In</button>
                </div>
                </form>
            </div>
          </div>
        );
    }
}
