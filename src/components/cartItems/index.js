import React, { useState, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";

import { Container, CartItem, Main } from "./styles/cartItems";
import { Context } from "../../context/Context";
// import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
// import useHover from "../../hooks/useHover";
// import PropTypes from "prop-types";

export const CartContext = createContext();

export default function CartItems({ children, ...restProps }) {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, setCartItems, emptyCart } = useContext(Context);
  const { removeFromCart } = useContext(Context);
  const history = useHistory(); 
  // const [hovered, ref] = useHover();

  // console.log({ cartItems });

  //! Working on this
  // (function addToCart(item) {
  //   setCartItems((prevItems) => {
  //     const itemIndex = prevItems.findIndex(
  //       (prevItem) => prevItem.id === item.id
  //     );
  //     if (itemIndex >= 0) {
  //       // Item already exists in cart, increment quantity
  //       const updatedItems = [...prevItems];
  //       updatedItems[itemIndex].quantity += 1;
  //       return updatedItems;
  //     } else {
  //       // Item does not exist in cart, add it
  //       return [...prevItems, { ...item, quantity: 1 }];
  //     }
  //   });
  // })();

  // const totalItems = cartItems.reduce(
  //   (total, item) => total + item.quantity,
  //   0
  // );

  const totalCostDisplay = () => {
    const itemCost = cartItems.map((item) => item.price);
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

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item}>
      <div className="cart-item">
        <i onClick={() => removeFromCart(item.id)}>
          <DeleteForeverIcon />
        </i>
        <img src={item.image} width="130px" alt={item.id} />
        <p>{item.title}</p>
        <p>${item.price}</p>
      </div>
    </CartItem>
  ));
  // const cartItemElements = cartItems.map((item) => (
  //   <CartItem key={item.id} item={item}>
  //     <div className="cart-item">
  //       <i
  //         onClick={() => removeFromCart(item.id)}
  //       >
  //         <DeleteForeverIcon />
  //       </i>
  //       <img src={item.image} width="130px" alt={item.id} />
  //       <p>{item.title}</p>
  //       <p>${item.price}</p>
  //     </div>
  //   </CartItem>
  // ));

  function placeOrder() {
    const orderButton = document.querySelector(".order-button > button");
    orderButton.style.backgroundColor = "lightgray";
    setButtonText("Ordering...");
    setTimeout(() => {
      orderButton.style.backgroundColor = "#fff";
      setButtonText("Place Order");
      changeCartTitle();
      emptyCart();
      history.push("/Cart");
    }, 1500);
  }

  function changeCartTitle() {
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
