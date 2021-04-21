import styled, {css} from 'styled-components/macro';

export const Container = styled.header`
  ${'' /* border: 2px solid yellow; */}
  z-index: 2;
  position: fixed;
  display: flex;
  justify-content: center;
  margin-top: 25px;
  width: 100%;
`;

export const Menu = styled.nav`
  ${'' /* position: fixed; */}
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: clamp(25em, 50vw, 35em);
  height: 50px;
  background: var(--main-red);
  box-shadow: 0 2px 5px hsl(210, 100%, 20%);
  transition: 0.6s;

  ul {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    li {
      a {
        color: #fff;
        font-size: clamp(100%, 2vw, 1.4rem);
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
        &:hover, &:focus{
        outline: none;
          &::after {
            width: 100%;
          }
        }
      }
    }
  }
  ${'' /* ${props => props.primary && css`
    background: white;
    color: black;
    padding: 100%;
  `} */}
`;