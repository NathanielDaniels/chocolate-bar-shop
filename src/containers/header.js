import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from '../components';

export function HeaderContainer() {
  return (
    <Header>
      <Header.Menu>
        <Header.MenuList>
          <Header.MenuListItem>
            <NavLink 
              exact to="/"
              activeClassName="active"
            >
              Mission
            </NavLink>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <NavLink 
              to="/Join"
              activeClassName="active"
            >
              Join In
            </NavLink>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <NavLink 
              to="/ChocoShop"
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