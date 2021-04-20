import React from 'react';
import {Container, ChocoBars, SmallOne} from './styles/chocolate';

export default function Chocolate({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Chocolate.Bars = function ChocolateBars({children, ...restProps}) {
  return <ChocoBars {...restProps}/>
}

Chocolate.SmallOne = function ChocolateSmallOne({...restProps}) {
  return <SmallOne {...restProps}/>
}