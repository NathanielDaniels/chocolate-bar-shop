import React from 'react';
import { Container, Menu, MenuList} from './styles/header'

export default function Header({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}

Header.Menu = function HeaderMenu({ children, ...restProps }) {
  return <Menu { ...restProps }>{children}</Menu>
}

Header.MenuList = function HeaderMenuList({children, ...restProps}) {
  return <MenuList {...restProps}>{children}</MenuList>
}