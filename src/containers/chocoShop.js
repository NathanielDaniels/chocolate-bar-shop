import React from 'react';
import { ChocoShop } from '../components'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export function ChocoShopContainer() {
  return (
    <ChocoShop>
      <ChocoShop.SidebarContainer>
        <ChocoShop.SidebarNav>
        <ul>
          <a href="/ChocoShop"><li>All Chocolate</li></a>
          <a href="/ChocoShop"><li>Big Bars</li></a>
          <a href="/ChocoShop"><li>Small Bars</li></a>
          <a href="/ChocoShop"><li>Tiny Tony's</li></a>
          {/* <a href="/ChocoShop"><li>Seasonal</li></a> */}
        </ul>
        </ChocoShop.SidebarNav>
      </ChocoShop.SidebarContainer>

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
                <img src="./img/big-bars/milk-chocolate-seasalt-caramel-orange.png" alt="Milk Caramel Sea Salt Bar"/>
                <p>Milk Caramel Sea Salt 32%</p>
                <p>6.35oz, 1 bar</p>
                <div>
                  <p>$5.95</p>
                  <AddCircleOutlineIcon style={{ fontSize: 35}}/>
                </div>
              </a>
            </li>
            <li>
              <a href="/ChocoShop">
                <img src="./img/big-bars/chocolate-honey-almond-nougat-yellow.png" alt="Milk Honey Almond Nougat"/>
                <p>Milk Honey Almond Nougat 32%</p>
                <p>6.35oz, 1 bar</p>
                <div>
                  <p>$5.95</p>
                  <AddCircleOutlineIcon style={{ fontSize: 35}}/>
                </div>
              </a>
            </li>

             <li>
              <a href="/ChocoShop">
                <img src="./img/big-bars/chocolate-almond-seasalt-limegreen.png" alt="Dark Almond Sea Salt"/>
                <p>Dark Almond Sea Salt 51%</p>
                <p>6.35oz, 1 bar</p>
                <div>
                  <p>$5.95</p>
                  <AddCircleOutlineIcon style={{ fontSize: 35}}/>
                </div>
              </a>
            </li>
             <li>
              <a href="/ChocoShop">
                <img src="./img/big-bars/dark-chocolate-pecan-coconut-teal.png" alt="Dark Pecan Coconut"/>
                <p>Dark Pecan Coconut 51%</p>
                <p>6.35oz, 1 bar</p>
                <div>
                  <p>$5.95</p>
                  <AddCircleOutlineIcon style={{ fontSize: 35}}/>
                </div>
              </a>
            </li>
             <li>
              <a href="/ChocoShop">
                <img src="./img/big-bars/dark-chocolate-blue.png" alt="Dark Chocolate"/>
                <p>Dark Chocolate 70%</p>
                <p>6.35oz, 1 bar</p>
                <div>
                  <p>$5.95</p>
                  <AddCircleOutlineIcon style={{ fontSize: 35}}/>
                </div>
              </a>
            </li>
             <li>
              <a href="/ChocoShop">
                <img src="./img/big-bars/dark-milk-chocolate-pretzel-toffee-purple.png" alt="Dark Milk Pretzel Toffee"/>
                <p>Dark Milk Pretzel Toffee 42%</p>
                <p>6.35oz, 1 bar</p>
                <div>
                  <p>$5.95</p>
                  <AddCircleOutlineIcon style={{ fontSize: 35}}/>
                </div>
              </a>
            </li>

             <li>
              <a href="/ChocoShop">
                <img src="./img/big-bars/white-raspberry-popping-candy-pink.png" alt="White Raspberry Popping Candy"/>
                <p>White Raspberry Popping Candy 28%</p>
                <p>6.35oz, 1 bar</p>
                <div>
                  <p>$5.95</p>
                  <AddCircleOutlineIcon style={{ fontSize: 35}}/>
                </div>
              </a>
            </li>
             <li>
              <a href="/ChocoShop">
                <img src="./img/small-bars/milk-chocolate-small-red.png" alt="Milk Chocolate"/>
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
                <img src="./img/big-bars/chocolate-honey-almond-nougat-yellow.png" alt="Milk Honey Almond Nougat"/>
                <p>Milk Honey Almond Nougat 32%</p>
                <p>6.35oz, 1 bar</p>
                <div>
                  <p>$5.95</p>
                  <AddCircleOutlineIcon style={{ fontSize: 35}}/>
                </div>
              </a>
            </li>
             <li>
              <a href="/ChocoShop">
                <img src="./img/big-bars/chocolate-honey-almond-nougat-yellow.png" alt="Milk Honey Almond Nougat"/>
                <p>Milk Honey Almond Nougat 32%</p>
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