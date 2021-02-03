import React from 'react';
import PrivateRoute from './components/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// custom components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Register from './components/Register';
import Verify from './components/Verify';
import Validate from './components/Validate';

// /api => welcome
// /api/register
// /api/verify
// /api/validate

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/verify" component={Verify} />
          <PrivateRoute path="/validate" component={Validate} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;