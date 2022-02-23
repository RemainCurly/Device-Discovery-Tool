import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './components/HomeScreen'
import auth from './components/auth'
import DownDevices from './components/DownDevices'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Switch>
          <Route path='/' component={HomeScreen} exact />
          <Route path="/auth" component={auth}/>
          <Route path="/down" component={DownDevices}/>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;