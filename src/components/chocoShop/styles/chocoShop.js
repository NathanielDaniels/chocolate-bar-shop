import styled from 'styled-components/macro';

export const Container = styled.section`
  ${'' /* border: 2px solid red; */}
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  background: white;
  width: 100%;
`;

//? Left Side Menu
export const SidebarContainer = styled.section`
  ${'' /* border: 4px solid green; */}
  background: var(--main-blue);
  border-right: 2px solid var(--main-red);
  position: relative;
  height: 100%;
  width: 100%;
  grid-column: 1 / 2;
  grid-row: 1;
  ${'' /* display: flex;
  align-items: center;
  justify-content: center; */}
`;

export const SidebarNav = styled.nav`
  position: fixed;
  top: 100px;
  transition: top .3s ease-in-out;
  width: 20%;
  ul {
    width: 100%;
    li {
      ${'' /* border: 2px solid blue; */}
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
    }
  }

  //? Sticky Menu on scroll
  &.sticky {
    top: 60px;
  }
`;

//? Right Side Main
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
  ${'' /* border: 2px solid red; */}
  width: 95%;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    
  }
`;

export const MenuItem = styled.li`
  margin: 10px;
  padding: 0 0 5px;
  border-radius: 5px;
  a {
    img {
      max-width: 300px;

      &.tinyTony1{
        max-width: 200px;
        margin-bottom: -20px;
      }
      &.tinyTony2 {
        max-width:185px;
      }
      &.tinyTony3 {
        margin-bottom: -40px;
      }

      @media (max-width: 1200px) {
        width: 250px;
      }
    }
    p {
      padding-left: 10px;
      color: var(--main-black);
    }
    div {
      display: flex;
      justify-content: space-between;
      color: var(--main-red);
      font-weight: 500;
      font-size: 1.4rem;
      padding-right: 5px;
    }
  } 
    
`;

export const ChocoSelectModal = styled.div`
  display: none;
  z-index: 9999;
  width: 80%;
  height: 80%;
  max-width: 800px;
  max-height: 400px;
  border: 2px solid red;
  background: var(--main-white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);

  button {
    cursor: pointer;
    padding: 5px 10px;
    margin: 10px;
    float: right;
  }
`;