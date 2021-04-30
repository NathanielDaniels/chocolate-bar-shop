import React from 'react';
import { Container, MenuContainer } from './styles/chocoShop';

export default function chocoShop({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>;
};

chocoShop.MenuContainer = function chocoShopMenuContainer({children, ...restProps}) {
  return <MenuContainer {...restProps}>{children}</MenuContainer>;
}

