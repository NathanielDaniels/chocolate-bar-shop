import React, { useState, createContext, useContext } from "react";
import { ChocoShop } from "../components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Context } from "../context/Context";
// import { useHover } from '../hooks/useHover';

export const FeatureContext = createContext(null);
export const FeatureModalContext = createContext(null);

type ChocoBar = {
  id: number;
  image: string;
  subTitle: string;
  price: number;
  alt: string;
};
export function ChocoShopContainer() {
  const { allBars, addToCart } = useContext(Context);
  const ChocoShopTotalMenu = allBars;
  const [itemFeature, setItemFeature] = useState(ChocoShopTotalMenu);

  const filterBigBars: ChocoBar[] = ChocoShopTotalMenu.filter(
    (bars: ChocoBar) => bars.price === 5.95
  );
  const filterSmallBars: ChocoBar[] = ChocoShopTotalMenu.filter(
    (bars: ChocoBar) => bars.price === 2.39
  );
  const filterTinyTonys: ChocoBar[] = ChocoShopTotalMenu.filter(
    (bars: ChocoBar) => bars.price === 48.69
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, menu: any) => {
    e.preventDefault();
    setItemFeature(() => menu);
  };

  return (
    <ChocoShop>
      <ChocoShop.SidebarContainer>
        <ChocoShop.SidebarNav>
          <ChocoShop.SidebarNavList>
            <button
              type="button"
              className={itemFeature === ChocoShopTotalMenu ? "active" : ""}
              onClick={(e) => handleClick(e, ChocoShopTotalMenu)}
            >
              All Chocolates
            </button>
            <button
              type="button"
              className={itemFeature === filterBigBars ? "active" : ""}
              onClick={(e) => handleClick(e, filterBigBars)}
            >
              Big Bars
            </button>
            <button
              type="button"
              className={itemFeature === filterSmallBars ? "active" : ""}
              onClick={(e) => handleClick(e, filterSmallBars)}
            >
              Small Bars
            </button>
            <button
              type="button"
              className={itemFeature === filterTinyTonys ? "active" : ""}
              onClick={(e) => handleClick(e, filterTinyTonys)}
            >
              Tiny Tony's
            </button>
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
                    <img src={image} alt={`...loading ${alt}`} />
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
