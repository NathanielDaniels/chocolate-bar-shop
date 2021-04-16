import React from 'react';
import { Header } from '../components'

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Logo alt={Logo}/>
      <Header.Menu />
      {children}
    </Header>
  )
}