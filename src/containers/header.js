import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../components";
import { Context } from "../context/Context.tsx";
import * as ROUTES from "../constants/routes";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

export function HeaderContainer() {
  const { cartItems } = useContext(Context);

  const cartCount = () => {
    const totalItems = cartItems.reduce(
      (total, item) => total + item.amount,
      0
    );
    if (cartItems.length > 0) {
      return <span className="cartCount">{totalItems}</span>;
    }
  };

  return (
    <Header>
      <Header.Menu>
        <Header.MenuList>
          <Header.MenuListItem>
            <NavLink exact to={ROUTES.HOME} activeClassName="active">
              Our Mission
            </NavLink>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <NavLink to={ROUTES.JOIN_IN} activeClassName="active">
              Join In
            </NavLink>
          </Header.MenuListItem>
          <Header.MenuListItem>
            <NavLink to={ROUTES.CHOCOSHOP} activeClassName="active">
              Chocoshop
            </NavLink>
          </Header.MenuListItem>

          {/* Hide when No Items In Cart */}
          {cartItems.length > 0 ? (
            <Header.MenuListItem>
              <NavLink to={ROUTES.CART}>
                <div className="cartInfo">
                  {cartCount()}
                  <ShoppingCartIcon />
                </div>
              </NavLink>
            </Header.MenuListItem>
          ) : null}
        </Header.MenuList>
      </Header.Menu>
    </Header>
  );
}
