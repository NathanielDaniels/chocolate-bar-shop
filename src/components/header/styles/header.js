import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  margin-top: 50px;
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background: var(--main-red);
  box-shadow: 0 2px 5px hsl(210, 100%, 20%);
  ul {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    li {
      a {
        color: #fff;
        font-size: 1.4rem;
        transition: border-bottom .2s ease;
        position: relative;
        &::after {
          content: '';
          width: 0px;
          height: 3px;
          background: var(--main-white);
          position: absolute;
          bottom: 0;
          left: 0;
          transition: width .3s ease;
        }
        &:hover{
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
`;