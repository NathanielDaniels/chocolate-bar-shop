import React from 'react';
import { ChocoShop } from '../components'

export function ChocoShopContainer() {
  return (
    <ChocoShop>
      <ChocoShop.MenuContainer>
        <ul>
         <li>
            <a href="/">Our Mission</a>
          </li>
          <li>
            <a href="/Join">Join In</a>
          </li>
          <li>
            <a href="/ChocoShop">Chocoshop</a>
          </li>
        </ul>
      </ChocoShop.MenuContainer>
    </ChocoShop>
  )
}