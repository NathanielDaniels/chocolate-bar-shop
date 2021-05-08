import React, { useRef, useEffect } from 'react';
import { Container, Menu, MenuList, MenuListItem, MenuLink } from './styles/header'

export default function Header({ ref, children, ...restProps }) {
  const headerDom = useRef('');
  
  
  useEffect(() => {
    window.addEventListener('scroll', function() {
      const elem = headerDom.current;
      return elem ? (elem.classList.toggle("sticky", window.scrollY > 0)) : '';
    });
  }, []);

  
  return <Container ref={ headerDom } { ...restProps }>{ children }</Container>
};

Header.Menu = function HeaderMenu({ children, ...restProps }) {
  return <Menu  { ...restProps }>{ children }</Menu>
};

Header.MenuList = function HeaderMenuList({children, ...restProps}) {
  return <MenuList { ...restProps }>{ children }</MenuList>
};

Header.MenuListItem = function HeaderMenuListItem({children, ...restProps}) {
  return <MenuListItem { ...restProps }>{ children }</MenuListItem>
};

Header.MenuLink = function HeaderMenuLink({children, ...restProps}) {
  return <MenuLink { ...restProps }>{ children }</MenuLink>
};