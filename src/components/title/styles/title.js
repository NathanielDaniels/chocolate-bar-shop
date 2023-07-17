import styled from "styled-components/macro";

export const Container = styled.section`
  z-index: 2;
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
`;

export const MainTitle = styled.h1`
  color: var(--main-white);
  font-size: clamp(1.4rem, 4vw, 3.4rem);
`;

export const SubTitle = styled.h2`
  color: var(--main-yellow);
  font-size: clamp(2.6rem, 8vw, 6.8rem);
  width: clamp(360px, 60vw, 775px);
  line-height: 1;
  span.serious {
    font-size: clamp(4rem, 12vw, 10.4rem);
  }
  span.people {
    color: var(--main-white);
  }
`;

export const Quote = styled.p`
  position: relative;
  color: var(--main-white);
  font-size: clamp(0.8rem, 2.4vw, 1.6rem);
  font-weight: 500;
  margin: 2em auto;
  display: inline-block;
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
