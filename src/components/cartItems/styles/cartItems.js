import styled from 'styled-components';

export const Container = styled.section`
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: var(--main-white);
`;

export const Main = styled.main`
  ${'' /* border: 2px solid yellow; */}
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 500px;
  .total-cost {
    display: inherit;
    justify-content: flex-end;
  }
`;

export const CartItem = styled.div`
  border: 2px solid white;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

// .cart {
//   color: var(--blue);
//   font-size: 1.5rem;
//   position: absolute;
//   top: 5px;
//   right: 5px;
//   cursor: pointer;
// }

// .cartInfo:active {
//   transform: scale(0.95);
// }

// main.cart-page {
//   padding: 10px;
// }

// .cart-page>h1 {
//   text-align: center;
// }

// .cart-item {
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 20px 0;
// }

// .cart-item img {
//   margin-right: auto;
//   margin-left: 10px;
// }

// .ri-delete-bin-line,
// .ri-delete-bin-fill {
//   font-size: 1.3em;
//   cursor: pointer;
//   z-index: 100;
// }

// .ri-shopping-cart-fill {
//   transition: color 0.1s ease-in-out;
// }

// .cart-page .total-cost {
//   text-align: right;
//   font-size: 1.3em;
// }

// .cart-page div.order-button {
//   display: flex;
//   justify-content: center;
// }

// .order-button>button {
//   border-color: var(--black);
//   cursor: pointer;
//   padding: 15px;
//   transition: all 0.2s ease-in-out;
// }

// .order-button>button:focus {
//   outline: none;
// }

// .order-button>button:disabled {
//   border-color: lightgray;
// }