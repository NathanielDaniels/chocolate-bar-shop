import styled from 'styled-components/macro';

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
`;

export const MenuList = styled.ul`

    display: flex;
    justify-content: space-evenly;
    width: 100%;
`;

export const MenuListItem = styled.li`
      font-size: clamp(1.2rem, 2vw, 1.4rem);
      transition: border-bottom .2s ease;
      position: relative;
      //? Underline effect
        ${'' /* width: ${({ active }) => (active ? '100%' : '0')}; */}
      ${'' /* &::after {
        content: '';
        width: 0;
        height: 3px;
        background: var(--main-white);
        position: absolute;
        left: 0;
        bottom: 0;
        transition: width .3s ease;
      } */}

      &:last-child {
        display: flex;
        a {
          display: inherit;
          align-items: center;
        }
      }


      a {
        color: var(--main-white);

         &::after {
        content: '';
        width: 0;
        height: 3px;
        background: var(--main-white);
        position: absolute;
        left: 0;
        bottom: 0;
        transition: width .3s ease;
      }
        &:hover, &:focus {
          outline: none;
          &::after {
            width: 100%;
          }
        }
      }
      .active {
        ${'' /* color: var(--main-yellow); */}
        
        &::after {
          content: '';
          width: 100%;
          height: 3px;
          background: var(--main-white);
          position: absolute;
          left: 0;
          bottom: 0;
          transition: width .3s ease;
        }
         
      }
`;


//? Main Container
//* Placed at bottom to access other styles
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
      border: 2px solid blue;
      justify-content: flex-end;
      padding: 0 20px;
      li {
        margin: 0 20px;
      }
      @media (max-width: 800px) {
        width: auto;
        li {
          margin: 0 10px;
        }
      }
    }
  }
`;



