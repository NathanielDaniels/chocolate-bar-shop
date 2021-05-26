import React, {useState, useEffect, createContext} from 'react';
import { NavLink } from 'react-router-dom';
import { ChocoShop } from '../components';
// import { bigBars, smallBars, tinyTonys } from '../components/chocoShop';
// import { allBars } from '../components/chocoShop';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export const FeatureContext = createContext();
export const FeatureModalContext = createContext();

export const allBars = [

  // ? Big Bars ===========================
  {
    image: "./img/big-bars/milk-chocolate-bar-red.png",
    title: "Milk Chocolate 32%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    alt: "Milk Chocolate Bar",
    about: "Not just a classic milk chocolate bar, but our classic chocolate bar. It was the first bar we ever made, back in 2005. We gave it a screaming red wrapper to attract attention to our main mission - 100% slave-free chocolate.",
    contains: "Belgian milk chocolate. Cocoa solids: 32% minimum. Made in Belgium.",
    ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, soy lecithin",
    allergies: "May contain traces of Wheat, Eggs, Peanuts and Tree nuts.",
  },
  {
    image: "./img/big-bars/milk-chocolate-hazelnut-green.png",
    title: "Milk Hazelnut 32%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    alt: "Milk Chocolate Hazelnut Bar",
    about: "This flavor is a perfect combo of 32% Fairtrade milk chocolate and a minimum of 10% hazelnuts. Did you know that we hid a map of Western Africa in our unequally divided bar? We couldn't fit whole hazelnuts into the pieces that represent Togo and Benin! After a very heated debate, we completely and politically incorrectly combined two separate countries into one bigger piece so we could use whole hazelnuts.",
    contains: "Belgian milk chocolate with hazelnut. Cocoa solids: 32% minimum. Made in Belgium.",
    ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, soy lecithin",
    allergies: "May contain traces of Wheat, Eggs, Peanuts and Tree nuts.",
  },
  {
    image: "./img/big-bars/milk-chocolate-seasalt-caramel-orange.png",
    title: "Milk Caramel Sea Salt 32%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    alt: "Milk Caramel Sea Salt Bar",
    about: "We like to do things differently and this bar is no exception. We took our classic milk chocolate and added crunchy caramel (yea, you heard right) and flakes of sea salt. Sweet and salty never tasted soooo good. Well, at least that’s what our chocofans think. It’s our best seller worldwide!",
    contains: "Belgian milk chocolate with caramel and sea salt. Cocoa solids: 32% minimum. Made in Belgium.",
    ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, caramel pieces (sugar, wheat syrup, cream (milk), butter (milk)), sea salt, soy lecithin ",
    allergies: "May contain traces of Eggs, Peanuts and Tree nuts.",
  },
  {
    image: "./img/big-bars/chocolate-honey-almond-nougat-yellow.png",
    title: "Milk Honey Almond Nougat 32%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    alt: "Milk Honey Almond Nougat",
    about: "What's everyone buzzing about? It's our newest classic flavor, milk chocolate honey almond nougat. Creamy milk chocolate with bits of sticky, sweet nougat made from honey and almonds. We put it in bright yellow wrapping and voila.. we have ourselves a full rainbow! We're kind of nuts like that. Nougat the joke?",
    contains: "Belgian Fairtrade milk chocolate with nougat. Cocoa solids: 32% minimum. Made in Belgium.",
    ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, soy lecithin",
    allergies: "May contain traces of Wheat, Eggs, Peanuts and Tree nuts.",
  },
  {
    image: "./img/big-bars/chocolate-almond-seasalt-limegreen.png",
    title: "Dark Almond Sea Salt 51%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    alt: "Dark Almond Sea Salt",
    about: "This dark chocolate bar has got it all: almonds and sea salt. A golden match! Pass the salt please...",
    contains: "Belgian dark chocolate with almond and sea salt. Cocoa solids: 51% minimum. Made in Belgium.",
    ingredients: "cocoa mass, sugar, almonds, cocoa butter, sea salt, soy lecithin",
    allergies: "May contain traces of Wheat, Eggs, Peanuts, Milk and Tree nuts.",
  },
  {
    image: "./img/big-bars/dark-chocolate-pecan-coconut-teal.png",
    title: "Dark Pecan Coconut 51%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    alt: "Dark Pecan Coconut",
    about: "Coconut and pecans in the mix with dark chocolate. With this bar, you find yourself in a hammock on a sandy beach with swaying palms. Wake me up before you coco!",
    contains: "Belgian dark chocolate with pecan and coconut. Cocoa solids: 51% minimum. Made in Belgium.",
    ingredients: "cocoa mass, sugar, cocoa butter, pecans, grated coconut, soy lecithin",
    allergies: "May contain traces of Wheat, Eggs, Peanuts, Milk and Tree nuts.",
  },
  {
    image: "./img/big-bars/dark-chocolate-blue.png",
    title: "Dark Chocolate 70%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    alt: "Dark Chocolate",
    about: "This bar contains at least 70% cacao. Se-ven-ty! This means we use a lot of cocoa beans.. This dark chocolate delicacy is designed for the true chocolate lover.",
    contains: "Belgian dark chocolate. Cocoa solids: 70% minimum. Made in Belgium.",
    ingredients: "cocoa mass, sugar, cocoa butter, cocoa powder, soy lecithin",
    allergies: "May contain traces of Wheat, Eggs, Peanuts, Milk and Tree nuts.",
  },
  {
    image: "./img/big-bars/dark-milk-chocolate-pretzel-toffee-purple.png",
    title: "Dark Milk Pretzel Toffee 42%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    alt: "Dark Milk Pretzel Toffee",
    about: "Pretzel? Yummy. Toffee? Yes please. Dark milk chocolate? Say it ain't so! Put crunchy pretzel pieces with a sweet toffee crunch in dark milk chocolate with 42% cocoa, wrap in a purple wrapper and we have ourselves a new flavor!",
    contains: "Belgian Fairtrade milk chocolate with pretzel crumbs and toffee. Cocoa solids: 42% minimum. Made in Belgium.",
    ingredients: "sugar, chocolate liquor, dry whole milk, cocoa butter, pretzel crumbs (wheat flour, salt, sunflower oil, malted wheat flour, yeast, acidity regulator (sodium hydroxide)), caramel pieces (sugar, glucose syrup (wheat)), sea salt, soy lecithin",
    allergies: "May contain traces of Eggs, Peanuts and Tree nuts.",
  },
  {
    image: "./img/big-bars/white-raspberry-popping-candy-pink.png",
    title: "White Raspberry Popping Candy 28%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    alt: "White Raspberry Popping Candy",
    about: "Break out your disco balls because our white raspberry popping candy bar is here to get the party started! We mixed creamy, dreamy white chocolate with raspberry and some popping candy to really make this bar pop.",
    contains: "Belgian Fairtrade white chocolate with freeze-dried raspberry and popping candy. Cocoa solids: 28% minimum. Made in Belgium.",
    ingredients: "sugar, cocoa butter, dry whole milk, raspberry, popping candy (glucose syrup (corn), sugar, carbon dioxide), soy lecithin",
    allergies: "May contain traces of Wheat, Eggs, Peanuts and Tree nuts.",
  },
  // ? Small Bars ===========================
  {
    image: "./img/small-bars/milk-chocolate-small-red.png",
    title: "Milk Chocolate 32%",
    subTitle: "1.8oz, 1 bar",
    price: "$2.39",
    alt: "Milk Chocolate",
    about: "Not just a classic milk chocolate bar, but our classic chocolate bar. It was the first bar we ever made, back in 2005. We gave it a screaming red wrapper to attract attention to our main mission - 100% slave-free chocolate.",
    contains: "Belgian milk chocolate. Cocoa solids: 32% minimum. Made in Belgium.",
    ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, soy lecithin",
    allergies: "May contain traces of Wheat, Eggs, Peanuts and Tree nuts.",
  },
  {
    image: "./img/small-bars/milk-caramel-sea-salt-small-orange.png",
    title: "Milk Caramel Sea Salt 32%",
    subTitle: "1.8oz, 1 bar",
    price: "$2.39",
    alt: "Milk Caramel Sea Salt",
    about: "We like to do things differently and this bar is no exception. We took our classic milk chocolate and added crunchy caramel (yea, you heard right) and flakes of sea salt. Sweet and salty never tasted soooo good. Well, at least that’s what our chocofans think. It’s our best seller worldwide!",
    contains: "Belgian milk chocolate with caramel and sea salt. Cocoa solids: 32% minimum. Made in Belgium.",
    ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, caramel pieces (sugar, wheat syrup, cream (milk), butter (milk)), sea salt, soy lecithin ",
    allergies: "May contain traces of Eggs, Peanuts and Tree nuts.",
  },
  {
    image:"./img/small-bars/dark-chocolate-small-blue.png",
    title: "Dark Chocolate 70%",
    subTitle: "1.8oz, 1 bar",
    price: "$2.39",
    alt: "Dark Chocolate",
    about: "This bar contains at least 70% cacao. Se-ven-ty! This means we use a lot of cocoa beans.. This dark chocolate delicacy is designed for the true chocolate lover.",
    contains: "Belgian dark chocolate. Cocoa solids: 70% minimum. Made in Belgium.",
    ingredients: "cocoa mass, sugar, cocoa butter, cocoa powder, soy lecithin",
    allergies: "May contain traces of Wheat, Eggs, Peanuts, Milk and Tree nuts.",
  },
  // ? Tiny Bars ===========================
   {
     image:"./img/tiny-tonys/milk-chocolate/milk-chocolate-mini-open-small.png",
    title: "Milk Chocolate 32% Tiny Tony's",
    subTitle: "100 pieces",
    price: "$48.69",
    alt: "Milk Chocolate",
    about: "Not just a classic milk chocolate bar, but our classic chocolate bar. It was the first bar we ever made, back in 2005. We gave it a screaming red wrapper to attract attention to our main mission - 100% slave-free chocolate.",
    contains: "Belgian milk chocolate. Cocoa solids: 32% minimum. Made in Belgium.",
    ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, soy lecithin",
    allergies: "May contain traces of Wheat, Eggs, Peanuts and Tree nuts.",
  },
  {
    image:"./img/tiny-tonys/milk-chocolate-caramel-seasalt/milk-chocolate-caramel-open.png",
    title: "Milk Caramel Sea Salt 32% Tiny Tony's",
    subTitle: "100 pieces",
    price: "$48.69",
    alt: "Milk Chocolate Caramel Sea Salt Tiny Tony's",
    about: "We like to do things differently and this bar is no exception. We took our classic milk chocolate and added crunchy caramel (yea, you heard right) and flakes of sea salt. Sweet and salty never tasted soooo good. Well, at least that’s what our chocofans think. It’s our best seller worldwide!",
    contains: "Belgian milk chocolate with caramel and sea salt. Cocoa solids: 32% minimum. Made in Belgium.",
    ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, caramel pieces (sugar, wheat syrup, cream (milk), butter (milk)), sea salt, soy lecithin ",
    allergies: "May contain traces of Eggs, Peanuts and Tree nuts.",
  },
  {
    image:"./img/tiny-tonys/dark-chocolate/dark-chocolate-mini-open-large.png",
    title: "Dark Chocolate 70% Tiny Tony's",
    subTitle: "100 pieces",
    price: "$48.69",
    alt: "Dark Chocolate Tiny Tony's",
    about: "This bar contains at least 70% cacao. Se-ven-ty! This means we use a lot of cocoa beans.. This dark chocolate delicacy is designed for the true chocolate lover.",
    contains: "Belgian dark chocolate. Cocoa solids: 70% minimum. Made in Belgium.",
    ingredients: "cocoa mass, sugar, cocoa butter, cocoa powder, soy lecithin",
    allergies: "May contain traces of Wheat, Eggs, Peanuts, Milk and Tree nuts."
  },
]

//? All Chocolates
// const ChocoShopTotalMenu = bigBars.concat(smallBars).concat(tinyTonys);
const ChocoShopTotalMenu = allBars


//? Filtered Chocolates by size
const filterBigBars = ChocoShopTotalMenu.filter((bars) => bars.price === "$5.95");
const filterSmallBars = ChocoShopTotalMenu.filter((bars) => bars.price === "$2.39");
const filterTinyTonys = ChocoShopTotalMenu.filter((bars) => bars.price === "$48.69");


export function ChocoShopContainer() {
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