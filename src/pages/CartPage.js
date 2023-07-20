// import React from "react";
import { CartContainer } from "../containers/CartContainer";
import { HeaderContainer } from "../containers/header";
import { ChocolateContainer } from "../containers/chocolate";
import { FooterContainer } from "../containers/footer";

export default function Cart() {
  return (
    <>
      <HeaderContainer />
      <ChocolateContainer />
      <CartContainer />
      <FooterContainer />
    </>
  );
}
