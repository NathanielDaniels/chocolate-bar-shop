import React, { useRef, useState, useEffect, useContext, createContext } from 'react';
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
// import useHover from "../../hooks/useHover";
// import { Context } from '../../context/Context';

export const FeatureModalContext = createContext();

export default function ChocoShop({children, ...restProps}) {
  const [showModal, setShowModal] = useState(false);
  const [item, setItem] = useState('');
  const containerRef = useRef('')

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

ChocoShop.MenuItem = function ChocoShopMenuItem({ children, ...restProps }) {
  return <MenuItem { ...restProps }>{ children }</MenuItem>;
}

ChocoShop.Link = function ChocoShopLink({ item, children, ...restProps }) {
  const { setShowModal, setItem } = useContext(FeatureModalContext);
  const menuItem = useRef('') 

  useEffect(() => {
    const MenuItems = menuItem.current
    MenuItems.addEventListener('click', function() {
      setShowModal(true);
      setItem(item);
    });
  }, [item, setItem, setShowModal]);

  return <Link 
  ref={ menuItem }
  { ...restProps }
  >
    { children }
  </Link>;
}

ChocoShop.ChocoSelectModal = function ChocoShopChocoSelectModal({ ref, children, ...restProps }) {
  const { showModal, setShowModal, item } = useContext(FeatureModalContext);
  // const { allBars, addToCart} = useContext(Context)
  // const [itemFeature, setItemFeature] = useState(allBars)

  
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
          X
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
              <p>${item.price}</p>
              <AddCircleOutlineIcon style={{ fontSize: 35, color: "var(--main-red)", cursor: "pointer"}}/>
              {/* {itemFeature.map((chocolate) => {
               <AddCircleOutlineIcon 
                  onClick={() => {
                    console.log("clicked add to cart")
                    addToCart({
                      id: chocolate.id,
                      image: chocolate.image,
                      title: chocolate.title,
                      price: chocolate.price,
                    })
                  }} 
                  style={{ fontSize: 35, color: "var(--main-red)", cursor: "pointer"}}
                />
              })} */}
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

