import React from 'react';
import { Container, Title, InnerForm } from './styles/joinForm'

export default function Form({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}

Form.InnerForm = function FormInnerForm({ children, ...restProps }) {
  return <InnerForm { ...restProps }>{ children }</InnerForm>
}