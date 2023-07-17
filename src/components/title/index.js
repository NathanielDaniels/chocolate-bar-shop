import { Container, MainTitle, SubTitle, Quote } from "./styles/title";

export default function Title({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Title.Main = function TitleMain({ children, ...restProps }) {
  return <MainTitle {...restProps}>{children}</MainTitle>;
};

Title.Sub = function TitleSub({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Title.Quote = function TitleQuote({ children, ...restProps }) {
  return <Quote {...restProps}>{children}</Quote>;
};
