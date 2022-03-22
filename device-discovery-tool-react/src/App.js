import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './components/HomeScreen'
import auth from './components/auth'
import NetworkDevices from './components/NetworkDevices'
import DownDevices from './components/DownDevices'
import Contacts from './components/Contacts'
import ScanDevicesScheduled from './components/ScanDevicesScheduled'
import DeviceUtility from './components/DeviceUtility'
import ScanDevices from './components/ScanDevices'
import { tester } from './components/HomeScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Switch>
          <Route path='/' component={HomeScreen} exact />
          <Route path="/auth" component={auth}/>
          <Route path="/network" component={NetworkDevices}/>
          <Route path="/down" component={DownDevices}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/scanSchedule" component={ScanDevicesScheduled}/>
          <Route path="/deviceUtility" component={DeviceUtility}/>
          <Route path="/scanNow" component={ScanDevices}/>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;