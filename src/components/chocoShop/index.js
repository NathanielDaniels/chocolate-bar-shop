import React, { useRef, useState, useEffect, useContext, createContext } from 'react';
// import ReactDOM from 'react-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { 
  Container, 
  SidebarContainer, 
  SidebarNav,
  SidebarNavList,
  MainMenuContainer, 
  MainMenu,
  MenuList,
  MenuItem,
  Link,
  ChocoSelectModal, 
  ChocoModalContent 
} from './styles/chocoShop';

export const FeatureModalContext = createContext();



// export const bigBars = [
//   {
  //     image: "./img/big-bars/milk-chocolate-bar-red.png",
//     title: "Milk Chocolate 32%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     alt: "Milk Chocolate Bar",
//     about: "Not just a classic milk chocolate bar, but our classic chocolate bar. It was the first bar we ever made, back in 2005. We gave it a screaming red wrapper to attract attention to our main mission - 100% slave-free chocolate.",
//     contains: "Belgian milk chocolate. Cocoa solids: 32% minimum. Made in Belgium.",
//     ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, soy lecithin",
//     allergies: "May contain traces of Wheat, Eggs, Peanuts and Tree nuts."
//   },
//   {
//     title: "Milk Hazelnut 32%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/milk-chocolate-hazelnut-green.png",
//     alt: "Milk Chocolate Hazelnut Bar",
//     about: "This flavor is a perfect combo of 32% Fairtrade milk chocolate and a minimum of 10% hazelnuts. Did you know that we hid a map of Western Africa in our unequally divided bar? We couldn't fit whole hazelnuts into the pieces that represent Togo and Benin! After a very heated debate, we completely and politically incorrectly combined two separate countries into one bigger piece so we could use whole hazelnuts.",
//     contains: "Belgian milk chocolate with hazelnut. Cocoa solids: 32% minimum. Made in Belgium.",
//     ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, soy lecithin",
//     allergies: "May contain traces of Wheat, Eggs, Peanuts and Tree nuts."
//   },
//   {
//     title: "Milk Caramel Sea Salt 32%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/milk-chocolate-seasalt-caramel-orange.png",
//     alt: "Milk Caramel Sea Salt Bar",
//     about: "We like to do things differently and this bar is no exception. We took our classic milk chocolate and added crunchy caramel (yea, you heard right) and flakes of sea salt. Sweet and salty never tasted soooo good. Well, at least that’s what our chocofans think. It’s our best seller worldwide!",
//     contains: "Belgian milk chocolate with caramel and sea salt. Cocoa solids: 32% minimum. Made in Belgium.",
//     ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, caramel pieces (sugar, wheat syrup, cream (milk), butter (milk)), sea salt, soy lecithin ",
//     allergies: "May contain traces of Eggs, Peanuts and Tree nuts."
//   },
//   {
//     title: "Milk Honey Almond Nougat 32%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/chocolate-honey-almond-nougat-yellow.png",
//     alt: "Milk Honey Almond Nougat",
//     about: "What's everyone buzzing about? It's our newest classic flavor, milk chocolate honey almond nougat. Creamy milk chocolate with bits of sticky, sweet nougat made from honey and almonds. We put it in bright yellow wrapping and voila.. we have ourselves a full rainbow! We're kind of nuts like that. Nougat the joke?",
//     contains: "Belgian Fairtrade milk chocolate with nougat. Cocoa solids: 32% minimum. Made in Belgium.",
//     ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, soy lecithin",
//     allergies: "May contain traces of Wheat, Eggs, Peanuts and Tree nuts."
//   },
//   {
//     title: "Dark Almond Sea Salt 51%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/chocolate-almond-seasalt-limegreen.png",
//     alt: "Dark Almond Sea Salt",
//     about: "This dark chocolate bar has got it all: almonds and sea salt. A golden match! Pass the salt please...",
//     contains: "Belgian dark chocolate with almond and sea salt. Cocoa solids: 51% minimum. Made in Belgium.",
//     ingredients: "cocoa mass, sugar, almonds, cocoa butter, sea salt, soy lecithin",
//     allergies: "May contain traces of Wheat, Eggs, Peanuts, Milk and Tree nuts."
//   },
//   {
//     title: "Dark Pecan Coconut 51%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/dark-chocolate-pecan-coconut-teal.png",
//     alt: "Dark Pecan Coconut",
//     about: "Coconut and pecans in the mix with dark chocolate. With this bar, you find yourself in a hammock on a sandy beach with swaying palms. Wake me up before you coco!",
//     contains: "Belgian dark chocolate with pecan and coconut. Cocoa solids: 51% minimum. Made in Belgium.",
//     ingredients: "cocoa mass, sugar, cocoa butter, pecans, grated coconut, soy lecithin",
//     allergies: "May contain traces of Wheat, Eggs, Peanuts, Milk and Tree nuts."
//   },
//   {
//     title: "Dark Chocolate 70%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/dark-chocolate-blue.png",
//     alt: "Dark Chocolate",
//     about: "This bar contains at least 70% cacao. Se-ven-ty! This means we use a lot of cocoa beans.. This dark chocolate delicacy is designed for the true chocolate lover.",
//     contains: "Belgian dark chocolate. Cocoa solids: 70% minimum. Made in Belgium.",
//     ingredients: "cocoa mass, sugar, cocoa butter, cocoa powder, soy lecithin",
//     allergies: "May contain traces of Wheat, Eggs, Peanuts, Milk and Tree nuts."
//   },
//   {
//     title: "Dark Milk Pretzel Toffee 42%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/dark-milk-chocolate-pretzel-toffee-purple.png"  ,
//     alt: "Dark Milk Pretzel Toffee",
//     about: "Pretzel? Yummy. Toffee? Yes please. Dark milk chocolate? Say it ain't so! Put crunchy pretzel pieces with a sweet toffee crunch in dark milk chocolate with 42% cocoa, wrap in a purple wrapper and we have ourselves a new flavor!",
//     contains: "Belgian Fairtrade milk chocolate with pretzel crumbs and toffee. Cocoa solids: 42% minimum. Made in Belgium.",
//     ingredients: "sugar, chocolate liquor, dry whole milk, cocoa butter, pretzel crumbs (wheat flour, salt, sunflower oil, malted wheat flour, yeast, acidity regulator (sodium hydroxide)), caramel pieces (sugar, glucose syrup (wheat)), sea salt, soy lecithin",
//     allergies: "May contain traces of Eggs, Peanuts and Tree nuts."
//   },
//   {
//     title: "White Raspberry Popping Candy 28%",
//     subTitle: "6.35oz, 1 bar",
//     price: "$5.95",
//     image: "./img/big-bars/white-raspberry-popping-candy-pink.png",
//     alt: "White Raspberry Popping Candy",
//     about: "Break out your disco balls because our white raspberry popping candy bar is here to get the party started! We mixed creamy, dreamy white chocolate with raspberry and some popping candy to really make this bar pop.",
//     contains: "Belgian Fairtrade white chocolate with freeze-dried raspberry and popping candy. Cocoa solids: 28% minimum. Made in Belgium.",
//     ingredients: "sugar, cocoa butter, dry whole milk, raspberry, popping candy (glucose syrup (corn), sugar, carbon dioxide), soy lecithin",
//     allergies: "May contain traces of Wheat, Eggs, Peanuts and Tree nuts. "
//   },
       
// ];

// export const smallBars = [
//   {
//     title: "Milk Chocolate 32%",
//     subTitle: "1.8oz, 1 bar",
//     price: "$2.39",
//     image: "./img/small-bars/milk-chocolate-small-red.png"  ,
//     alt: "Milk Chocolate",
//     about: "Not just a classic milk chocolate bar, but our classic chocolate bar. It was the first bar we ever made, back in 2005. We gave it a screaming red wrapper to attract attention to our main mission - 100% slave-free chocolate.",
//     contains: "Belgian milk chocolate. Cocoa solids: 32% minimum. Made in Belgium.",
//     ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, soy lecithin",
//     allergies: "May contain traces of Wheat, Eggs, Peanuts and Tree nuts."
//   },
//   {
//     title: "Milk Caramel Sea Salt 32%",
//     subTitle: "1.8oz, 1 bar",
//     price: "$2.39",
//     image: "./img/small-bars/milk-caramel-sea-salt-small-orange.png"  ,
//     alt: "Milk Caramel Sea Salt",
//     about: "We like to do things differently and this bar is no exception. We took our classic milk chocolate and added crunchy caramel (yea, you heard right) and flakes of sea salt. Sweet and salty never tasted soooo good. Well, at least that’s what our chocofans think. It’s our best seller worldwide!",
//     contains: "Belgian milk chocolate with caramel and sea salt. Cocoa solids: 32% minimum. Made in Belgium.",
//     ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, caramel pieces (sugar, wheat syrup, cream (milk), butter (milk)), sea salt, soy lecithin ",
//     allergies: "May contain traces of Eggs, Peanuts and Tree nuts."
//   },
//   {
//     title: "Dark Chocolate 70%",
//     subTitle: "1.8oz, 1 bar",
//     price: "$2.39",
//     image:"./img/small-bars/dark-chocolate-small-blue.png",
//     alt: "Dark Chocolate",
//     about: "This bar contains at least 70% cacao. Se-ven-ty! This means we use a lot of cocoa beans.. This dark chocolate delicacy is designed for the true chocolate lover.",
//     contains: "Belgian dark chocolate. Cocoa solids: 70% minimum. Made in Belgium.",
//     ingredients: "cocoa mass, sugar, cocoa butter, cocoa powder, soy lecithin",
//     allergies: "May contain traces of Wheat, Eggs, Peanuts, Milk and Tree nuts."
//   },      
// ];

// export const tinyTonys = [
//   {
//     title: "Milk Chocolate 32% Tiny Tony's",
//     subTitle: "100 pieces",
//     price: "$48.69",
//     image:"./img/tiny-tonys/milk-chocolate/milk-chocolate-mini-open-small.png",
//     alt: "Milk Chocolate",
//     about: "Not just a classic milk chocolate bar, but our classic chocolate bar. It was the first bar we ever made, back in 2005. We gave it a screaming red wrapper to attract attention to our main mission - 100% slave-free chocolate.",
//     contains: "Belgian milk chocolate. Cocoa solids: 32% minimum. Made in Belgium.",
//     ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, soy lecithin",
//     allergies: "May contain traces of Wheat, Eggs, Peanuts and Tree nuts."
//   },
//   {
//     title: "Milk Caramel Sea Salt 32% Tiny Tony's",
//     subTitle: "100 pieces",
//     price: "$48.69",
//     image:"./img/tiny-tonys/milk-chocolate-caramel-seasalt/milk-chocolate-caramel-open.png" ,
//     alt: "Milk Chocolate Caramel Sea Salt Tiny Tony's",
//     about: "We like to do things differently and this bar is no exception. We took our classic milk chocolate and added crunchy caramel (yea, you heard right) and flakes of sea salt. Sweet and salty never tasted soooo good. Well, at least that’s what our chocofans think. It’s our best seller worldwide!",
//     contains: "Belgian milk chocolate with caramel and sea salt. Cocoa solids: 32% minimum. Made in Belgium.",
//     ingredients: "sugar, dry whole milk, cocoa butter, cocoa mass, caramel pieces (sugar, wheat syrup, cream (milk), butter (milk)), sea salt, soy lecithin ",
//     allergies: "May contain traces of Eggs, Peanuts and Tree nuts."
//   },
//   {
//     title: "Dark Chocolate 70% Tiny Tony's",
//     subTitle: "100 pieces",
//     price: "$48.69",
//     image:"./img/tiny-tonys/dark-chocolate/dark-chocolate-mini-open-large.png"  ,
//     alt: "Dark Chocolate Tiny Tony's",
//     about: "This bar contains at least 70% cacao. Se-ven-ty! This means we use a lot of cocoa beans.. This dark chocolate delicacy is designed for the true chocolate lover.",
//     contains: "Belgian dark chocolate. Cocoa solids: 70% minimum. Made in Belgium.",
//     ingredients: "cocoa mass, sugar, cocoa butter, cocoa powder, soy lecithin",
//     allergies: "May contain traces of Wheat, Eggs, Peanuts, Milk and Tree nuts."
//   },
// ];

export default function ChocoShop({children, ...restProps}) {
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState('');
  const containerRef = useRef('')

  // useEffect(() => {console.log("container ref", containerRef.current)}, [])

  return (
    <FeatureModalContext.Provider value={{ containerRef, showModal, setShowModal, item, setItem }}>
      <Container ref={containerRef} { ...restProps }>{ children }</Container>;
    </FeatureModalContext.Provider>
  )
};

//? Left Side Menu ===========================================

ChocoShop.SidebarContainer = function ChocoShopSidebarContainer({ children, ...restProps }) {
  return <SidebarContainer { ...restProps }>{ children }</SidebarContainer>;
}

ChocoShop.SidebarNav = function ChocoShopSidebarNav({children, ...restProps }) {

  // //? Menu moves on scroll
  const sidebarRef = useRef('');
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      let elem = sidebarRef.current;
      return elem ? (elem.classList.toggle("sticky", window.scrollY > 0)) : '';
    });
  }, []);

  return (
    <SidebarNav 
      ref={ sidebarRef } 
      { ...restProps }
    >
      { children }
    </SidebarNav>
  );
}

ChocoShop.SidebarNavList = function ChocoShopSidebarNavList({children, ...restProps }) {
  return <SidebarNavList { ...restProps }>{ children }</SidebarNavList>
}

//? Right Side Navbar Menu ============================================

ChocoShop.MainMenuContainer = function ChocoShopMainMenu({ children, ...restProps }) {
  return <MainMenuContainer { ...restProps }>{ children }</MainMenuContainer>;
}

ChocoShop.MainMenu = function ChocoShopMainMenu({ children, ...restProps }) {
  return <MainMenu { ...restProps }>{ children }</MainMenu>;
}

ChocoShop.MenuList = function ChocoShopMenuList({ children, ...restProps }) {
  return <MenuList { ...restProps }>{ children }</MenuList>;
}


ChocoShop.MenuItem = function ChocoShopMenuItem({ item, children, ...restProps }) {
  const { setShowModal, setItem } = useContext(FeatureModalContext);
  const menuItem = useRef('') 

   useEffect(() => {
    const MenuItems = menuItem.current
    MenuItems.addEventListener('click', function() {
      setShowModal(true);
      setItem(item);
    });
  }, [item, setItem, setShowModal]);



  return (
    <MenuItem ref={ menuItem } { ...restProps }>{ children }</MenuItem>
  );
}

ChocoShop.Link = function ChocoShopLink({ children, ...restProps }) {
  return <Link { ...restProps }>{ children }</Link>;
}

ChocoShop.ChocoSelectModal = function ChocoShopChocoSelectModal({ ref, children, ...restProps }) {
  const { showModal, setShowModal, item } = useContext(FeatureModalContext);

  
  //? Blur background on showModal
  // useEffect(() => {
  //   const mainContainer = containerRef.current
  //     showModal ? (mainContainer.style.filter = "blur(8px)") : (mainContainer.style.filter = "blur(0px)")
  //   }, [showModal])
    
  //? Remove Scroll when Modal is open
  //   useEffect(() => {
  //   const mainContainer = containerRef.current
  //   console.log("modal container Ref:", mainContainer)
  //   showModal ? (mainContainer.style.overflow = "hidden") : (mainContainer.style.overflow = 'scroll')
  // }, [showModal])

  // console.log("State item:", item)

  return showModal ? (
    <ChocoSelectModal { ...restProps }>
      <ChocoModalContent>

        <button 
          onClick={() => {
            setShowModal(false)
          }}>
          Close
        </button>
      <div className="leftSide">
        <h1>{item.title}</h1>
        <p className="about">{item.about}</p>
      </div>
      <div className="middleSide">
        <img src={item.image} loading="lazy" alt={item.alt}/>
        <div>
          <p>{item.subTitle}</p>
          <div>
            <p>{item.price}</p>
            <AddCircleOutlineIcon style={{ fontSize: 35, color: "var(--main-red)", cursor: "pointer"}}/>
          </div>
        </div>
      </div>
      <div className="rightSide">
        <div>
          <h2>Ingredients:</h2>
          <p>{item.ingredients}</p>
        </div>
        <div>
          <h2>Contains:</h2>
          <p>{item.contains}</p>
        </div>
        <p className="allergies">{item.allergies}</p>
      </div>
      </ChocoModalContent>
      
    </ChocoSelectModal>
  ) 
  : null;
}

