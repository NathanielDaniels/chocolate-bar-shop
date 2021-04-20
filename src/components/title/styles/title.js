import styled from 'styled-components/macro';

export const Container = styled.section`
  border: 2px solid yellow;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 100px;
`;

//? Title
export const Top = styled.h1`
  color: var(--main-white);
  font-size: clamp(1.4rem, 3vw, 2.6rem);
  margin-left: calc(30% - 100px);
`;

export const Bottom = styled.h2`
  ${'' /* border: 2px solid red; */}
  color: var(--main-yellow);
  font-size: clamp(2.6rem, 5vw, 4.8rem);
  width: clamp(300px, 35vw, 600px);
  line-height: 1;
  margin-left: calc(30% - 100px);
  span.serious {
    font-size: clamp(4rem, 8vw, 7.4rem);
  }
  span.people {
    color: var(--main-white); 
  }
`;

export const Quote = styled.p`
  ${'' /* border: 2px solid yellow; */}
  position: relative;
  color: var(--main-white);
  font-size: clamp(1rem, 2.4vw, 1.6rem);
  font-weight: 500;
  margin: 2em auto;
  display: inline-block;
  &::after {
    position: absolute;
    content: '';
    width: clamp(350px, 50vw, 545px);
    height: 25px;
    background: rgba(255,255,255,.1);
    bottom: -5px;
    left: 25px;
  }
`;

//? Chocolate Bars
export const ChocoBars = styled.img`
  z-index: 1;
  width: 1000px;
  height: 500px;
  transform: rotate(50deg);
  position: absolute;
  top: -50px;
  right: calc(10% - 600px);
  box-shadow: 0 2px 5px hsl(210, 100%, 30%);

  @media (max-width: 1000px) {
    ${'' /* right: calc(10% - 700px); */}
    width: 700px;
    height: 400px;
    top: -110px;
    right: calc(10% - 450px);
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
  width: 10%;
  position: absolute;
  top: 70px;
  left: calc(50% - 250px);
  transform: rotate(20deg);
  filter: brightness(95%);
`;

//? Red Bar
export const SmallBarThree = styled.img`
  width: 7%;
  position: absolute;
  top: 250px;
  left: 80px;
  transform: rotate(-20deg);
  filter: brightness(90%);
`;

//? Green Bar
export const SmallBarFour = styled.img``;

//? Orange Bar
export const SmallBarFive = styled.img``;