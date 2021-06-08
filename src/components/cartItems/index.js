import React, {useState, useContext, createContext} from 'react';
import { Container, CartItem, Main } from './styles/cartItems';
import { Context } from '../../context/Context';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import useHover from "../../hooks/useHover";
// import PropTypes from "prop-types";

export const CartContext = createContext();

export default function CartItems({ children, ...restProps }) {
  const [buttonText, setButtonText] = useState("Place Order");
  const {cartItems, emptyCart} = useContext(Context);
  const {removeFromCart} = useContext(Context);
  // const [hovered, ref] = useHover();

  const itemCost = cartItems.map(item => item.price);
  const cartTotal = itemCost.length > 0 ? itemCost.reduce((a,b) => a + b) : [];
  const totalCostDisplay = itemCost.length > 0 ? cartTotal.toLocaleString("en-US", { style: "currency", currency: "USD" }) : '$0';
  
  // ? Switch between Trash Icons
  // function trashHover() {
  //   if (hovered) {
  //     return <DeleteForeverIcon />
  //   } else {
  //     return <DeleteIcon />
  //   };
  // }

  const cartItemElements = cartItems.map(item => (
      <CartItem key={ item.id } item={ item }>
        <div className="cart-item">
          <i 
            // className="trashHover"
            onClick={() => removeFromCart(item.id)}
            // ref={ref}
          >
            {/* {trashHover()} */}
            <DeleteForeverIcon/>
          </i>
          <img src={item.image} width="130px" alt={item.id}/>
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      </CartItem>
  ))

  function placeOrder() {
    const orderButton = document.querySelector(".order-button > button");
    orderButton.style.backgroundColor = "lightgray";
    setButtonText("Ordering...");
    setTimeout(() => {
      orderButton.style.backgroundColor = "#fff";
      setButtonText("Place Order");
      changeCartTitle();
      emptyCart();
    }, 1500)
  }

  function changeCartTitle() {
    const title = document.querySelector(".cart-page > h1");
    title.style.color = "var(--main-yellow)";
    title.innerText = "Order Placed!";
    setTimeout(() => {
      title.style.color = "var(--main-white)";
      title.innerText = "Check Out";
    }, 3000)
  }

  const showOrderBtn = () => (
    cartItems.length > 0 
    ? <button onClick={placeOrder}>{buttonText}</button> 
    : <p>You have no items in your cart.</p>
  )

  return (
    <CartContext.Provider value={{ cartItemElements, totalCostDisplay, showOrderBtn }}>
      <Container height={cartItemElements.length} { ...restProps }>{ children }</Container>
    </CartContext.Provider>
  )
}

CartItems.MainInfo = function CartMainInfo({ children, ...restProps }) {
  const { cartItemElements, totalCostDisplay, showOrderBtn } = useContext(CartContext);

  return (
    <Main { ...restProps } className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      <div className="order-button">
        {showOrderBtn()}
      </div>
    </Main>
  )
}

