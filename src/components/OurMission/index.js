import React from 'react';
import { Container } from './styles/ourMission';

export default function OurMission({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}