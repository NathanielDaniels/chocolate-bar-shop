import React from 'react';
import Home from './pages/Home';
import JoinForm from './pages/JoinForm';
import ChocoShop from './pages/ChocoShop';
import SignIn from './pages/SignInForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuthListener } from './hooks'


function App() {
   // * Get user from useAuthListener
  const { user, demo } = useAuthListener();

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
          <SignIn demo={demo}/>
        </Route>
        <Route path="/ChocoShop/">
          <ChocoShop user={user}/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
