import styled from 'styled-components/macro';

export const Container = styled.div`
  ${'' /* border: 2px solid red; */}
  z-index: 1;
`;

//? Chocolate Bars
export const ChocoBars = styled.div`
  background-image: url("../img/big-bars/bars-straight-bg-transparent.jpg");
  background-size: cover;
  background-position: bottom;
  z-index: 1;
  width: 1000px;
  height: 500px;
  transform: rotate(50deg);
  position: absolute;
  top: -50px;
  right: calc(10% - 600px);
  box-shadow: 0 2px 5px hsl(210, 100%, 30%);

  @media (max-width: 1100px) {
    ${'' /* right: calc(10% - 700px); */}
    width: 700px;
    height: 400px;
    top: -110px;
    right: calc(10% - 500px);
  }
`;

//? Purple Bar
export const SmallBarOne = styled.img`
  width: 14%;
  position: absolute;
  top: -20px;
  left: 50px;
  transform: rotate(-35deg);
`;

//? Yellow Bar
export const SmallBarTwo = styled.img`
  ${'' /* width: 10%; */}
  max-width: calc(100vh - 500px);
  min-width: 100px;
  position: absolute;
  top: 70px;
  left: calc(50% - 250px);
  transform: rotate(20deg);
  filter: brightness(95%);
`;

//? Red Bar
export const SmallBarThree = styled.img`
  width: 7%;
  min-width: 70px;
  position: absolute;
  top: 250px;
  left: 80px;
  transform: rotate(-20deg);
  filter: brightness(90%);

  @media (max-width: 1100px) {
    top: 160px;
    left: 0;
  }
`;

//? Green Bar
export const SmallBarFour = styled.img``;

//? Orange Bar
export const SmallBarFive = styled.img``;