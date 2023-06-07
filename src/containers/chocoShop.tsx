import * as React from "react";
import { useState, createContext, useContext } from "react";
// import { v4 as uuidv4 } from "uuid";
import { ChocoShop } from "../components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Context } from "../context/Context";
// import { useHover } from '../hooks/useHover';

// interface Cart {
//   id?: string;
//   amount: number;
// }

export const FeatureContext = createContext(null);
export const FeatureModalContext = createContext(null);
export function ChocoShopContainer() {
  const { allBars, addToCart } = useContext(Context);
  const ChocoShopTotalMenu = allBars;
  const [itemFeature, setItemFeature] = useState(ChocoShopTotalMenu);
  const [activeMenu, setActiveMenu] = useState("All Chocolates");
  const [cartAmount, setCartAmount] = useState<CartAmounts>({});
  // const [currentId, setCurrentId] = useState("");
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
    return () => {
      setLoading(false);
    };
  }, []);

  // const filterBigBars: ChocoBar[] = ChocoShopTotalMenu.filter((bars: ChocoBar[]) =>
  //   bars.filter((bar) => bar.price === 5.95)
  // );
  const filterBigBars = ChocoShopTotalMenu.filter(
    (bars) => bars.price === 5.95
  );
  const filterSmallBars = ChocoShopTotalMenu.filter(
    (bars) => bars.price === 2.39
  );
  const filterTinyTonys = ChocoShopTotalMenu.filter(
    (bars) => bars.price === 48.69
  );

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    menu: any,
    active: string
  ) => {
    e.preventDefault();
    setItemFeature(() => menu);
    setActiveMenu(() => active);
  };

  interface CartAmounts {
    [key: string]: number;
  }

  const handleChocolateClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    chocolate: any
  ) => {
    e.preventDefault();
    const { id, image, title, price } = chocolate;
    // cartAmount.id === id && setCurrentId(id);
    // let randomId: any = uuidv4();
    setCartAmount((prevCartAmounts: CartAmounts) => {
      const prevAmount = prevCartAmounts[id] || 0;
      return {
        ...prevCartAmounts,
        [id]: prevAmount + 1,
      };
    });
    addToCart({
      id,
      image,
      title,
      price,
      amount: cartAmount || 0,
      // prevAmount,
    });
  };

  return (
    <ChocoShop>
      <ChocoShop.SidebarContainer>
        <ChocoShop.SidebarNav>
          <ChocoShop.SidebarNavList>
            <button
              type="button"
              className={activeMenu === "All Chocolates" ? "active" : ""}
              onClick={(e) =>
                handleMenuItemClick(e, ChocoShopTotalMenu, "All Chocolates")
              }
            >
              All Chocolates
            </button>
            <button
              type="button"
              className={activeMenu === "Big Bars" ? "active" : ""}
              onClick={(e) => handleMenuItemClick(e, filterBigBars, "Big Bars")}
            >
              Big Bars
            </button>
            <button
              type="button"
              className={activeMenu === "Small Bars" ? "active" : ""}
              onClick={(e) =>
                handleMenuItemClick(e, filterSmallBars, "Small Bars")
              }
            >
              Small Bars
            </button>
            <button
              type="button"
              className={activeMenu === "Tiny Tony's" ? "active" : ""}
              onClick={(e) =>
                handleMenuItemClick(e, filterTinyTonys, "Tiny Tony's")
              }
            >
              Tiny Tony's
            </button>
          </ChocoShop.SidebarNavList>
        </ChocoShop.SidebarNav>
      </ChocoShop.SidebarContainer>
      <ChocoShop.MainMenuContainer>
        <ChocoShop.MainMenu>
          <ChocoShop.MenuList>
            {loading ? (
              itemFeature.map((chocolate) => {
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
                      {cartAmount.hasOwnProperty(id) ? (
                        <span>
                          <AddShoppingCartIcon
                            className="addToCartBtn"
                            onClick={(e) => handleChocolateClick(e, chocolate)}
                            style={{
                              fontSize: 35,
                              color: "var(--main-red)",
                              cursor: "pointer",
                            }}
                          />
                          <div className="cartAmount" key={id}>
                            <p>{cartAmount[id]}</p>
                          </div>
                        </span>
                      ) : (
                        <AddCircleOutlineIcon
                          className="addToCartBtn"
                          onClick={(e) => {
                            handleChocolateClick(e, chocolate);
                          }}
                          style={{
                            fontSize: 35,
                            color: "var(--main-red)",
                            cursor: "pointer",
                          }}
                        />
                      )}
                    </div>
                  </ChocoShop.MenuItem>
                );
              })
            ) : (
              // <ChocoShop.Loading>
              <div className="loading">
                <h1>Loading...</h1>
              </div>
              // </ChocoShop.Loading>
            )}
          </ChocoShop.MenuList>
        </ChocoShop.MainMenu>
      </ChocoShop.MainMenuContainer>
      <ChocoShop.ChocoSelectModal />
    </ChocoShop>
  );
}
