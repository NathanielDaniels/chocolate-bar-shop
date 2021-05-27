import React, {useState, useContext} from 'react';
import { Container, CartItem, Main } from './styles/cartItems';
import { Context } from '../../context/Context'

export default function CartItems({ children, ...restProps }) {
  const [buttonText, setButtonText] = useState("Place Order");
  const {cartItems, emptyCart} = useContext(Context);
  const totalCost = cartItems.length * 5.99;
  const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });

  const cartItemElements = cartItems.map(item => (
      <CartItem key={ item.id } item={ item } />
  ))

  function placeOrder() {
    const orderButton = document.querySelector(".order-button > button")
    orderButton.style.backgroundColor = "lightgray"
    setButtonText("Ordering...")
    setTimeout(() => {
      orderButton.style.backgroundColor = "#fff"
      setButtonText("Place Order")
      changeCartTitle()
      emptyCart()
    }, 1500)
  }

  function changeCartTitle() {
    const title = document.querySelector(".cart-page > h1")
    title.style.color = "green"
    title.innerText = "Order Placed!"
    setTimeout(() => {
      title.style.color = "black"
      title.innerText = "Check Out"
    }, 3000)
  }

  const showOrderBtn = () => (
    cartItems.length > 0 
    ? <button onClick={placeOrder}>{buttonText}</button> 
    : <p>You have no items in your cart.</p>
  )
  return (
    <Container { ...restProps }>{ children }</Container>
  )
}

CartItems.MainInfo = function CartMainInfo({ totalCostDisplay, cartItemElements, showOrderBtn, children, ...restProps }) {
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

