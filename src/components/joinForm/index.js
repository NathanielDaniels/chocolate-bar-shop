import React from 'react';
import { Container, Title, InnerForm, Error } from './styles/joinForm'

export default function Form({ children, ...restProps }) {
  return <Container { ...restProps }>{ children }</Container>
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title { ...restProps }>{ children }</Title>
}

Form.InnerForm = function FormInnerForm({ children, ...restProps }) {
  return <InnerForm { ...restProps }>{ children }</InnerForm>
}

Form.Error = function formError({children, ...restProps}) {
  return <Error {...restProps}>{children}</Error>
}