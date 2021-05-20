import React from 'react';
import { Container } from './styles/cart';

export default function Cart({ ...restProps, children }) {
  <Container { ...restProps }>{ children }</Container>;
}

