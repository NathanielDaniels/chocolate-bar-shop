import Home from "./pages/Home";
import JoinForm from "./pages/JoinForm";
import Profile from "./pages/Profile";
import ChocoShop from "./pages/ChocoShop";
import SignIn from "./pages/SignInForm";
import Cart from "./pages/CartPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { useAuthListener } from './hooks'
import * as ROUTES from "./constants/routes";

function App() {
  // * Get user from useAuthListener
  // const { user, demo } = useAuthListener();

  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home}>
          <Home />
        </Route>
        <Route path={ROUTES.JOIN_IN} component={JoinForm}>
          <JoinForm />
        </Route>
        <Route path={ROUTES.SIGN_IN} component={SignIn}>
          <SignIn
          // demo={demo}
          />
        </Route>
        <Route path={ROUTES.CHOCOSHOP} component={ChocoShop}>
          <ChocoShop
          // user={user}
          />
        </Route>
        <Route path={ROUTES.PROFILE} component={Profile}>
          {/* <Profile
          // user={user}
          /> */}
        </Route>
        <Route path={ROUTES.CART} component={Cart}>
          <Cart
          // user={user}
          />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
