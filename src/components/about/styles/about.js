import styled from 'styled-components/macro';

export const Container = styled.section`
  ${'' /* border: 2px solid red; */}
`;

export const Inner = styled.div`
  position: absolute;
  top: 350px;
  left: 60px;
  color: #fff;
  width: 40ch;
  max-width: 100%;
  padding: 0 10px;

  @media (max-width: 1200px) {
    position: relative;
    left: 0;
    top: 210px;
    margin: 0 auto;
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
  position: relative;
  bottom: -10px;
  width: 500px;
  max-width: 100%;
`;