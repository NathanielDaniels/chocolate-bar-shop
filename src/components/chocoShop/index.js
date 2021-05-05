import React, { useRef, useState, useEffect, useContext, createContext } from 'react';
import { Container, SidebarContainer, SidebarNav, MainMenuContainer, MainMenu, MenuItem, ChocoSelectModal } from './styles/chocoShop';

export const FeatureModalContext = createContext();

export const bigBars = [
  {
    title: "Milk Chocolate 32%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    image: "./img/big-bars/milk-chocolate-bar-red.png",
    alt: "Milk Chocolate Bar"
  },
  {
    title: "Milk Hazelnut 32%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    image: "./img/big-bars/milk-chocolate-hazelnut-green.png",
    alt: "Milk Chocolate Hazelnut Bar"
  },
  {
    title: "Milk Caramel Sea Salt 32%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    image: "./img/big-bars/milk-chocolate-seasalt-caramel-orange.png",
    alt: "Milk Caramel Sea Salt Bar"
  },
  {
    title: "Milk Honey Almond Nougat 32%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    image: "./img/big-bars/chocolate-honey-almond-nougat-yellow.png",
    alt: "Milk Honey Almond Nougat"
  },
  {
    title: "Dark Almond Sea Salt 51%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    image: "./img/big-bars/chocolate-almond-seasalt-limegreen.png",
    alt: "Dark Almond Sea Salt"
  },
  {
    title: "Dark Pecan Coconut 51%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    image: "./img/big-bars/dark-chocolate-pecan-coconut-teal.png" ,
    alt: "Dark Pecan Coconut"
  },
  {
    title: "Dark Chocolate 70%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    image: "./img/big-bars/dark-chocolate-blue.png"  ,
    alt: "Dark Chocolate"
  },
  {
    title: "Dark Milk Pretzel Toffee 42%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    image: "./img/big-bars/dark-milk-chocolate-pretzel-toffee-purple.png"  ,
    alt: "Dark Milk Pretzel Toffee"
  },
  {
    title: "White Raspberry Popping Candy 28%",
    subTitle: "6.35oz, 1 bar",
    price: "$5.95",
    image: "./img/big-bars/white-raspberry-popping-candy-pink.png"  ,
    alt: "White Raspberry Popping Candy"
  },
       
];

export const smallBars = [
   {
    title: "Milk Chocolate 32%",
    subTitle: "1.8oz, 1 bar",
    price: "$2.39",
    image: "./img/small-bars/milk-chocolate-small-red.png"  ,
    alt: "Milk Chocolate"
  },
  {
    title: "Milk Caramel Sea Salt 32%",
    subTitle: "1.8oz, 1 bar",
    price: "$2.39",
    image: "./img/small-bars/milk-caramel-sea-salt-small-orange.png"  ,
    alt: "Milk Caramel Sea Salt"
  },
  {
    title: "Dark Chocolate 70%",
    subTitle: "1.8oz, 1 bar",
    price: "$2.39",
    image:"./img/small-bars/dark-chocolate-small-blue.png",
    alt: "Dark Chocolate"
  },      
];

export const tinyTonys = [
  {
    title: "Milk Chocolate 32% Tiny Tony's",
    subTitle: "100 pieces",
    price: "$48.69",
    image:"./img/tiny-tonys/milk-chocolate/milk-chocolate-mini-open-small.png",
    alt: "Milk Chocolate"
  },
  {
    title: "Milk Caramel Sea Salt 32% Tiny Tony's",
    subTitle: "100 pieces",
    price: "$48.69",
    image:"./img/tiny-tonys/milk-chocolate-caramel-seasalt/milk-chocolate-caramel-open.png" ,
    alt: "Milk Chocolate Caramel Sea Salt Tiny Tony's"
  },
  {
    title: "Dark Chocolate 70% Tiny Tony's",
    subTitle: "100 pieces",
    price: "$48.69",
    image:"./img/tiny-tonys/dark-chocolate/dark-chocolate-mini-open-large.png"  ,
    alt: "Dark Chocolate Tiny Tony's"
  },
];

export default function ChocoShop({children, ...restProps}) {
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState('');

  return (
    <FeatureModalContext.Provider value={{ showModal, setShowModal, item, setItem }}>
      <Container { ...restProps }>{ children }</Container>;
    </FeatureModalContext.Provider>
  )
};

//? Left Side Menu ===========================================

ChocoShop.SidebarContainer = function ChocoShopSidebarContainer({ children, ...restProps }) {
  return <SidebarContainer { ...restProps }>{ children }</SidebarContainer>;
}

ChocoShop.SidebarNav = function ChocoShopSidebarNav({ ref, children, ...restProps }) {

  //? Menu moves on scroll
  const sidebarRef = useRef( null );
  useEffect(() => {
    window.addEventListener('scroll', function() {
      const elem = sidebarRef.current;
      elem.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);

  return (
    <SidebarNav ref={ sidebarRef } { ...restProps }>{ children }</SidebarNav>
  );
}

//? Right Side Menu ============================================

ChocoShop.MainMenuContainer = function ChocoShopMainMenu({ children, ...restProps }) {
  return <MainMenuContainer { ...restProps }>{ children }</MainMenuContainer>;
}

ChocoShop.MainMenu = function ChocoShopMainMenu({ children, ...restProps }) {
  return <MainMenu { ...restProps }>{ children }</MainMenu>;
}

ChocoShop.MenuItem = function ChocoShopMenuItem({ children, ...restProps }) {
  const { showModal, setShowModal, setItem } = useContext(FeatureModalContext);
  const menuItem = useRef(null) 

   useEffect(() => {
    const MenuItems = menuItem.current
    MenuItems.addEventListener('click', function() {
      setShowModal(true)
    });
  }, []);
  return (
    <MenuItem ref={ menuItem } { ...restProps }>{ children }</MenuItem>
  );
}

ChocoShop.ChocoSelectModal = function ChocoShopChocoSelectModal({ item, ref, children, ...restProps }) {
  const { showModal, setShowModal } = useContext(FeatureModalContext);
  const modal = useRef(null)
  const activeModal = modal.current;

  console.log("item shown", item)

  useEffect(() => {
    showModal && (activeModal.style.display = "block");
  }, [showModal])

  return (
    <ChocoSelectModal ref={ modal } { ...restProps }>
      <button 
        onClick={() => {
          activeModal.style.display = "none";
          setShowModal(false)
        }}>
        Close
      </button>
      <h1>Test</h1>

      {item && <img src={item.attributes[0].nodeValue} loading="lazy" alt={item.alt}/>}
      <p>{item.title}</p>
      <p>{item.subTitle}</p>
      <div>
        <p>{item.price}</p>
        {/* <AddCircleOutlineIcon style={{ fontSize: 35}}/> */}
      </div>
    </ChocoSelectModal>
  );
}

