import React from 'react';
import { Container } from './styles/cartItems';

export default function Cart({ children, ...restProps }) {
  <Container { ...restProps }>{ children }</Container>;
}

