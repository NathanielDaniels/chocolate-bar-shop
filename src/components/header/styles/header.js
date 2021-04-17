import styled from 'styled-components';


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid red;
  width: 100%;
  height: 80px;
  padding: 0 20px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  display: inherit;
  justify-content: center;
  align-items: center;
  border: 2px solid blue;
`;

export const Menu = styled.nav`
  display: flex;
  ${'' /* border: 2px solid yellow; */}
  width: 40%;
  background: transparent;
  ul {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    &:hover {
      background: var(--main-red);
    }
    li {
      a {
        color: #fff;
        font-size: 1.4rem;
        transition: border-bottom .2s ease;
        &:hover {
          border-bottom: 1px solid #fff;
        }
      }
    }
  }
`;