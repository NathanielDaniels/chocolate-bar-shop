import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid red;
  width: 100%;
  height: 80px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  ${'' /* display: inherit;
  justify-content: center;
  align-items: center; */}
  border: 2px solid blue;
`;

export const Menu = styled.nav`
  display: flex;
`;