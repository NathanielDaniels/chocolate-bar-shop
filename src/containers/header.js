import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from '../components';
import { Context } from "../context/Context";
import * as ROUTES from '../constants/routes';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';


export function HeaderContainer() {
const { cartItems } = useContext(Context);
// const cartClassName = cartItems.length > 0 ? <ShoppingCartIcon/> : <ShoppingCartOutlinedIcon/>

// console.log(cartItems)
// console.log(Context)

  const cartCounter = () => (
    cartItems.length > 0 && <span className="cartCounter">{cartItems.length}</span>
  )

  return (
    <Header>
      <Header.Menu>
        <Header.MenuList>
          <Header.MenuListItem>
            <NavLink 
              exact to={ROUTES.HOME}
              activeClassName="active"
            >
              Our Mission
            </NavLink>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <NavLink 
              to={ROUTES.JOIN_IN}
              activeClassName="active"
            >
              Join In
            </NavLink>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <NavLink 
              to={ROUTES.CHOCOSHOP}
              activeClassName="active"
            >
              Chocoshop
            </NavLink>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <NavLink 
              to={ROUTES.CART}
              // activeClassName="active"
            >
             <div className="cartInfo">
              {cartCounter()}
              {/* <ShoppingCartIcon /> */}
              {/* <i className={`${cartClassName} ri-fw ri-2x`}></i> */}
              {cartItems.length > 0 ? <ShoppingCartIcon /> : <ShoppingCartOutlinedIcon/>}
            </div>
            </NavLink>
          </Header.MenuListItem>
        </Header.MenuList>
      </Header.Menu>
    </Header>
  )
}