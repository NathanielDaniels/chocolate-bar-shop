import styled from "styled-components/macro";

export const Container = styled.footer`
  border-top: 2px solid red;
  background: #fff;
  padding: 50px 35px;

  ${"" /* position: relative; */}
  ${
    "" /* bottom: 0;
  left: 0;
  right: 0; */
  }

  @media (max-width: 748px) {
    justify-content: flex-start;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-evenly;
`;

export const Logo = styled.img`
  max-width: 250px;
  max-height: 170px;
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const Section = styled.div`
  text-wrap: nowrap;
  display: inherit;
  flex-direction: column;
  padding: 10px 15px;
  h4 {
    font-size: clamp(1rem, 2vw, 1.5rem);
  }

  .socialMedia {
    @media (max-width: 945px) {
      display: flex;
    }
  }
  ul {
    &:not(:nth-child(1)) {
      width: clamp(15em, 10vw, 25em);
    }
    li {
      font-size: clamp(14px, 2vw, 1rem);
      color: #222;
      a {
        transition: color 0.2s ease-in-out;
        color: var(--main-black);
        &:hover {
          color: var(--main-red);
        }
      }
    }
    .mediaIcons {
      width: 150px;
    }
  }
`;
