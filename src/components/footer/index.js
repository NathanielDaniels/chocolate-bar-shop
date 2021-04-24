import React from 'react';
import { Container, Logo } from './styles/footer';

export default function Footer({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Footer.Logo = function FooterLogo({...restProps }) {
  return <Logo {...restProps}/>
}