import styled from "styled-components/macro";

export const Container = styled.section`
  padding: 140px 0 100px;
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: ${({ height }) => (height > 0 ? "auto" : "100vh")};
  color: var(--main-white);
`;

export const Main = styled.main`
  z-index: 2;
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 550px;
  h1 {
    text-align: center;
    font-size: 3rem;
  }
  .total-cost {
    display: inherit;
    justify-content: flex-end;
    font-size: 1.2rem;
  }
  .order-button {
    margin: 0 auto;
    button {
      cursor: pointer;
      padding: 20px;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 600;
      background-color: #4caf50;
      color: #fff;
      border: none;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: #3e8e41;
      }
    }
  }
`;

export const CartItem = styled.div`
  border: 2px solid var(--main-red);
  border-radius: 10px;
  padding: 20px;
  background: var(--main-white);
  color: var(--main-blue);
  position: relative;
  display: flex;
  align-items: center;
  margin: 20px 0;
  .cart-item {
    display: inherit;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  i {
    cursor: pointer;
    margin-right: 20px;
  }
  p {
    padding-left: 20px;
  }
`;
