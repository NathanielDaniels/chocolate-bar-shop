import React, {useState, useContext, createContext} from 'react';
import { Container, CartItem, Main } from './styles/cartItems';
import { Context } from '../../context/Context';
import useHover from "../../hooks/useHover";
// import PropTypes from "prop-types";
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

export const CartContext = createContext();

export default function CartItems({ children, ...restProps }) {
  const [buttonText, setButtonText] = useState("Place Order");
  const {cartItems, emptyCart} = useContext(Context);
  const [hovered, ref] = useHover();
  const {removeFromCart} = useContext(Context);
  const totalCost = cartItems.length * 5.99;
  const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });

  // const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // const itemCost = cartItems.map(item => item.reduce(reducer));
  const itemCost = cartItems.map(item => item.price);
  // const total = Object.values(itemCost).reduce((t, n) => t + n)



  // const splitTotal = [itemCost.split('$')]


  // const totalCost = cartItems.length * ;

  // console.log("cartItems: ",cartItems)
  console.log("itemCost: ", itemCost)
  console.log("itemCost: ", itemCost.reduce((a,b) => a + b))

  // ? Switch between Trash Icons
  // function trashHover() {
  //   if (hovered) {
  //     return "ri-delete-bin-fill" 
  //   } else {
  //     return "ri-delete-bin-line" 
  //   };
  // }
  function trashHover() {
    if (hovered) {
      return {DeleteForeverIcon}
    } else {
      return {DeleteIcon}
    };
  }

  // console.log(totalCost)

  // const cartItemElements = cartItems.map(item => (
  //     <CartItem key={ item.id } item={ item } />
  // ))

  const cartItemElements = cartItems.map(item => (
      <CartItem key={ item.id } item={ item }>
        <div className="cart-item">
        <i className={trashHover()} 
          onClick={() => removeFromCart(item.id)}
          ref={ref}>
        </i>
        <img src={item.image} width="130px" alt={item.id}/>
        <p>{item.title}</p>
        <p>{item.price}</p>
        </div>
        <hr/>
      </CartItem>
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
    <CartContext.Provider value={{ cartItemElements, totalCostDisplay, showOrderBtn }}>
      <Container { ...restProps }>{ children }</Container>
    </CartContext.Provider>
  )
}

CartItems.MainInfo = function CartMainInfo({ children, ...restProps }) {
  const { cartItemElements, totalCostDisplay, showOrderBtn } = useContext(CartContext);

  // console.log("cartItemElements", cartItemElements)

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

