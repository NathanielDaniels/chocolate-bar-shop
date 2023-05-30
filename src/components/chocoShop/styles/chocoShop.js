import styled from "styled-components/macro";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  background: white;
  width: 100%;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 3fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 2fr;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr 1.5fr;
  }
`;

//? Left Side Nav Menu ============================
export const SidebarContainer = styled.section`
  background: var(--main-blue);
  border-right: 2px solid var(--main-red);
  height: 100%;
  width: 100%;
  grid-column: 1 / 2;
  grid-row: 1;
`;

export const SidebarNav = styled.nav`
  position: fixed;
  top: 100px;
  transition: top 0.3s ease-in-out;

  //? Sticky Menu on scroll
  &.sticky {
    top: 60px;
  }
`;

export const SidebarNavList = styled.ul`
  width: 100%;
  button {
    all: unset;
    cursor: pointer; 
    width: 100%;
    height: 50px;
    padding: 0 20px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: 600;
    color: var(--main-white);
    &:hover {
      color: var(--main-yellow);
    }
    @media (max-width: 1200px) {
      font-size: clamp(1rem, 2vw, 1.6rem);
      height: 30px;
    }

    @media (max-width: 600px) {
      padding: 0 10px;
    }
  }

  .active {
    color: var(--main-yellow);
  }
`;

//? Right Side Main ====================================
export const MainMenuContainer = styled.section`
  background: var(--main-white);
  grid-column: 2 / span 1;
  grid-row: 1;
  padding: 100px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid var(--main-red);
`;

export const MainMenu = styled.div`
  width: 95%;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  a {
    cursor: pointer;
  }
`;

export const MenuItem = styled.li`
  margin: 10px;
  padding: 0 0 5px;
  border-radius: 5px;

  p {
    padding-left: 10px;
    color: var(--main-black);
    @media (max-width: 600px) {
      font-size: 14px;
    }
  }
  div {
    display: flex;
    justify-content: space-between;
    padding-right: 5px;
    p {
      font-weight: 500;
      font-size: 1.4rem;
    }
  }
`;

export const Image = styled.img`
  border: 2px solid red;
`;

export const Link = styled.a`
  img {
    max-width: 300px;

    ${
      "" /* &.tinyTony1{
        max-width: 200px;
        margin-bottom: -20px;
      }
      &.tinyTony2 {
        max-width:185px;
      }
      &.tinyTony3 {
        margin-bottom: -40px;
      } */
    }

    @media (max-width: 1200px) {
      width: 250px;
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  }
`;

//? Popup Modal ===========================
export const ChocoSelectModal = styled.div`
  z-index: 9999;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid red;
  background: var(--main-white);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 80%;
    height: 95vh;
    padding: 0;
  }
`;

export const ChocoModalContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  font-size: 14px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    height: 100%;
  }

  button {
    position: absolute;
    cursor: pointer;
    padding: 5px 10px;
    margin: 10px;
    right: 0;
    top: 0;
  }
  .leftSide,
  .rightSide {
    display: flex;
    align-items: flex-start;
    padding: 40px 20px;
    @media (max-width: 800px) {
      padding: 10px 20px;
    }
  }
  .leftSide {
    grid-column: 1 / 2;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 800px) {
      grid-column: 1;
      grid-row: 1 / 2;
      font-size: 12px;
    }
  }
  .middleSide {
    grid-column: 2 / 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 80%;
      margin-bottom: 1em;
    }
    div {
      display: flex;
      flex-direction: column;
      font-size: 1.4rem;
      div {
        justify-content: space-between;
        flex-direction: row;
        font-weight: 500;
      }
    }
    @media (max-width: 800px) {
      grid-column: 1;
      grid-row: 2 / 3;
      flex-direction: row;
      img {
        width: clamp(100px, 30vw, 200px);
        max-width: 50%;
      }
      div {
        font-size: 1.2rem;
        padding: 0 10px;
      }
    }
  }
  .rightSide {
    justify-content: space-evenly;
    flex-direction: column;
    align-items: flex-start;
    grid-column: 3 / 4;
    @media (max-width: 800px) {
      grid-column: 1;
      grid-row: 3 / 4;
      font-size: 12px;
    }
    .allergies {
      border: 2px solid red;
      border-radius: 5px;
      padding: 5px 10px;
      font-weight: 500;
    }
    div {
      margin-bottom: 10px;
      h2 {
        font-size: 1.1rem;
      }
    }
  }
`;
