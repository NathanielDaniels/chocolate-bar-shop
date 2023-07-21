import React, { useRef, useEffect } from "react";
import { Container, Menu, MenuList, MenuListItem } from "./styles/header";

export default function Header({ children, ...restProps }) {
  const headerDom = useRef("");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const elem = headerDom.current;
      if (elem) {
        if (window.innerWidth > 800) {
          elem.classList.toggle("sticky", window.scrollY > 0);
        } else {
          elem.classList.add("sticky");
        }
      }
    });
  }, []);

  return (
    <Container ref={headerDom} {...restProps}>
      {children}
    </Container>
  );
}

const handleClick = (e) => {
  e.preventDefault();
  window.scrollTo(0, 0);
};

Header.Menu = function HeaderMenu({ children, ...restProps }) {
  return <Menu {...restProps}>{children}</Menu>;
};

Header.MenuList = function HeaderMenuList({ children, ...restProps }) {
  return <MenuList {...restProps}>{children}</MenuList>;
};

Header.MenuListItem = function HeaderMenuListItem({ children, ...restProps }) {
  return (
    <MenuListItem onClick={handleClick} {...restProps}>
      {children}
    </MenuListItem>
  );
};
