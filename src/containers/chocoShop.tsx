import * as React from "react";
import { useState, createContext, useContext } from "react";
// import { v4 as uuidv4 } from "uuid";
import { ChocoShop } from "../components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Context } from "../context/Context";
import { Loader } from "../components/Loader";

interface CartAmounts {
  [key: string]: number;
}

export const AddToCartButton = ({ id, addToCart, selectedItem }: any) => {
  const [cartAmount, setCartAmount] = useState<CartAmounts>(() => {
    const storedCartAmount = sessionStorage.getItem("cartAmount");
    return storedCartAmount ? JSON.parse(storedCartAmount) : {};
  });

  React.useEffect(() => {
    sessionStorage.setItem("cartAmount", JSON.stringify(cartAmount));
  }, [cartAmount]);

  const handleItemClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    selectedItem: any
  ) => {
    e.preventDefault();
    const { id, image, title, price } = selectedItem;
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
    });
  };
  return (
    <>
      {cartAmount.hasOwnProperty(id) ? (
        <span>
          <AddShoppingCartIcon
            className="addToCartBtn"
            onClick={(e) => handleItemClick(e, selectedItem)}
            style={{
              fontSize: 35,
              color: "var(--main-red)",
              cursor: "pointer",
            }}
          />
          <span className="cartAmount" key={id}>
            <p>{cartAmount[id]}</p>
          </span>
        </span>
      ) : (
        <AddCircleOutlineIcon
          className="addToCartBtn"
          onClick={(e) => {
            handleItemClick(e, selectedItem);
          }}
          style={{
            fontSize: 35,
            color: "var(--main-red)",
            cursor: "pointer",
          }}
        />
      )}
    </>
  );
};
export const FeatureContext = createContext(null);
export const FeatureModalContext = createContext(null);

export function ChocoShopContainer() {
  const { allBars, addToCart } = useContext(Context);
  const ChocoShopTotalMenu = allBars;
  const [itemFeature, setItemFeature] = useState(ChocoShopTotalMenu);
  const [activeMenu, setActiveMenu] = useState("All Chocolates");
  const [loading, setLoading] = useState(true);

  React.useEffect(() => {
    loading &&
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    // return () => {
    //   setLoading(true);
    // };
  }, [loading]);

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
              <ChocoShop.Loading>
                <Loader />
              </ChocoShop.Loading>
            ) : (
              itemFeature.map((item) => {
                const { id, image, title, subTitle, price, alt } = item;
                return (
                  <ChocoShop.MenuItem key={id}>
                    <ChocoShop.Link item={item} key={id}>
                      <img src={image} alt={`...loading ${alt}`} />
                    </ChocoShop.Link>
                    <p className="title">{title}</p>
                    <p className="subTitle">{subTitle}</p>
                    <div>
                      <p>${price}</p>
                      <AddToCartButton
                        id={id}
                        addToCart={addToCart}
                        selectedItem={item}
                      />
                    </div>
                  </ChocoShop.MenuItem>
                );
              })
            )}
          </ChocoShop.MenuList>
        </ChocoShop.MainMenu>
      </ChocoShop.MainMenuContainer>
      <ChocoShop.ChocoSelectModal loading={setLoading} />
    </ChocoShop>
  );
}
