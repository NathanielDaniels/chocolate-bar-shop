import styled from "styled-components/macro";

export const Menu = styled.nav`
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  ${"" /* margin: 0 auto; */}
  width: clamp(25em, 80vw, 35em);
  height: 50px;
  background: var(--main-red);
  box-shadow: 0 2px 5px hsl(210, 100%, 20%);
  transition: 0.6s;
  border-radius: 4px;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0 5px;
  ${
    "" /* @media (max-width: 768px) {
    padding: 0;
  } */
  }
`;

export const MenuListItem = styled.li`
  font-size: clamp(1rem, 3.5vw, 1.4rem);
  gap: clamp(0.5rem, 2vw, 1rem);
  position: relative;
  max-height: 34px;
  .cartInfo {
    svg {
      display: block;
    }
    span {
      position: absolute;
      top:  -10px;
      right: -15px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 2px solid var(--main-red);
      background: var(--main-white);
      color: var(--main-red);
      font-weight 600;
      height: 25px;
      width: 25px;
      font-size: 1.1rem;
      ${"" /* background: var(--main-white); */}
      ${"" /* color: var(--main-red); */}
    }
  }
  .profileIcon {
    width: 1.5rem;
      height: 1.5rem;
      fill: var(--main-yellow);
      display: blo
    ${
      "" /* svg {
      width: 1.5rem;
      height: 1.5rem;
      fill: var(--main-yellow);
      display: block;
    } */
    }
  }
  //? Underline effect
  ${"" /* width: ${({ active }) => (active ? '100%' : '0')}; */}
  ${
    "" /* &::after {
        content: '';
        width: 0;
        height: 3px;
        background: var(--main-white);
        position: absolute;
        left: 0;
        bottom: 0;
        transition: width .3s ease;
      } */
  }

      &:last-child {
    ${"" /* border: 2px solid white; */}
    display: flex;
    a {
      display: inherit;
      justify-content: center;
      align-items: center;
    }
  }

  a {
    color: var(--main-white);
    transition: color 0.2s ease;
    ${
      "" /* &::after {
      content: "";
      width: 0;
      height: 3px;
      background: var(--main-white);
      position: absolute;
      left: 0;
      bottom: 0;
      transition: width 0.3s ease;
    } */
    }
    &:hover,
    &:focus {
      color: var(--main-yellow);
      outline: none;
      ${
        "" /* &::after {
        width: 100%;
      } */
      }
    }
  }
  .active {
    color: var(--main-yellow);
    ${"" /* font-weight: 600;  */}
    ${
      "" /* text-shadow: 1px 1px 1px var(--main-white), -1px -1px 1px var(--main-white); */
    }
    ${
      "" /* &::after {
      content: "";
      width: 100%;
      height: 3px;
      background: var(--main-white);
      position: absolute;
      left: 0;
      bottom: 0;
      transition: width 0.3s ease;
    } */
    }
  }
`;

//? Main Container
//* Placed at bottom to access other styles
export const Container = styled.header`
  z-index: 3;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  width: 100%;
  ${"" /* height: auto; */}
  transition: margin 0.3s ease, height 0.3s ease;
  li {
    margin: 0 10px;
  }

  @media (max-width: 600px) {
    margin-top: 0;
    ${Menu} {
      width: 100%;
      border-radius: 0;
    }
    ${MenuList} {
      ${"" /* border: 2px solid blue; */}
      ${"" /* justify-content: flex-end; */}
      align-items: center;
      justify-content: center;
      ${"" /* gap: 1em; */}
      ${"" /* gap: 1em; */}
      ${"" /* padding: 0 20px; */}
      ${
        "" /* li {
        margin: 0 10px;
      } */
      }
      @media (max-width: 800px) {
        ${"" /* width: auto; */}
        li {
          ${"" /* margin: 0 10px; */}
        }
      }
    }
  }

  //? Sticky Menu on scroll
  &.sticky {
    margin-top: 0;
    ${Menu} {
      width: 100%;
      border-radius: 0;
    }
    ${MenuList} {
      ${"" /* border: 2px solid blue; */}
      justify-content: flex-end;
      align-items: center;
      ${"" /* gap: 1em; */}
      ${"" /* gap: 1em; */}
      ${"" /* padding: 0 20px; */}
      li {
        ${"" /* margin: 0 10px; */}
      }
      @media (max-width: 800px) {
        width: auto;
      }
    }
  }
`;
