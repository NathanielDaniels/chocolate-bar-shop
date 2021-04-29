import React from 'react'
import Home from './pages/Home'
import Join from './pages/Join'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Join">
          <Join />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
