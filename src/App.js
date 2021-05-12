import React, { useState } from 'react'
import { auth } from './firebase.js';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from './Header.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import Home from './Home.js';

function App() {
  const [user, setUser] = useState([]);

  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      setUser(authUser)
    } else {
      setUser(false);
    }
  })

  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/sign-in">
              <Header/>
              <SignIn/>
            </Route>

            <Route path="/register">
              <Header/>
              <SignUp/>
            </Route>

            <Route path="/">
              <Header/>
              <Home user={user}/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
