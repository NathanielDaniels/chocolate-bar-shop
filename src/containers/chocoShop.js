import React, {useState, useEffect, useContext, createContext} from 'react';
import { NavLink } from 'react-router-dom';
import { ChocoShop } from '../components';
import { bigBars, smallBars, tinyTonys } from '../components/chocoShop';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export const FeatureContext = createContext();
export const FeatureModalContext = createContext();

//? All Chocolates
const ChocoShopTotalMenu = bigBars.concat(smallBars).concat(tinyTonys);

//? Filtered Chocolates by size
// const filterBigBars = ChocoShopTotalMenu.filter((bars) => bars.price === "$5.95");
// const filterSmallBars = ChocoShopTotalMenu.filter((bars) => bars.price === "$2.39");
// const filterTinyTonys = ChocoShopTotalMenu.filter((bars) => bars.price === "$48.69");


export function ChocoShopContainer() {
  //? State for Chocolate Menu
  const [itemFeature, setItemFeature] = useState(ChocoShopTotalMenu);
  const [item, setItem] = useState('');

  // console.log("item", item)
  
  useEffect(() => {
    console.log("item", item)
  }, [item])

  function modalFeature(chocolate) {
      // console.log("modalFeature:", chocolate.currentTarget.children[0].firstChild)
      setItem(chocolate)
      
      console.log("item", item)
      console.log("chocolate", chocolate.target)


      return (
         <ChocoShop.MenuItem key={chocolate.title + chocolate.price}>
            <img src={chocolate.image} loading="lazy" alt={chocolate.alt}/>
            {/* {chocolate.currentTarget.children[0].firstChild} */}
            <p>{chocolate.title}</p>
            <p>{chocolate.subTitle}</p>
            <div>
              <p>{chocolate.price}</p>
              <AddCircleOutlineIcon style={{ fontSize: 35 }}/>
            </div>
          </ChocoShop.MenuItem>
      )
    }

  return (
    <ChocoShop>
      <ChocoShop.SidebarContainer>
      <ChocoShop.SidebarNav />
        <ChocoShop.SidebarNav>
          <ul>
            {/* <NavLink 
                to="#"
                activeClassName="active"
                onClick={(e) => {
                  e.preventDefault()
                  setItemFeature(ChocoShopTotalMenu)
                }}
              >
                All Chocolates
              </NavLink> */}
            {/* <NavLink 
                to="#"
                activeClassName="active"
                onClick={(e) => {
                  e.preventDefault()
                  setItemFeature(bigBars)
                }}
              >
                Big Bars
              </NavLink> */}
            {/* <NavLink 
                to="/ChocoShop"
                activeClassName="active"
                onClick={(e) => {
                  e.preventDefault()
                  setItemFeature(smallBars)
                }}
              >
                Small Bars
              </NavLink> */}
            {/* <NavLink 
                to="/ChocoShop"
                activeClassName="active"
                onClick={(e) => {
                  e.preventDefault()
                  setItemFeature(tinyTonys)
                }}
              >
               Tiny Tony's
              </NavLink> */}
            <a href="#" onClick={(e) => {
              e.preventDefault()
              setItemFeature(ChocoShopTotalMenu)
            }}>
              <li>All Chocolate</li>
            </a>
            <a href="#" onClick={(e) => {
              e.preventDefault()
              setItemFeature(bigBars)
            }}>
              <li>Big Bars</li>
            </a>
            <a href="/ChocoShop" onClick={(e) => {
              e.preventDefault()
              setItemFeature(smallBars)
            }}>
              <li>Small Bars</li>
            </a>
            <a href="/ChocoShop" onClick={(e) => {
              e.preventDefault()
              setItemFeature(tinyTonys)
            }}>
              <li>Tiny Tony's</li>
            </a>
          </ul>
        </ChocoShop.SidebarNav>
      </ChocoShop.SidebarContainer>

      <ChocoShop.MainMenuContainer>
        <ChocoShop.MainMenu>
          <ul>
            {itemFeature.map((chocolate) => {
              return (
                <ChocoShop.MenuItem onClick={(chocolate) => modalFeature(chocolate.target)} item={chocolate} key={chocolate.title + chocolate.price}>
                  <a>
                    <img src={ chocolate.image } loading="lazy" alt={ chocolate.alt }/>
                    <p>{ chocolate.title }</p>
                    <p>{ chocolate.subTitle }</p>
                    <div>
                      <p>{ chocolate.price }</p>
                      <AddCircleOutlineIcon style={{ fontSize: 35, color: "var(--main-red)", cursor: "pointer"}}/>
                    </div>
                  </a>
                </ChocoShop.MenuItem>
              )
            })}
          </ul>
        </ChocoShop.MainMenu>
      </ChocoShop.MainMenuContainer>

      <ChocoShop.ChocoSelectModal item={ item } />

    </ChocoShop>
  )
}