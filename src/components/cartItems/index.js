import { useState, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";

import { Container, CartItem, Main } from "./styles/cartItems";
import { Context } from "../../context/Context.tsx";
// import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import useHover from "../../hooks/useHover";
// import PropTypes from "prop-types";

export const CartContext = createContext();

export default function CartItems({ children, ...restProps }) {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, setCartItems, emptyCart, removeFromCart } =
    useContext(Context);
  const history = useHistory();
  // const [hovered, ref] = useHover();

  const totalCostDisplay = () => {
    const itemCost = cartItems.map((item) => item.price * item.amount);
    if (itemCost.length > 0) {
      const totalCost = itemCost.reduce((sum, item) => sum + item, 0);
      return totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } else {
      return "$0";
    }
  };

  // ? Switch between Trash Icons
  // function trashHover() {
  //   if (hovered) {
  //     return <DeleteForeverIcon />
  //   } else {
  //     return <DeleteIcon />
  //   };
  // }

  const updateAmount = (itemId, newAmount) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) => {
        if (item.id === itemId) {
          return { ...item, amount: newAmount };
        } else {
          return item;
        }
      });
    });
  };

  const CartItemInput = ({ item, updateAmount }) => {
    const [amount, setAmount] = useState(item.amount);

    const handleChange = (event) => {
      const newAmount = parseInt(event.target.value, 10);
      if (!isNaN(newAmount)) {
        setAmount(newAmount);
        updateAmount(item.id, newAmount);
      }
    };

    return (
      <span className="cart-item-input">
        <input type="number" value={amount} onChange={handleChange} min="1" />
      </span>
    );
  };

  const cartItemElements = cartItems.map((item) => {
    return (
      <CartItem key={item.id}>
        <div className="cart-item">
          <i onClick={() => removeFromCart(item.id)}>
            <DeleteForeverIcon />
          </i>
          <img src={item.image} width="130px" alt={item.id} />
          <p>{item.title}</p>
          <p>${item.price}</p>
          <div>
            <CartItemInput
              key={item.id}
              item={item}
              updateAmount={updateAmount}
            />
          </div>
        </div>
      </CartItem>
    );
  });

  function placeOrder() {
    const orderButton = document.querySelector(".order-button > button");
    orderButton.style.backgroundColor = "#3e8e41";
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      changeCartTitle();
      emptyCart();
      sessionStorage.removeItem("cartAmount");
    }, 1500);
    setTimeout(() => {
      history.push("/ChocoShop");
    }, 3000);
  }

  function changeCartTitle() {
    window.scrollTo(0, 0);
    const title = document.querySelector(".cart-page > h1");
    title.style.color = "var(--main-yellow)";
    title.innerText = "Order Placed!";
    setTimeout(() => {
      title.style.color = "var(--main-white)";
      title.innerText = "Check Out";
    }, 3000);
  }

  const showOrderBtn = () => (
    <>
      {cartItems.length > 0 ? (
        <button onClick={placeOrder}>{buttonText}</button>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </>
  );

  const amountInCart = cartItemElements.length;
  return (
    <CartContext.Provider
      value={{ cartItemElements, totalCostDisplay, showOrderBtn }}
    >
      <Container height={cartItemElements.length} {...restProps}>
        {/* {children} */}
        <Main {...restProps} className="cart-page">
          <h1>Check out</h1>
          {cartItemElements}
          {amountInCart !== 0 ? (
            <p className="total-cost">Total: {totalCostDisplay()}</p>
          ) : null}
          <div className="order-button">{showOrderBtn()}</div>
        </Main>
      </Container>
    </CartContext.Provider>
  );
}

// CartItems.MainInfo = function CartMainInfo({ children, ...restProps }) {
//   const { cartItemElements, totalCostDisplay, showOrderBtn } =
//     useContext(CartContext);
//   const amountInCart = cartItemElements.length;
//   return (
//     <Main {...restProps} className="cart-page">
//       <h1>Check out</h1>
//       {cartItemElements}
//       {amountInCart !== 0 ? (
//         <p className="total-cost">Total: {totalCostDisplay()}</p>
//       ) : null}
//       <div className="order-button">{showOrderBtn()}</div>
//     </Main>
//   );
// };
