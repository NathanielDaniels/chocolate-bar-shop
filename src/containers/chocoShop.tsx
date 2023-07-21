import React, { useState, createContext, useContext, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
import { ChocoShop } from "../components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Context } from "../context/Context";
import { Loader } from "../components/Loader";

interface CartAmountsType {
  [key: string]: number;
}

type BarType = {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  price: number;
  alt: string;
  about: string;
  contains: string;
  ingredients: string;
  allergies: string;
};

export const AddToCartButton = ({ id, addToCart, selectedItem }: any) => {
  const [cartAmount, setCartAmount] = useState<CartAmountsType>(() => {
    const storedCartAmount = sessionStorage.getItem("cartAmount");
    return storedCartAmount ? JSON.parse(storedCartAmount) : {};
  });

  useEffect(() => {
    sessionStorage.setItem("cartAmount", JSON.stringify(cartAmount));
  }, [cartAmount]);

  const handleItemClick = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    selectedItem: any
  ) => {
    e.preventDefault();
    const { id, image, title, price } = selectedItem;
    // let randomId: any = uuidv4();
    setCartAmount((prevCartAmounts: CartAmountsType) => {
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
      amount: cartAmount[id] || 0,
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
  const { getAllBars, addToCart } = useContext(Context);
  const [allChocoBars, setAllChocoBars] = useState<BarType[]>([]);
  const [featureItems, setFeatureItems] = useState([]);
  const [activeMenu, setActiveMenu] = useState("All Chocolates");
  const [loading, setLoading] = useState(true);

  const bigBarPrice = 5.95;
  const smallBarPrice = 2.39;
  const tinyTonysPrice = 48.69;

  useEffect(() => {
    loading && allChocoBars.length > 0 && setLoading(false);
  }, [loading, allChocoBars]);

  useEffect(() => {
    let isMounted = true;

    getAllBars.then((data: any) => {
      if (isMounted) {
        setAllChocoBars(data);
        if (featureItems.length === 0) {
          setFeatureItems(data);
        }
        setLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [getAllBars, loading, featureItems.length]);

  function chocoFilter(barPrice: number) {
    const filterAllChocoBars = allChocoBars.filter(
      (bars: any) => bars.price === barPrice
    );
    return filterAllChocoBars;
  }

  const filterBigBars = chocoFilter(bigBarPrice);
  const filterSmallBars = chocoFilter(smallBarPrice);
  const filterTinyTonys = chocoFilter(tinyTonysPrice);

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    menu: any,
    active: string
  ) => {
    e.preventDefault();
    setFeatureItems(() => menu);
    setActiveMenu(() => active);
  };

  const NavbarButton = ({
    name,
    selection,
  }: {
    name: string;
    selection: Object[];
  }) => {
    return (
      <button
        type="button"
        className={activeMenu === name ? "active" : ""}
        onClick={(e) => handleMenuItemClick(e, selection, name)}
      >
        {name}
      </button>
    );
  };

  return (
    <>
      <ChocoShop>
        <ChocoShop.SidebarContainer>
          <ChocoShop.SidebarNav>
            <ChocoShop.SidebarNavList>
              <NavbarButton name="All Chocolates" selection={allChocoBars} />
              <NavbarButton name="Big Bars" selection={filterBigBars} />
              <NavbarButton name="Small Bars" selection={filterSmallBars} />
              <NavbarButton name="Tiny Tony's" selection={filterTinyTonys} />
            </ChocoShop.SidebarNavList>
          </ChocoShop.SidebarNav>
        </ChocoShop.SidebarContainer>
        <ChocoShop.MainMenuContainer>
          <ChocoShop.MainMenu>
            <ChocoShop.MenuList>
              {loading ? (
                <ChocoShop.Loading>
                  <Loader currentPage={"chocoShop"} />
                </ChocoShop.Loading>
              ) : (
                featureItems.map((item) => {
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
    </>
  );
}
