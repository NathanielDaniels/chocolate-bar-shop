import React from 'react';
import { CartItems } from '../components';

export function CartContainer() {
  return (
    <CartItems>
      <CartItems.MainInfo className="cart-page">
        <h1>Check out</h1>
        {cartItemElements}
        <p className="total-cost">Total: {totalCostDisplay}</p>
        <div className="order-button">
          {showOrderBtn()}
        </div>
      </CartItems.MainInfo>
    </CartItems>
  )
}