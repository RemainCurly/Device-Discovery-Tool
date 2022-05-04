import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";
import HomeScreen from './components/HomeScreen'
import NetworkDevices from './components/NetworkDevices'
import DownDevices from './components/DownDevices'
import Contacts from './components/Contacts'
import ScanDevicesScheduled from './components/ScanDevicesScheduled'
import DeviceUtility from './components/DeviceUtility'
import ScanDevices from './components/ScanDevices'

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route component={Login} path="/login" />
            <PrivateRoute component={HomeScreen} path="/" exact/>
            <PrivateRoute path="/os/:id" component={HomeScreen}/>
            <PrivateRoute path="/network" component={NetworkDevices} />
            <PrivateRoute path="/down" component={DownDevices} />
            <PrivateRoute path="/contacts" component={Contacts} />
            <PrivateRoute path="/scanSchedule" component={ScanDevicesScheduled} />
            <PrivateRoute path="/deviceUtility" component={DeviceUtility} />
            <PrivateRoute path="/scanNow" component={ScanDevices} />
          </Switch>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;