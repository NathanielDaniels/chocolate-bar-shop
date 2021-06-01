import React from "react";
import { CartContainer } from "../containers/cart";
import { HeaderContainer } from '../containers/header';
import { ChocolateContainer } from '../containers/chocolate';
import { FooterContainer } from '../containers/footer';

function Cart() {
  return (
    <>
      <HeaderContainer/>
      <ChocolateContainer/>
      <CartContainer/>
      <FooterContainer/>
    </>
  )
}

export default Cart