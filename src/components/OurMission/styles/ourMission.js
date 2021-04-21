import styled from 'styled-components/macro';

export const Container = styled.section`
  border: 2px solid yellow;
  height: 100vh;
`;
export const InfoOne = styled.div`
  width: 100%;
  ${'' /* height: 100%; */}
  display: grid;
  grid-template-columns: repeat(1fr, 2);
  border: 2px solid red;
  background: #fff;
`;