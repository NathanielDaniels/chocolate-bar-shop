import styled from 'styled-components/macro';

export const Container = styled.section`
  ${'' /* border: 2px solid yellow; */}
  ${'' /* height: 100vh; */}
  ${'' /* padding: 0 50px; */}
  width: 1000px;
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
  .left, .right {
    ${'' /* border: 2px solid orange; */}
    display: flex;
    justify-content: center;
    align-items: center;
    ${'' /* width: 50%; */}
  }

  .left {
    ${'' /* background: transparent; */}
    img {
      ${'' /* display: block; */}
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
      padding: 10px 0;
    }

    h3 {
      font-size: 2rem;
    }
  }
`;