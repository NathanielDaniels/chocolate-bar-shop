import React from 'react';
import Home from './pages/Home';
import JoinForm from './pages/JoinForm';
import ChocoShop from './pages/ChocoShop';
import SignIn from './pages/SignInForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Join">
          <JoinForm />
        </Route>
        <Route path="/SignIn">
          <SignIn />
        </Route>
        <Route path="/ChocoShop">
          <ChocoShop />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
