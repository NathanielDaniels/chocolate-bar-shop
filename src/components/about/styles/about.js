import styled from "styled-components/macro";

export const Container = styled.section`
  ${"" /* border: 2px solid red; */}
  display: flex;
  flex-wrap: wrap;
  padding: 100px 0;
  justify-content: center;
  align-items: center;
  height: auto;
  ${"" /* width: 80vw; */}
  margin: 0 auto;
`;

export const Inner = styled.div`
  z-index: 2;
  ${"" /* position: absolute; */}
  ${"" /* top: 350px; */}
  ${"" /* left: 60px; */}
  color: #fff;
  width: 40ch;
  max-width: 100%;
  padding: 0 10px;

  ${
    "" /* @media (max-width: 1200px) {
    position: relative;
    left: 0;
    top: 210px;
    margin: 0 auto;
  } */
  }
`;

export const Title = styled.h2`
  color: var(--main-yellow);
  @media (max-width: 600px) {
    width: 80%;
    font-size: 1.3rem;
  }
`;

export const Info = styled.p`
  color: var(--main-white);
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const StoryImg = styled.img`
  position: absolute;
  bottom: -10px;
  width: 500px;
  left: 0;
  max-width: 100%;
  @media (max-width: 900px) {
    position: relative;
  }
`;
