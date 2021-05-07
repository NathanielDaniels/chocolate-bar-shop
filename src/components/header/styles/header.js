import styled, {css} from 'styled-components/macro';

export const Menu = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: clamp(25em, 50vw, 35em);
  height: 50px;
  background: var(--main-red);
  box-shadow: 0 2px 5px hsl(210, 100%, 20%);
  transition: 0.6s;
  border-radius: 4px;
  }
  ${'' /* ${props => props.primary && css`
    background: white;
    color: black;
    padding: 100%;
  `} */}

  
`;

export const MenuList = styled.ul`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

export const MenuListItem = styled.li`
    
`;

export const MenuLink = styled.a`
      color: #fff;
      font-size: clamp(100%, 2vw, 1.4rem);
      transition: border-bottom .2s ease;
      position: relative;
      //? Underline effect
      &::after {
        content: '';
        width: 0;
        ${'' /* width: ${({ active }) => (active ? '100%' : '0')}; */}
        height: 3px;
        background: var(--main-white);
        position: absolute;
        left: 0;
        bottom: 0;
        transition: width .3s ease;
      }
      
      &:hover, &:focus{
        outline: none;
        &::after {
          width: 100%;
        }
      }
`;

//? Main Container
export const Container = styled.header`
  z-index: 2;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  width: 100%;
  height: auto;
  transition: margin .3s ease, height .3s ease;
  
  //? Sticky Menu on scroll
  &.sticky {
    margin-top: 0;
    ${Menu} {
      width: 100%;
      border-radius: 0;
    }
    ${MenuList} {
      justify-content: flex-end;
      padding: 0 20px;
      li {
        margin: 0 20px;
      }
    }
  }
`;



