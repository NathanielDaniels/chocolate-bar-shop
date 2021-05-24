import React from 'react';
import { Container } from './styles/cart';

export default function Cart({ children, ...restProps }) {
  <Container { ...restProps }>{ children }</Container>;
}

