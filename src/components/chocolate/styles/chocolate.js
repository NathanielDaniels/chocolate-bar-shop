import styled from 'styled-components';

export const Container = styled.div`
  ${'' /* border: 2px solid red; */}
`;
export const ChocoBars = styled.img`
  z-index: 1;
  width: 100%;
  height: 100%;
  transform: rotate(50deg);
  position: absolute;
  top: -100px;
  right: -700px;
  box-shadow: 0 2px 5px hsl(210, 100%, 30%);
`;