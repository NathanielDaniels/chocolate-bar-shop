import React from 'react';
import {Container, ChocoBars} from './styles/chocolate';

export default function Chocolate({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Chocolate.Bars = function ChocolateBars({children, ...restProps}) {
  return <ChocoBars {...restProps}>{children}</ChocoBars>
}