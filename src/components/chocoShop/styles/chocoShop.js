import styled from "styled-components/macro";

export const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 100vh 1fr;
  background: white;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 3fr;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr 2.2fr;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr 1.5fr;
  }
`;

//? Left Side Nav Menu ============================
export const SidebarContainer = styled.section`
  background: var(--main-blue);
  border-right: 2px solid var(--main-red);
`;

export const SidebarNav = styled.nav`
  height: 100%;
`;

export const SidebarNavList = styled.ul`
  position: sticky;
  top: 75px;
  button {
    all: unset;
    cursor: pointer;
    width: auto;
    text-wrap: nowrap;
    padding: 0px 20px;
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
      font-size: clamp(1rem, 2.2vw, 1.6rem);
      height: 30px;
    }
    @media (max-width: 600px) {
      padding: 5px 10px;
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
  align-items: flex-start;
  overflow-y: auto;
`;

export const Loading = styled.section`
  min-height: 100dvh;
`;

export const MainMenu = styled.div`
  width: 95%;
`;

export const MenuList = styled.ul`
  display: flex;
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
  width: clamp(160px, 22vw, 300px);

  p {
    font-weight: 500;
    padding-left: 10px;
    color: var(--main-black);
    font-size: clamp(0.8rem, 1.5vw, 1.2rem);
    &.subTitle {
      font-size: clamp(0.7rem, 1.5vw, 1rem);
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
    span {
      position: relative;
      max-height: 35px;
      .cartAmount {
        border: 2px solid red;
        background: var(--main-yellow);
        border-radius: 50%;
        width: 30px;
        height: 30px;
        position: absolute;
        top: -25px;
        right: -15px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        p {
          padding: 0;
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--main-black);
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
    }
  }
`;

export const Image = styled.img`
  border: 2px solid red;
`;

export const Link = styled.a`
  img {
    width: clamp(150px, 22vw, 300px);
    aspect-ratio: 10/6;
    object-fit: contain;
  }
`;

//? Popup Modal ===========================
export const Overlay = styled.div`
  z-index: 6;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChocoSelectModal = styled.div`
  width: 80%;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  border: 2px solid red;
  background: var(--main-white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 800px) {
    width: 80%;
    padding: 0;
  }
`;

export const ChocoModalContent = styled.div`
  z-index: 10000;
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
    all: unset;
    font-size: 1.5rem;
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
    img {
      width: 80%;
      margin: 0 auto 1em;
    }
    div {
      display: flex;
      font-size: 1.4rem;
      justify-content: space-evenly;
      div {
        flex-direction: row;
        font-weight: 500;
        position: relative;
        .cartAmount {
          border: 2px solid red;
          background: var(--main-yellow);
          border-radius: 50%;
          width: 30px;
          height: 30px;
          position: absolute;
          top: -25px;
          right: -15px;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          p {
            padding: 0;
            font-size: 1.2rem;
            font-weight: 500;
            color: var(--main-black);
            font-size: 1.2rem;
            font-weight: 600;
          }
        }
      }
    }
    @media (max-width: 800px) {
      grid-column: 1;
      grid-row: 2 / 3;
      flex-direction: row;
      height: fit-content;
      img {
        width: clamp(100px, 30vw, 200px);
        max-width: 50%;
        margin: 0;
        height: fit-content;
      }
      div {
        font-size: 1.2rem;
        padding: 0 10px;
        flex-direction: column;
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
      margin: 0 auto;
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
