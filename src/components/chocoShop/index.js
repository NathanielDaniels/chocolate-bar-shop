import React, { useRef, useState, useEffect, useContext, createContext } from 'react';
import { Container, SidebarContainer, SidebarNav, MainMenuContainer, MainMenu, MenuItem, ChocoSelectModal } from './styles/chocoShop';

export const FeatureContext = createContext();

export default function ChocoShop({children, ...restProps}) {
  const [showModal, setShowModal] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  const [isClicked, setIsClicked] = useState(false)

  return (
    <FeatureContext.Provider value={showModal, setShowModal, itemFeature, setItemFeature, isClicked, setIsClicked}>
      <Container {...restProps}>{children}</Container>;
    </FeatureContext.Provider>
  )
};

ChocoShop.SidebarContainer = function ChocoShopSidebarContainer({ children, ...restProps}) {
   
  return <SidebarContainer {...restProps}>{children}</SidebarContainer>;
}

ChocoShop.SidebarNav = function ChocoShopSidebarNav({ref, children, ...restProps}) {

  const sidebarRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', function() {
      const elem = sidebarRef.current;
      // console.log(elem)
      elem.classList.toggle("sticky", window.scrollY > 0);
    });
  }, []);
  return <SidebarNav ref={sidebarRef} {...restProps}>{children}</SidebarNav>;
}

ChocoShop.MainMenuContainer = function ChocoShopMainMenu({children, ...restProps}) {
  return <MainMenuContainer {...restProps}>{children}</MainMenuContainer>;
}

ChocoShop.MainMenu = function ChocoShopMainMenu({children, ...restProps}) {
  return <MainMenu {...restProps}>{children}</MainMenu>;
}

ChocoShop.MenuItem = function ChocoShopMenuItem({children, ...restProps}) {
  const { setShowModal, setItemFeature } = useContext(FeatureContext);
  // const modal = useRef(null) 

  //  useEffect(() => {
  //   const newModal = modal.current
  //   console.log(newModal)
  //   newModal.addEventListener('click', function() {
  //     console.log("clicked!")
      
  //   });
  // }, []);
  return (
    <MenuItem 
      onClick={() => {
        setShowModal(true)
      }} 
      {...restProps}>{children}</MenuItem>
  );
}

ChocoShop.ChocoSelectModal = function ChocoShopChocoSelectModal({ children, ...restProps}) {
  return <ChocoSelectModal {...restProps}>{children}</ChocoSelectModal>;
}

