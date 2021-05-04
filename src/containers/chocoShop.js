import React from 'react';
import { ChocoShop } from '../components';
import { bigBars, smallBars, tinyTonys } from '../components/chocoShop'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';



// const bigBars = [
//   {
//     title: "Milk Chocolate 32%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/milk-chocolate-bar-red.png",
//     alt: "Milk Chocolate Bar"
//   },
//   {
//     title: "Milk Hazelnut 32%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/milk-chocolate-hazelnut-green.png",
//     alt: "Milk Chocolate Hazelnut Bar"
//   },
//   {
//     title: "Milk Caramel Sea Salt 32%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/milk-chocolate-seasalt-caramel-orange.png",
//     alt: "Milk Caramel Sea Salt Bar"
//   },
//   {
//     title: "Milk Honey Almond Nougat 32%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/chocolate-honey-almond-nougat-yellow.png",
//     alt: "Milk Honey Almond Nougat"
//   },
//   {
//     title: "Dark Almond Sea Salt 51%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/chocolate-almond-seasalt-limegreen.png",
//     alt: "Dark Almond Sea Salt"
//   },
//   {
//     title: "Dark Pecan Coconut 51%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/dark-chocolate-pecan-coconut-teal.png" ,
//     alt: "Dark Pecan Coconut"
//   },
//   {
//     title: "Dark Chocolate 70%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/dark-chocolate-blue.png"  ,
//     alt: "Dark Chocolate"
//   },
//   {
//     title: "Dark Milk Pretzel Toffee 42%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/dark-milk-chocolate-pretzel-toffee-purple.png"  ,
//     alt: "Dark Milk Pretzel Toffee"
//   },
//   {
//     title: "White Raspberry Popping Candy 28%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/white-raspberry-popping-candy-pink.png"  ,
//     alt: "White Raspberry Popping Candy"
//   },
       
// ];

// const smallBars = [
//    {
//     title: "Milk Chocolate 32%",
//     subTitle: "1.8oz, 1 bar",
//     price: "$2.39",
//     image: "./img/small-bars/milk-chocolate-small-red.png"  ,
//     alt: "Milk Chocolate"
//   },
//   {
//     title: "Milk Caramel Sea Salt 32%",
//     subTitle: "1.8oz, 1 bar",
//     price: "$2.39",
//     image: "./img/small-bars/milk-caramel-sea-salt-small-orange.png"  ,
//     alt: "Milk Caramel Sea Salt"
//   },
//   {
//     title: "Dark Chocolate 70%",
//     subTitle: "1.8oz, 1 bar",
//     price: "$2.39",
//     image:"./img/small-bars/dark-chocolate-small-blue.png",
//     alt: "Dark Chocolate"
//   },      
// ]

// const tinyTonys = [
//   {
//     title: "Milk Chocolate 32% Tiny Tony's",
//     subTitle: "100 pieces",
//     price: "$48.69",
//     image:"./img/tiny-tonys/milk-chocolate/milk-chocolate-mini-open-small.png",
//     alt: "Milk Chocolate"
//   },
//   {
//     title: "Milk Caramel Sea Salt 32% Tiny Tony's",
//     subTitle: "100 pieces",
//     price: "$48.69",
//     image:"./img/tiny-tonys/milk-chocolate-caramel-seasalt/milk-chocolate-caramel-open.png" ,
//     alt: "Milk Chocolate Caramel Sea Salt Tiny Tony's"
//   },
//   {
//     title: "Dark Chocolate 70% Tiny Tony's",
//     subTitle: "100 pieces",
//     price: "$48.69",
//     image:"./img/tiny-tonys/dark-chocolate/dark-chocolate-mini-open-large.png"  ,
//     alt: "Dark Chocolate Tiny Tony's"
//   },
// ]

const ChocoShopTotalMenu = bigBars.concat(smallBars).concat(tinyTonys)


export function ChocoShopContainer() {
  return (
    <ChocoShop>

      <ChocoShop.SidebarContainer>
      <ChocoShop.SidebarNav />
        {/* <ChocoShop.SidebarNav>
          <ul>
            <a href="/ChocoShop"><li>All Chocolate</li></a>
            <a href="/ChocoShop"><li>Big Bars</li></a>
            <a href="/ChocoShop"><li>Small Bars</li></a>
            <a href="/ChocoShop"><li>Tiny Tony's</li></a>
          </ul>
        </ChocoShop.SidebarNav> */}
      </ChocoShop.SidebarContainer>

      <ChocoShop.MainMenuContainer>
        <ChocoShop.MainMenu>
          <ul>
            {ChocoShopTotalMenu.map((chocolate) => {
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