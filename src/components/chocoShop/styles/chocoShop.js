import styled from 'styled-components/macro';

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  background: white;
  border: 2px solid red;
  width: 100%;
  height: 100vh;
`;

export const MenuContainer = styled.section`
  height: 100%;
  width: 100%;
  border: 2px solid blue;
  grid-column: 1 / span 1;
  grid-row: 1;
`;

