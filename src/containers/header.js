import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from '../components';
import * as ROUTES from '../constants/routes'

export function HeaderContainer() {
  return (
    <Header>
      <Header.Menu>
        <Header.MenuList>
          <Header.MenuListItem>
            <NavLink 
              // exact to="/"
              exact to={ROUTES.HOME}
              activeClassName="active"
            >
              Mission
            </NavLink>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <NavLink 
              // to="/Join"
              to={ROUTES.JOIN_IN}
              activeClassName="active"
            >
              Join In
            </NavLink>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <NavLink 
              // to="/ChocoShop"
              to={ROUTES.CHOCOSHOP}
              activeClassName="active"
            >
              Chocoshop
            </NavLink>
          </Header.MenuListItem>
        </Header.MenuList>
      </Header.Menu>
    </Header>
  )
}