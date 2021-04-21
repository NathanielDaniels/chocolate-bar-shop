import React from 'react';
import {Container, ChocoBars, SmallBarOne, SmallBarTwo, SmallBarThree, SmallBarFour, SmallBarFive} from './styles/chocolate';

export default function Chocolate({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Chocolate.Bars = function ChocolateBars({children, ...restProps}) {
  return <ChocoBars {...restProps}/>
}

//? Chocolate Bars ==============================================
Chocolate.ChocoBars = function ChocolateBars({children, ...restProps}) {
  return <ChocoBars {...restProps}/>
}

Chocolate.SmallBarOne = function TitleSmallBarOne({...restProps}) {
  return <SmallBarOne {...restProps}/>
}
Chocolate.SmallBarTwo = function TitleSmallBarTwo({...restProps}) {
  return <SmallBarTwo {...restProps}/>
}
Chocolate.SmallBarThree = function TitleSmallBarThree({...restProps}) {
  return <SmallBarThree {...restProps}/>
}
Chocolate.SmallBarFour = function TitleSmallBarFour({...restProps}) {
  return <SmallBarFour {...restProps}/>
}
Chocolate.SmallBarFive = function TitleSmallBarFive({...restProps}) {
  return <SmallBarFive {...restProps}/>
}