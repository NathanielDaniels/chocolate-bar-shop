import React from 'react';
import {
  Container, 
  Top, 
  Bottom, 
  Quote, 
  // ChocoBars, 
  // SmallBarOne, 
  // SmallBarTwo, 
  // SmallBarThree, 
  // SmallBarFour, 
  // SmallBarFive
} from './styles/title'

export default function Title({ children, ...restProps }) {
 return <Container {...restProps}>{children}</Container>
}

//? Main Title ==============================================

Title.Top = function TitleTop({children, ...restProps}) {
  return <Top {...restProps}>{children}</Top>
}

Title.Bottom = function TitleBottom({children, ...restProps}) {
  return <Bottom {...restProps}>{children}</Bottom>
}

Title.Quote = function TitleQuote({children, ...restProps}) {
  return <Quote {...restProps}>{children}</Quote>
}

//? Chocolate Bars ==============================================
// Title.ChocoBars = function ChocolateBars({children, ...restProps}) {
//   return <ChocoBars {...restProps}/>
// }

// Title.SmallBarOne = function TitleSmallBarOne({...restProps}) {
//   return <SmallBarOne {...restProps}/>
// }
// Title.SmallBarTwo = function TitleSmallBarTwo({...restProps}) {
//   return <SmallBarTwo {...restProps}/>
// }
// Title.SmallBarThree = function TitleSmallBarThree({...restProps}) {
//   return <SmallBarThree {...restProps}/>
// }
// Title.SmallBarFour = function TitleSmallBarFour({...restProps}) {
//   return <SmallBarFour {...restProps}/>
// }
// Title.SmallBarFive = function TitleSmallBarFive({...restProps}) {
//   return <SmallBarFive {...restProps}/>
// }