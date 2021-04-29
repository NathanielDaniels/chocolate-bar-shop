import styled from 'styled-components/macro';

export const Container = styled.section`
  border-top: 2px solid red;
  background: #fff;
  padding: 50px 35px;
  
  position: relative;
  bottom:0;
  left: 0;
  right: 0;

  @media (max-width: 748px) {
    justify-content: flex-start;
  }
`;

export const Wrapper = styled.div`
  display:flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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
      a {
        transition: color .2s ease-in-out;
        color: var(--main-black);
        &:hover {
          color: var(--main-red);
        }
      }
    }
    &:nth-child(1) {
      height: 100%;
      display: inherit;
      flex-direction: column;
      justify-content: center;
    }
  };
`;