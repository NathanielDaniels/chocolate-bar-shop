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
  width: clamp(400px, 80vw, 600px);
  @media (max-width: 600px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    padding: 10px;
  }
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
      color: hsl(62.4, 100%, 50%);
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
  padding: 20px 15px;
  padding: clamp(15px, 2vw, 20px) clamp(5px, 2vw, 15px);
  background: var(--main-white);
  color: var(--main-blue);
  position: relative;
  margin: clamp(5px, 2vw, 20px) 0;
  .cart-item {
    display: grid;
    grid-template-columns: 0.5fr 1.5fr 2fr 1fr 0.5fr;
    grid-template-rows: 1fr;
    place-items: center;
    width: 100%;
    p {
      text-align: center;
    }
    img {
      width: clamp(65px, 20vw, 100px);
    }
    div {
      display: inherit;
      justify-content: space-between;
      .cart-item-input {
        input {
          width: clamp(30px, 8vw, 45px);
          border-radius: 5px;
          border: 1px solid var(--main-blue);
          padding: 5px;
          text-align: center;
          font-size: 16px;
          color: var(--main-green);
        }
      }
    }
  }
  i {
    display: flex;
    cursor: pointer;
    justify-self: center;
    svg {
      font-size: 2rem;
    }
  }
`;
