import React, {useState, useEffect, createContext, useContext} from 'react';
import { NavLink } from 'react-router-dom';
import { ChocoShop } from '../components';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { Context } from '../context/Context';

export const FeatureContext = createContext();
export const FeatureModalContext = createContext();

export function ChocoShopContainer() {
  const { allBars } = useContext(Context);
  // console.log("allBars", allBars)

  const ChocoShopTotalMenu = allBars

  //? Filtered Chocolates by size
  const filterBigBars = ChocoShopTotalMenu.filter((bars) => bars.price === "$5.95");
  const filterSmallBars = ChocoShopTotalMenu.filter((bars) => bars.price === "$2.39");
  const filterTinyTonys = ChocoShopTotalMenu.filter((bars) => bars.price === "$48.69");

  //? State for Chocolate Menu
  const [itemFeature, setItemFeature] = useState(ChocoShopTotalMenu);
  // const [item, setItem] = useState('');

  // console.log("item Feature", itemFeature);
  
  // useEffect(() => {
  //   console.log("itemfeature", itemFeature)
  // }, [itemFeature])

  // useEffect(() => {

  //   console.log("item", item)
  // },[])
  
  // function modalFeature(chocolate) {
  //     setItem(chocolate)
  //     console.log("chocolate", chocolate)


  //     return (
  //        <ChocoShop.MenuItem key={chocolate.title + chocolate.price}>
  //           <img 
  //             src={chocolate.image} 
  //             loading="lazy" 
  //             alt={chocolate.alt}
  //           />
  //           <p>{chocolate.title}</p>
  //           <p>{chocolate.subTitle}</p>
  //           <div>
  //             <p>{chocolate.price}</p>
  //             <AddCircleOutlineIcon style={{ fontSize: 35 }}/>
  //           </div>
  //         </ChocoShop.MenuItem>
  //     )
  // }

  return (
    <ChocoShop>
      <ChocoShop.SidebarContainer>
      <ChocoShop.SidebarNav />
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
                      <AddCircleOutlineIcon style={{ fontSize: 35, color: "var(--main-red)", cursor: "pointer"}}/>
                    </div>
                  </ChocoShop.Link>
                </ChocoShop.MenuItem>
              )
            })}
          </ChocoShop.MenuList>
        </ChocoShop.MainMenu>
      </ChocoShop.MainMenuContainer>

      <ChocoShop.ChocoSelectModal 
        // item={ item } 
      />
    </ChocoShop>
  )
}