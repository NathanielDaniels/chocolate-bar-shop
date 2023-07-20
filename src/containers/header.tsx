import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Header } from "../components";
import { Context } from "../context/Context";
import * as ROUTES from "../constants/routes";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { defineElement } from "lord-icon-element";
import lottie from "lottie-web";

// register lottie and define custom element
defineElement(lottie.loadAnimation);

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "lord-icon": any;
    }
  }
}

export function HeaderContainer() {
  const { cartItems } = useContext(Context);
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("authUser") as string) || {}
  );
  const [isSignedOut] = useState<boolean>(() => {
    const storedValue = localStorage.getItem("isSignedOut");
    return storedValue ? JSON.parse(storedValue) : true;
  });

  useEffect(() => {
    if (isSignedOut) {
      setUserData({});
    } else {
      setUserData(JSON.parse(localStorage.getItem("authUser") as string) || {});
    }
  }, [isSignedOut, setUserData]);

  const cartCount = () => {
    const totalItems = cartItems.reduce(
      (total, item) =>
        total + (typeof item.amount === "number" ? item.amount : 0),
      0
    );
    if (cartItems.length > 0) {
      return <span className="cartCount">{totalItems}</span>;
    }
    return null;
  };

  type LordIconTrigger =
    | "hover"
    | "click"
    | "loop"
    | "loop-on-hover"
    | "morph"
    | "morph-two-way";

  type LordIconColors = {
    primary?: string;
    secondary?: string;
  };

  type LordIconProps = {
    src?: string;
    className?: string;
    trigger?: LordIconTrigger;
    colors?: LordIconColors;
    style?: React.CSSProperties;
    hover?: LordIconColors;
    title?: string;
    // colors?: LordIconColors;
    // delay?: number;
    size?: number;
  };

  const LordIcon: React.FC<LordIconProps> = ({
    src,
    className,
    trigger,
    colors,
    hover,
    style,
    title,
    size,
  }) => {
    return (
      <lord-icon
        src={src}
        className={className}
        trigger={trigger}
        colors={`primary:${colors?.primary}, secondary:${colors?.secondary}`}
        title={title}
        style={style}
        size={size}
        hover={`primary:${hover?.primary}, secondary:${hover?.secondary}`}
      />
    );
  };

  const ListItem = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => {
    return (
      <Header.MenuListItem>
        <NavLink to={to} exact={true} activeClassName="active">
          {children}
        </NavLink>
      </Header.MenuListItem>
    );
  };

  return (
    <Header>
      <Header.Menu>
        <Header.MenuList>
          <ListItem to={ROUTES.HOME}>Our Mission</ListItem>
          <ListItem to={ROUTES.JOIN_IN}>Join In</ListItem>
          <ListItem to={ROUTES.CHOCOSHOP}>ChocoShop</ListItem>
          <ListItem to={ROUTES.PROFILE}>
            <LordIcon
              src="https://cdn.lordicon.com/bhfjfgqz.json"
              className="profileIcon"
              trigger="hover"
              hover={{ primary: "blue", secondary: "#000" }}
              colors={{ primary: "#fff", secondary: "yellow" }}
              title={
                userData ? `${userData.displayName}'s Profile` : "User Profile"
              }
              size={35}
              style={{ color: "blue" }}
            />
          </ListItem>

          {/* Hide when No Items In Cart */}
          {cartItems.length > 0 ? (
            <ListItem to={ROUTES.CART}>
              <div className="cartInfo">
                <ShoppingCartIcon />
                {cartCount()}
              </div>
            </ListItem>
          ) : null}
        </Header.MenuList>
      </Header.Menu>
    </Header>
  );
}
