import React from 'react';
import { ChocoShop } from '../components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export function ChocoShopContainer() {
  return (
    <ChocoShop>
      <ChocoShop.MenuContainer>
        <ChocoShop.MenuNav>
        <ul>
          <a href="/ChocoShop"><li>All Chocolate</li></a>
          <a href="/ChocoShop"><li>Big Bars</li></a>
          <a href="/ChocoShop"><li>Small Bars</li></a>
          <a href="/ChocoShop"><li>Tiny Tony's</li></a>
          <a href="/ChocoShop"><li>Seasonal</li></a>
        </ul>
        </ChocoShop.MenuNav>
      </ChocoShop.MenuContainer>

      <ChocoShop.MainMenuContainer>
        <ChocoShop.MainMenu>
          <ul>
            <li>
              <a href="/ChocoShop">
                <img src="./img/big-bars/milk-chocolate-bar-red.png" alt="Milk Chocolate Bar"/>
                <p>Milk Chocolate 32%</p>
                <p>6.35oz, 1 bar</p>
                <div>
                  <p>$5.95</p>
                  <AddCircleOutlineIcon style={{ fontSize: 35}}/>
                </div>
              </a>
            </li>
            <li>
              <a href="/ChocoShop">
                <img src="./img/big-bars/milk-chocolate-hazelnut-green.png" alt="Milk Chocolate Hazelnut Bar"/>
                <p>Milk Hazelnut 32%</p>
                <p>6.35oz, 1 bar</p>
                <div>
                  <p>$5.95</p>
                  <AddCircleOutlineIcon style={{ fontSize: 35}}/>
                </div>
              </a>
            </li>
            <li>
              <a href="/ChocoShop">
                <img src="./img/big-bars/milk-chocolate-seasalt-caramel-orange.png" alt="Milk Chocolate sea salt caramel Bar"/>
                <p>Milk Chocolate Caramel Sea Salt 32%</p>
                <p>6.35oz, 1 bar</p>
                <div>
                  <p>$5.95</p>
                  <AddCircleOutlineIcon style={{ fontSize: 35}}/>
                </div>
              </a>
            </li>
            <li>
              <a href="/ChocoShop">
                <img src="./img/big-bars/milk-chocolate-bar-red.png" alt="Milk Chocolate Bar"/>
                <p>Milk Chocolate 32%</p>
                <p>6.35oz, 1 bar</p>
                <div>
                  <p>$5.95</p>
                  <AddCircleOutlineIcon style={{ fontSize: 35}}/>
                </div>
              </a>
            </li>
            
          </ul>
        </ChocoShop.MainMenu>
      </ChocoShop.MainMenuContainer>
      
    </ChocoShop>
  )
}