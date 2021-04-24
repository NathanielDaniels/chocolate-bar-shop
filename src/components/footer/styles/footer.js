import styled from 'styled-components/macro';

export const Container = styled.section`
  border-top: 2px solid red;
  background: #fff;
  padding: 50px 35px;
  display:flex;

  flex-wrap: wrap;
  justify-content: space-evenly;

  @media (max-width: 748px) {
    ${'' /* flex-wrap: wrap; */}
    justify-content: flex-start;
  }
`;

export const Logo = styled.img`
  max-width: 250px;
  max-height: 170px;
  @media (max-width: 748px) {
    display: none;
  }
`;

export const Section = styled.div`
  ${'' /* border: 2px solid blue; */}
  display: inherit;
  flex-direction: column;
  padding: 10px 15px;
  min-width: fit-content;
  h4 {
    font-size: clamp(1rem, 2vw, 1.5rem);
  }

  ul {
    li {
      font-size: clamp(14px, 2vw, 1rem);
      color: #222;
    }
  };
`;