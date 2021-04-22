import React from 'react';
import { Header } from '../components'

export function HeaderContainer() {
  return (
    <Header>
      <Header.Menu>
        <Header.MenuList>
          <li>
            <a className="active" href="#OurMission">Our Mission</a>
          </li>
          <li>
            <a href="#Join">Join In</a>
          </li>
          <li>
            <a href="#Shop">Chocoshop</a>
          </li>
        </Header.MenuList>
      </Header.Menu>
    </Header>
  )
}