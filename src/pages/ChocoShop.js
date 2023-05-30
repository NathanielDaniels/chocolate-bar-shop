import React from "react";
import { HeaderContainer } from "../containers/header";
import { ChocoShopContainer } from "../containers/chocoShop.tsx";
import { FooterContainer } from "../containers/footer";

export default function ChocoShop() {
  return (
    <>
      <HeaderContainer />
      <ChocoShopContainer />
      <FooterContainer />
    </>
  );
}
