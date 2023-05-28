import React from "react";
import { Container, Logo, Section, Wrapper } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.Logo = function FooterLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

Footer.Section = function FooterContentContainer({ children, ...restProps }) {
  return <Section {...restProps}>{children}</Section>;
};
