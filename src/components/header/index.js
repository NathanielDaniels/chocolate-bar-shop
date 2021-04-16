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
       <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </Menu>
}