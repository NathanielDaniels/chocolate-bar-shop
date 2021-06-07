import React, {useState, useContext, createContext} from 'react';
import { Container, CartItem, Main } from './styles/cartItems';
import { Context } from '../../context/Context';
import useHover from "../../hooks/useHover";
// import PropTypes from "prop-types";

export const CartContext = createContext();

export default function CartItems({ children, ...restProps }) {
  const [buttonText, setButtonText] = useState("Place Order");
  const {cartItems, emptyCart} = useContext(Context);
  const totalCost = cartItems.length * 5.99;
  const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" });

  console.log(cartItems)

  const [hovered, ref] = useHover();
  const {removeFromCart} = useContext(Context);

  // ? Switch between Trash Icons
  function trashHover() {
    if (hovered) {
      return "ri-delete-bin-fill" 
    } else {
      return "ri-delete-bin-line" 
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
        <img src={item.url} width="130px" alt={item.id}/>
        <p>$5.99</p>
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

// CartItems.Item = function CartItemsItem({ item, children, ...restProps }) {
//   const [hovered, ref] = useHover();
//   const {removeFromCart} = useContext(Context);

//   // ? Switch between Trash Icons
//   function trashHover() {
//     if (hovered) {
//       return "ri-delete-bin-fill" 
//     } else {
//       return "ri-delete-bin-line" 
//     };
//   }

//   CartItem.propTypes = {
//   item: PropTypes.shape({
//     url: PropTypes.string.isRequired
//   })
// } 

//   return (
//     <CartItem { ...restProps }>
//       <div className="cart-item">
//         <i className={trashHover()} 
//           onClick={() => removeFromCart(item.id)}
//           ref={ref}>
//         </i>
//         <img src={item.url} width="130px" alt={item.id}/>
//         <p>$5.99</p>
//       </div>
//       <hr/>
//     </CartItem>
//   )
// }

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

