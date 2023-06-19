import styled from "styled-components/macro";

export const Container = styled.section`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-top: 100px;
  justify-content: center;
  align-items: center;
  height: auto;
  margin: 0 auto;
`;

export const Inner = styled.div`
  color: #fff;
  width: 40ch;
  max-width: 100%;
  padding: 0 10px;
  z-index: 2;
  @media (max-width: 1200px) {
    margin-top: 30px;
    order: 1;
  }
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
  margin-bottom: 40px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const StoryImg = styled.img`
  position: absolute;
  bottom: 0px;
  width: 500px;
  left: 0;
  max-width: 100%;
  @media (max-width: 1200px) {
    position: relative;
    order: 2;
  }
  ${
    "" /* @media (max-width: 900px) {
    position: relative;
  } */
  }
`;
