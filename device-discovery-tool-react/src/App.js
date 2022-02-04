import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from './components/Header';
import auth from './components/auth'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/auth" component={auth}/>
        </Container>
      </main>
    </Router>    
  );
}

export default App;
