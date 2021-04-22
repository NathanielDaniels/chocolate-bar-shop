import styled from 'styled-components/macro';

export const Container = styled.section`
  ${'' /* border: 2px solid yellow; */}
  ${'' /* height: 100vh; */}
  padding: 0 50px;
`;

export const Info = styled.div`
  ${'' /* border: 2px solid red; */}
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #fff;
  margin: 5em 0;

  .left, .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left {
    background: transparent;
  }

  .right {
    flex-direction: column;
    align-items: flex-start;
    width: 60ch;
    line-height: 1.3;
    h3 {
      padding: 20px 0;
    }

    h3 {
      font-size: 2rem;
    }
  }
`;


// export const InfoOne = styled.div`
//   width: 100%;
//   ${'' /* height: 100%; */}
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   ${'' /* border: 2px solid red; */}
//   background: #fff;
// `;
// export const InfoTwo = styled.div`
//   width: 100%;
//   ${'' /* height: 100%; */}
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   ${'' /* border: 2px solid red; */}
//   background: #fff;
// `;
// export const InfoThree = styled.div`
//   width: 100%;
//   ${'' /* height: 100%; */}
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   ${'' /* border: 2px solid red; */}
//   background: #fff;
// `;