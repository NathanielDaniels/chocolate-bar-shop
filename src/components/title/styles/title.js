import styled from "styled-components/macro";

export const Container = styled.section`
  ${"" /* border: 2px solid yellow; */}
  position: relative;
  width: 100vw;
  height: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .titleContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 700px) {
    height: 600px;
  }
  @media (min-width: 1400px) {
    height: 800px;
  }
`;

//? Title Top
export const Top = styled.h1`
  color: var(--main-white);
  margin-left: -40px;
  font-size: clamp(1.4rem, 5vw, 2.6rem);
  ${"" /* margin-left: calc(30% - 100px); */}
`;
//? Title Bottom
export const Bottom = styled.h2`
  ${"" /* border: 2px solid red; */}
  color: var(--main-yellow);
  font-size: clamp(2.6rem, 8vw, 4.8rem);
  width: clamp(360px, 60vw, 600px);
  line-height: 1;
  ${"" /* margin-left: calc(30% - 100px); */}
  span.serious {
    font-size: clamp(4rem, 12vw, 7.4rem);
  }
  span.people {
    color: var(--main-white);
  }
`;

export const Quote = styled.p`
  ${"" /* border: 2px solid yellow; */}
  position: relative;
  color: var(--main-white);
  font-size: clamp(0.8rem, 2.4vw, 1.6rem);
  font-weight: 500;
  margin: 2em auto;
  display: inline-block;
  ${
    "" /* left: 50%;
  transform: translate(-50%, 0); */
  }
  &::after {
    position: absolute;
    content: "";
    width: clamp(300px, 57vw, 605px);
    height: 25px;
    background: rgba(255, 255, 255, 0.1);
    bottom: -5px;
    left: 25px;
  }
`;
