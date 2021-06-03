import React from "react"
import { CartItems } from '../components';

export function CartContainer() {

  return (
    <CartItems>
      <CartItems.MainInfo/>
      {/* <CartItems.item/> */}
    </CartItems>
  )
}