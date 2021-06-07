import styled from 'styled-components/macro';

export const Container = styled.section`
  padding: 140px 0 100px;
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: ${({ height }) => (height > 0 ? 'auto' : '100vh')};
  color: var(--main-white);
`;

export const Main = styled.main`
  ${'' /* border: 2px solid yellow; */}
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 550px;

  .total-cost {
    display: inherit;
    justify-content: flex-end;
  }

  .order-button {
    ${'' /* color: red; */}
    button {
      cursor: pointer;
      padding: 20px;
      letter-spacing: .4px;
      text-transform: uppercase;
      font-size: 16px;
    }
  }
`;

export const CartItem = styled.div`
  border: 2px solid var(--main-red);
  border-radius: 10px;
  padding: 20px;
  ${'' /* padding: 20px 0; */}
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