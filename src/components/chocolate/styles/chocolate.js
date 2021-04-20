import styled from 'styled-components/macro';

export const Container = styled.div`
  ${'' /* border: 2px solid red; */}
  z-index: 1;
`;

export const ChocoBars = styled.img`
  z-index: 1;
  width: 1000px;
  height: 500px;
  transform: rotate(50deg);
  position: absolute;
  top: -50px;
  right: calc(10% - 600px);
  box-shadow: 0 2px 5px hsl(210, 100%, 30%);

  @media (max-width: 600px) {
    right: calc(10% - 700px);
  }
`;

export const SmallOne = styled.img`
  border: 2px solid red;
  width: 15%;
`;