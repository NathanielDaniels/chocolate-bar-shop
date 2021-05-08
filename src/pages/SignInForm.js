import React from 'react';
import { ChocolateContainer } from '../containers/chocolate'
import { HeaderContainer } from '../containers/header'
import { FormContainer } from '../containers/signInForm'
import { FooterContainer } from '../containers/footer'

export default function JoinForm() {
  return (
    <>
      <ChocolateContainer/>
      <HeaderContainer/>
      <FormContainer/>
      <FooterContainer/>
    </>
  )
}

