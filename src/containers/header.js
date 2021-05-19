import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export function HeaderContainer() {
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
              <ShoppingCartIcon />
            </NavLink>
          </Header.MenuListItem>
        </Header.MenuList>
      </Header.Menu>
    </Header>
  )
}