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
  margin: 2em 25px 0;
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