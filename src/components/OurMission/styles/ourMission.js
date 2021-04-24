import styled from 'styled-components/macro';

export const Container = styled.section`
  ${'' /* border: 2px solid yellow; */}
  ${'' /* height: 100vh; */}
  ${'' /* padding: 0 50px; */}
  max-width: 1000px;
  margin: 0 auto;
`;

export const Info = styled.div`
  ${'' /* border: 2px solid red; */}
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #fff;
  margin-bottom: 8em;
  gap: 1em;
  padding: 0 25px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    margin-bottom: 4em;
    gap: 0;
    img {
      ${'' /* width: 100%; */}
      height: 100px;
    }
  }
  .left {
    img {
      width: 100%;
      height: auto;
    }
    
  }

  .right {
    flex-direction: column;
    align-items: flex-start;
    max-width: 60ch;
    line-height: 1.4;
    letter-spacing: .2px;
    padding: 20px;
    h3 {
      padding-bottom: 10px;
      font-size: 2rem;
    }
  }

  .left, .right {
    ${'' /* border: 2px solid orange; */}
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      width: 80%;
      margin: 0 auto;
      img {
        width: 60%;
      }
    }
    @media (max-width: 600px) {
      width: 100%;
      img {
        width: 80%;
      }
    }
  }

  
`;