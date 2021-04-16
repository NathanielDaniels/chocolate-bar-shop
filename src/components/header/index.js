import React from 'react';
import {Container} from './styles/header'

export default function Container({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}