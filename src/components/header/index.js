import React, { useRef, useEffect } from 'react';
import { Container, Menu, MenuList} from './styles/header'

export default function Header({ ref, children, ...restProps }) {
  const headerDom = useRef(null);
  
  useEffect(() => {
    window.addEventListener('scroll', function() {
      const elem = headerDom.current;
      elem.classList.toggle("sticky", window.scrollY > 0);
    });
    
    console.log(headerDom);
  }, []);
  return <Container ref={headerDom} { ...restProps }>{ children }</Container>
};

Header.Menu = function HeaderMenu({ children, ...restProps }) {
 

  return <Menu  { ...restProps }>{children}</Menu>
};

Header.MenuList = function HeaderMenuList({children, ...restProps}) {
  return <MenuList {...restProps}>{children}</MenuList>
};