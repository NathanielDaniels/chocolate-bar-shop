import React from 'react';
import { Container, Title } from './styles/about';

export default function About({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}

About.Title = function AboutTitle({ children, ...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}



