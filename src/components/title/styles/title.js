import styled from 'styled-components';

export const Container = styled.section`
  ${'' /* border: 2px solid yellow; */}
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: calc(25% - 100px);
  padding-top: 50px;
`;

export const Top = styled.h1`
  color: var(--main-white);
  font-size: clamp(1.4rem, 3vw, 2.6rem);
`;

export const Bottom = styled.h2`
  color: var(--main-yellow);
  font-size: clamp(2.6rem, 5vw, 4.8rem);
  width: clamp(300px, 35vw, 600px);
  line-height: 1;
  ${'' /* margin-left: 25px; */}
  span.serious {
    font-size: clamp(4rem, 8vw, 7.4rem);
  }
  span.people {
    color: var(--main-white); 
  }
`;

export const Quote = styled.p`
  color: var(--main-white);
  font-size: clamp(1rem, 2.4vw, 1.6rem);
  font-weight: 500;
  margin: 2em 50px 0;
  display: inline;
  position: relative;
  &::after {
    content: '';
    width: clamp(350px, 50vw, 545px);
    height: 25px;
    background: rgba(255,255,255,.1);
    position: absolute;
    bottom: -5px;
    left: 25px;
  }
`;

export const ChocoBars = styled.img`
  z-index: 1;
  width: 1000px;
  height: 500px;
  transform: rotate(50deg);
  position: absolute;
  top: -50px;
  right: calc(10% - 600px);
  box-shadow: 0 2px 5px hsl(210, 100%, 30%);

  @media (max-width: 600px) {
    right: calc(10% - 700px);
  }
`;
export const SmallBarOne = styled.img`
  width: 14%;
  position: absolute;
  top: -20px;
  left: 50px;
  transform: rotate(-35deg);
`;
export const SmallBarTwo = styled.img`
  ${'' /* border: 2px solid red; */}
  width: 10%;
  position: absolute;
  top: 70px;
  left: 350px;
  transform: rotate(20deg);
  filter: brightness(95%);
`;
export const SmallBarThree = styled.img`
  width: 7%;
  position: absolute;
  top: 250px;
  left: 50px;
  transform: rotate(-20deg);
  filter: brightness(85%);
`;
export const SmallBarFour = styled.img``;
export const SmallBarFive = styled.img``;