import React, {useState, useEffect, useContext, createContext} from 'react';
import { ChocoShop } from '../components';
import { bigBars, smallBars, tinyTonys } from '../components/chocoShop';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export const FeatureContext = createContext();

//? All Chocolates
const ChocoShopTotalMenu = bigBars.concat(smallBars).concat(tinyTonys);

//? Filtered Chocolates by size
// const filterBigBars = ChocoShopTotalMenu.filter((bars) => bars.price === "$5.95");
// const filterSmallBars = ChocoShopTotalMenu.filter((bars) => bars.price === "$2.39");
// const filterTinyTonys = ChocoShopTotalMenu.filter((bars) => bars.price === "$48.69");


export function ChocoShopContainer() {
  //? State for Chocolate Menu
  const [itemFeature, setItemFeature] = useState(ChocoShopTotalMenu);
  // console.log("item Feature : sidebar nav", itemFeature);

  return (
    <ChocoShop>

      <ChocoShop.SidebarContainer>
      <ChocoShop.SidebarNav />
        <ChocoShop.SidebarNav>
          <ul>
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
        {console.log("main menu component", itemFeature)}
          <ul>
            {itemFeature.map((chocolate) => {
              return (
                <ChocoShop.MenuItem key={chocolate.title + chocolate.price}>
                  <a href="#ChocoShop">
                    <img src={chocolate.image} loading="lazy" alt={chocolate.alt}/>
                    <p>{chocolate.title}</p>
                    <p>{chocolate.subTitle}</p>
                    <div>
                      <p>{chocolate.price}</p>
                      <AddCircleOutlineIcon style={{ fontSize: 35}}/>
                    </div>
                  </a>
                </ChocoShop.MenuItem>
              )
            })}
          </ul>
        </ChocoShop.MainMenu>
      </ChocoShop.MainMenuContainer>

      <ChocoShop.ChocoSelectModal>
        <img src="./img/small-bars/milk-chocolate-small-red.png" alt="Milk Chocolate"/>
        <p>Milk Chocolate 32%</p>
        <p>1.8oz, 1 bar</p>
        <div>
          <p>$2.39</p>
          <AddCircleOutlineIcon style={{ fontSize: 35}}/>
        </div>
      </ChocoShop.ChocoSelectModal>

    </ChocoShop>
  )
}