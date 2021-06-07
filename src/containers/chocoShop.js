import React, {useState, useEffect, createContext, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { ChocoShop } from '../components';
import { Image } from '../components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Context } from '../context/Context';
import { useHover } from '../hooks/useHover'
// import { FooterContainer } from './footer'

export const FeatureContext = createContext();
export const FeatureModalContext = createContext();

export function ChocoShopContainer() {
  // const [hovered, ref] = useHover(null);
  const { allBars, cartItems, addToCart} = useContext(Context);
  // console.log("allBars", allBars)

  const ChocoShopTotalMenu = allBars;

  //? Filtered Chocolates by size
  const filterBigBars = ChocoShopTotalMenu.filter((bars) => bars.price === "$5.95");
  const filterSmallBars = ChocoShopTotalMenu.filter((bars) => bars.price === "$2.39");
  const filterTinyTonys = ChocoShopTotalMenu.filter((bars) => bars.price === "$48.69");

  //? State for Chocolate Menu
  const [itemFeature, setItemFeature] = useState(ChocoShopTotalMenu);
  const [item, setItem] = useState({});

  useEffect(() => {
    console.log("selected Chocolate Item State", item)
    console.log("cart Items:", cartItems)
  },[item])

  return (
    <ChocoShop>
      <ChocoShop.SidebarContainer>
      {/* <ChocoShop.SidebarNav /> */}
        <ChocoShop.SidebarNav>
          <ChocoShop.SidebarNavList>
            <NavLink 
              exact to="/ChocoShop"
              activeClassName="active"
              onClick={(e) => {
                e.preventDefault()
                setItemFeature(() => ChocoShopTotalMenu)
                // setItemFeature(allBars)
              }}
            >
              All Chocolates
            </NavLink>

            <NavLink 
              to="/ChocoShop/big"
              activeClassName="active"
              onClick={(e) => {
                e.preventDefault()
                setItemFeature(() => filterBigBars)
              }}
            >
              Big Bars
            </NavLink>

            <NavLink 
              to="/ChocoShop/small"
              activeClassName="active"
              onClick={(e) => {
                e.preventDefault()
                setItemFeature(() => filterSmallBars)
              }}
            >
              Small Bars
            </NavLink>

            <NavLink 
              to="/ChocoShop/tiny"
              activeClassName="active"
              onClick={(e) => {
                e.preventDefault()
                setItemFeature(() => filterTinyTonys)
              }}
            >
              Tiny Tony's
            </NavLink>

          </ChocoShop.SidebarNavList>
        </ChocoShop.SidebarNav>
      </ChocoShop.SidebarContainer>

      <ChocoShop.MainMenuContainer>
        <ChocoShop.MainMenu>
          <ChocoShop.MenuList>
            {itemFeature.map((chocolate) => {
              return (
                <ChocoShop.MenuItem 
                  // onClick={(chocolate) => modalFeature(chocolate.target)} 
                  item={chocolate} 
                  key={chocolate.title + chocolate.price}
                >
                  <ChocoShop.Link>
                    <img
                      src={ chocolate.image } 
                      loading="lazy" 
                      alt={ `...loading &{chocolate.alt}` }
                    />
                    <p>{ chocolate.title }</p>
                    <p>{ chocolate.subTitle }</p>
                    <div>
                      <p>{ chocolate.price }</p>
                      <AddCircleOutlineIcon 
                        onClick={() => {
                          console.log("clicked add to cart")
                          // setItem(chocolate)
                          // setItem({
                          //   id: chocolate.id,
                          //   image: chocolate.image,
                          //   title: chocolate.title,
                          //   price: chocolate.price,
                          // })
                          addToCart({
                            id: chocolate.id,
                            image: chocolate.image,
                            title: chocolate.title,
                            price: chocolate.price,
                          })
                        }} 
                        style={{ fontSize: 35, color: "var(--main-red)", cursor: "pointer"}}
                      />
                    </div>
                  </ChocoShop.Link>
                </ChocoShop.MenuItem>
              )
            })}
          </ChocoShop.MenuList>
        </ChocoShop.MainMenu>
      {/* { FooterContainer() } */}
      </ChocoShop.MainMenuContainer>

      <ChocoShop.ChocoSelectModal 
        // item={ item } 
      />
    </ChocoShop>
  )
}