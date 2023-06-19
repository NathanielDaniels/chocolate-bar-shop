import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100vw;
  ${"" /* height: 800px; */}
  height: clamp(645px, 33vw, 1400px);
  top: 0;
  right: 0;
  background: transparent;
  position: absolute;
  z-index: 1;
  overflow: hidden;
`;

//? All Chocolate Bars Image  (Big Bars)
export const ChocoBars = styled.div`
  background-image: url("../img/big-bars/bars-straight-bg-transparent.jpg");
  background-size: cover;
  background-position: bottom;
  z-index: 1;
  position: absolute;
  width: clamp(951px, 46vw, 2000px);
  ${"" /* width: clamp(951px, 46vw, 1200px); */}
  height: clamp(500px, 23vw, 1001px);
  top: clamp(-120px, -30%, -100px);
  left: clamp(72vw, 30vw, 25vw);
  transform: rotate(50deg);
  box-shadow: 0 2px 5px hsl(210, 100%, 30%);
  @media (max-width: 600px) {
    transform: rotate(45deg);
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
  width: clamp(100px, 15vw, 150px);
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
