import styled from 'styled-components/macro';

export const Container = styled.section`
  background: #fff;
  padding: 50px 35px;
  display:flex;

`;

export const Logo = styled.img`
  width: 250px;
`;

export const ContentContainer = styled.div`
  ${'' /* border: 2px solid red; */}
  ${'' /* width: fit-content; */}
  width: 100%;
  ${'' /* height:auto; */}
  display: inherit;
  justify-content: space-evenly;
`;

export const Section = styled.div`
  ${'' /* border: 2px solid blue; */}
  display: inherit;
  flex-direction: column;
  padding: 10px 15px;
  
  h4 {
    font-size: 1.5rem;
  }
`;