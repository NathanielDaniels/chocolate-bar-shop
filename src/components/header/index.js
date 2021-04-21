import React from 'react';
import { Container, Menu,} from './styles/header'

export default function Header({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}

Header.Menu = function HeaderMenu({ children, ...restProps }) {
  return <Menu { ...restProps }>{children}</Menu>
}