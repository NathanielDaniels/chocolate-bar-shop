import styled from 'styled-components/macro';

export const Container = styled.section`
  ${'' /* border: 2px solid red; */}
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr;
  background: white;
  width: 100%;
  ${'' /* height: 700px; */}
`;

//? Left Side Menu
export const MenuContainer = styled.section`
  ${'' /* border: 2px solid blue; */}
  height: 100%;
  width: 100%;
  grid-column: 1 / span 1;
  grid-row: 1;
`;

export const MenuNav = styled.nav`
  ${'' /* border: 2px solid red; */}
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    width: 100%;
    li {
      ${'' /* border: 2px solid blue; */}
      height: 50px;
      padding: 0 20px;
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      font-size: 1.8rem;
      font-weight: 500;
      color: #000;

      &:hover {
        color: var(--main-blue);
      }
    }
  }
`;

//? Right Side Main
export const MainMenuContainer = styled.section`
  background: var(--main-blue);
  grid-column: 2 / span 1;
  grid-row: 1;
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const MainMenu = styled.div`
  ${'' /* border: 2px solid red; */}
  width: 95%;
  ${'' /* height: 500px; */}
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    li {
      margin: 10px;
      ${'' /* background: #fff; */}
      padding: 0 0 5px;
      border-radius: 5px;
      a {
        img {
          width: 300px;
        }
        p {
          padding-left: 10px;
          ${'' /* color: var(--main-black); */}
          color: var(--main-white);
        }
        div {
          display: flex;
          justify-content: space-between;
          color: var(--main-white);
          font-weight: 500;
          font-size: 1.4rem;
          padding-right: 5px;

          &:AddCircleOutlineIcon {
            &:hover {
              color: red;
            }
          }
        }
      }
    }
  }
`;