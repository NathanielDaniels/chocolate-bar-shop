import React from 'react';
import { Container, Logo, Menu } from './styles/header'

export default function Header({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps }>{ children }</Logo>
}

Header.Menu = function HeaderMenu({ ...restProps }) {
  return <Menu { ...restProps }>
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
  </Menu>
}