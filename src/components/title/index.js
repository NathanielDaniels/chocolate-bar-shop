import React from 'react';
import {Container, Top, Bottom, Quote} from './styles/title'

export default function Title({ children, ...restProps }) {
 return <Container {...restProps}>{children}</Container>
}

Title.Top = function TitleTop({children, ...restProps}) {
  return <Top {...restProps}>{children}</Top>
}

Title.Bottom = function TitleBottom({children, ...restProps}) {
  return <Bottom {...restProps}>{children}</Bottom>
}

Title.Quote = function TitleQuote({children, ...restProps}) {
  return <Quote {...restProps}>{children}</Quote>
}