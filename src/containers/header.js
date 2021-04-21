import React from 'react';
import { Header } from '../components'

export function HeaderContainer() {
  return (
    <Header>
      <Header.Menu>
        <ul>
          <li>
          <a href="#OurMission">Our Mission</a>
          </li>
          <li>
            <a href="#Join">Join In</a>
          </li>
          <li>
            <a href="#Shop">Chocoshop</a>
          </li>
        </ul>
      </Header.Menu>
    </Header>
  )
}