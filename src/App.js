import React from 'react'
import Home from './pages/Home'
import JoinForm from './pages/JoinForm'
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
      </Switch>
    </Router>
  );
}

export default App;
