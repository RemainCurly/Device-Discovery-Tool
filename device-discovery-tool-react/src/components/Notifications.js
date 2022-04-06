import React, { Component } from "react"
import '../App.css'
import DownDevices from './DownDevices';


export default class Notifications extends Component {
    render() {
        return (
            <div className="auth-wrapper">
              <DownDevices/>
          </div>
        );
    }
}