import React from 'react';
import { Container, MenuContainer, MenuNav, MainMenuContainer, MainMenu } from './styles/chocoShop';

export default function chocoShop({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
};

chocoShop.MenuContainer = function chocoShopMenuContainer({children, ...restProps}) {
  return <MenuContainer {...restProps}>{children}</MenuContainer>;
}

chocoShop.MenuNav = function chocoShopMenuNav({children, ...restProps}) {
  return <MenuNav {...restProps}>{children}</MenuNav>;
}

chocoShop.MainMenuContainer = function chocoShopMainMenu({children, ...restProps}) {
  return <MainMenuContainer {...restProps}>{children}</MainMenuContainer>;
}

chocoShop.MainMenu = function chocoShopMainMenu({children, ...restProps}) {
  return <MainMenu {...restProps}>{children}</MainMenu>;
}

