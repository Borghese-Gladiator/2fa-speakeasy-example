import React, { useState } from 'react';
import PrivateRoute from './context/PrivateRoute';
import { AuthContext } from "./context/auth";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// custom components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Verify from './components/Verify';
import Validate from './components/Validate';

// /api => welcome
// /api/register
// /api/verify
// /api/validate

function App() {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <PrivateRoute path="/verify" component={Verify} />
            <PrivateRoute path="/validate" component={Validate} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;