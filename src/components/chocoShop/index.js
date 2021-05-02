import React, { useRef, useEffect } from 'react';
import { Container, SidebarContainer, SidebarNav, MainMenuContainer, MainMenu } from './styles/chocoShop';

export default function ChocoShop({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
};

ChocoShop.SidebarContainer = function ChocoShopSidebarContainer({ children, ...restProps}) {
   
  return <SidebarContainer {...restProps}>{children}</SidebarContainer>;
}

ChocoShop.SidebarNav = function ChocoShopSidebarNav({ref, children, ...restProps}) {

  const sidebarRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', function() {
      const elem = sidebarRef.current;
      // console.log(elem)
      elem.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);
  return <SidebarNav ref={sidebarRef} {...restProps}>{children}</SidebarNav>;
}

ChocoShop.MainMenuContainer = function ChocoShopMainMenu({children, ...restProps}) {
  return <MainMenuContainer {...restProps}>{children}</MainMenuContainer>;
}

ChocoShop.MainMenu = function ChocoShopMainMenu({children, ...restProps}) {
  return <MainMenu {...restProps}>{children}</MainMenu>;
}

