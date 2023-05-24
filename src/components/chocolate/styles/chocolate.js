import styled from "styled-components/macro";

export const Container = styled.div`
  width: 100vw;
  height: 800px;
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
  ${"" /* width: 1000px; */}
  ${"" /* height: 500px; */}
  ${"" /* top: -55px; */}
  ${"" /* right: calc(0% - 30%); */}
  ${
    "" /* width: clamp(945px, 10vw, 1500px);
  height: clamp(500px, 15vw, 1000px);
  top: clamp(-40px, -30%, -100px);
  left: clamp(72vw, 30vw, 25vw); */
  }
  width: clamp(951px, 46vw, 1200px);
  height: clamp(500px, 23vw, 1001px);
  top: clamp(-105px, -30%, -100px);
  left: clamp(72vw, 30vw, 25vw);
  transform: rotate(50deg);
  box-shadow: 0 2px 5px hsl(210, 100%, 30%);
  ${"" /* overflow: hidden; */}
  @media (max-width: 1350px) {
    ${"" /* right: calc(10% - 700px); */}
    ${
      "" /* width: 700px;
    height: 400px;
    top: -110px;
    right: calc(10% - 500px); */
    }
  }
  @media (max-width: 600px) {
    transform: rotate(45deg);
  }
  @media (max-width: 2000px) {
    ${"" /* right: calc(10% - 700px); */}
    ${"" /* top: -110px; */}
    ${
      "" /* width: 800px;
    height: 400px;
    right: calc(10% - 25%); */
    }
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
  ${"" /* width: 10%; */}
  max-width: calc(90vh - 500px);
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
