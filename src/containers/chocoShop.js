import React, { useState, createContext, useContext, useRef } from "react";
import { NavLink } from "react-router-dom";
import { ChocoShop } from "../components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Context } from "../context/Context";
// import { useHover } from '../hooks/useHover';

export const FeatureContext = createContext();
export const FeatureModalContext = createContext();

export function ChocoShopContainer() {
  const { allBars, addToCart } = useContext(Context);
  // const { allBars, cartItems, addToCart} = useContext(Context);

  const ChocoShopTotalMenu = allBars;

  //? Filtered Chocolates by size
  const filterBigBars = ChocoShopTotalMenu.filter(
    (bars) => bars.price === 5.95
  );
  const filterSmallBars = ChocoShopTotalMenu.filter(
    (bars) => bars.price === 2.39
  );
  const filterTinyTonys = ChocoShopTotalMenu.filter(
    (bars) => bars.price === 48.69
  );

  //? State for Chocolate Menu
  const [itemFeature, setItemFeature] = useState(ChocoShopTotalMenu);
  const [activeMenu, setActiveMenu] = useState("All Chocolates");

  return (
    <ChocoShop>
      <ChocoShop.SidebarContainer>
        <ChocoShop.SidebarNav>
          <ChocoShop.SidebarNavList>
            <a
              className={activeMenu === "All Chocolates" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setItemFeature(() => ChocoShopTotalMenu);
                setActiveMenu(() => "All Chocolates");
              }}
            >
              All Chocolates
            </a>
            <a
              className={activeMenu === "Big Bars" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setItemFeature(() => filterBigBars);
                setActiveMenu(() => "Big Bars");
              }}
            >
              Big Bars
            </a>
            <a
              className={activeMenu === "Small Bars" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setItemFeature(() => filterSmallBars);
                setActiveMenu(() => "Small Bars");
              }}
            >
              Small Bars
            </a>
            <a
              className={activeMenu === "Tiny Tony's" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setItemFeature(() => filterTinyTonys);
                setActiveMenu(() => "Tiny Tony's");
              }}
            >
              Tiny Tony's
            </a>
          </ChocoShop.SidebarNavList>
        </ChocoShop.SidebarNav>
      </ChocoShop.SidebarContainer>

      <ChocoShop.MainMenuContainer>
        <ChocoShop.MainMenu>
          <ChocoShop.MenuList>
            {itemFeature.map((chocolate) => {
              const { id, image, title, subTitle, price, alt } = chocolate;
              return (
                <ChocoShop.MenuItem key={id}>
                  <ChocoShop.Link item={chocolate} key={id}>
                    <img src={image} loading="lazy" alt={`...loading ${alt}`} />
                  </ChocoShop.Link>
                  <p>{title}</p>
                  <p>{subTitle}</p>
                  <div>
                    <p>${price}</p>
                    <AddCircleOutlineIcon
                      className="addToCardBtn"
                      onClick={() => {
                        let randomId = id * Math.floor(Math.random() * 999);
                        addToCart({
                          id: randomId,
                          image: image,
                          title: title,
                          price: price,
                        });
                      }}
                      style={{
                        fontSize: 35,
                        color: "var(--main-red)",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </ChocoShop.MenuItem>
              );
            })}
          </ChocoShop.MenuList>
        </ChocoShop.MainMenu>
      </ChocoShop.MainMenuContainer>

      <ChocoShop.ChocoSelectModal />
    </ChocoShop>
  );
}
