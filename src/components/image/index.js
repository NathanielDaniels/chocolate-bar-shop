import React, {useContext, useState} from "react";
import { Container } from './styles/image';
import { Context } from '../../context/Context';
import useHover from "../../hooks/useHover";
import PropTypes from "prop-types";


export default function Image({className, img, ...restProps}) {
  const [hovered, ref] = useHover(null);
  const { allBars, toggleFavorite, addToCart, removeFromCart, cartItems } = useContext(Context);
  // console.log("allBars image", allBars);

  const ChocoShopTotalMenu = allBars;

  //? Filtered Chocolates by size
  const filterBigBars = ChocoShopTotalMenu.filter((bars) => bars.price === "$5.95");
  const filterSmallBars = ChocoShopTotalMenu.filter((bars) => bars.price === "$2.39");
  const filterTinyTonys = ChocoShopTotalMenu.filter((bars) => bars.price === "$48.69");

  //? State for Chocolate Menu
  const [itemFeature, setItemFeature] = useState(ChocoShopTotalMenu);
  const [item, setItem] = useState({});
  

  // console.log("image className + img", className, img);

  console.log(itemFeature)
  // console.log(ChocoShopTotalMenu)

  
  function heartIcon() {
    if (img.isFavorite) {
      return <i className="ri-heart-fill favorite" title="Favorite" onClick={() => toggleFavorite(img.id)}></i>
    } else if (hovered) {
      return <i className="ri-heart-line favorite" title="Favorite" onClick={() => toggleFavorite(img.id)}></i>
    }
  } 

  function cartIcon() {
    const alreadyInCart = cartItems.find(item => item.id === img.id)
    if (alreadyInCart) {
      return <i className="ri-shopping-cart-fill cart"  onClick={() => removeFromCart(img.id)}></i>
    } else if (hovered) {
      return <i className="ri-add-circle-line cart" title="Add To Cart" onClick={() => addToCart(img)}></i> 
    }
  }

  // return (
  //   {itemFeature.map((chocolate) => {
  //     <img 
  //       src={ chocolate.image } 
  //       loading="lazy" 
  //       alt={ `...loading &{chocolate.alt}` }
  //     />
  //   //   <p>{ chocolate.title }</p>
  //   //   <p>{ chocolate.subTitle }</p>
  //   //   <div>
  //   //     <p>{ chocolate.price }</p>
  //   //     <AddCircleOutlineIcon 
  //   //       onClick={() => {
  //   //         console.log("clicked add to cart")
  //   //         setItem(chocolate)
  //   //       }} 
  //   //       style={{ fontSize: 35, color: "var(--main-red)", cursor: "pointer"}}
  //   //     />
  //   //   </div>
      
  //   })}

    // <Container { ...restProps }>
    //    {/* <div 
    //     className={`${className} image-container`}
    //     ref={ref}
    //   >
    //     <img src={img.url} className="image-grid" alt={`...Loading #${img.id}`}/>
    //     {heartIcon()}
    //     {cartIcon()}
    //   </div> */}
    //   <img 
    //     src={ chocolate.image } 
    //     loading="lazy" 
    //     alt={ `...loading &{chocolate.alt}` }
    //   />
    //   <p>{ chocolate.title }</p>
    //   <p>{ chocolate.subTitle }</p>
    //   <div>
    //     <p>{ chocolate.price }</p>
    //     <AddCircleOutlineIcon 
    //       onClick={() => {
    //         console.log("clicked add to cart")
    //         setItem(chocolate)
    //       }} 
    //       style={{ fontSize: 35, color: "var(--main-red)", cursor: "pointer"}}
    //     />
    //   </div>
    // </Container>
  // )
}

// Image.propTypes = {
//   className: PropTypes.string,
//   img: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     url: PropTypes.string.isRequired,
//     isFavorite: PropTypes.bool
//   }) 
// }

// {itemFeature.map((chocolate) => {
//               return (
//                 <ChocoShop.MenuItem 
//                   // onClick={(chocolate) => modalFeature(chocolate.target)} 
//                   item={chocolate} 
//                   key={chocolate.title + chocolate.price}
//                 >
//                   <ChocoShop.Link>
//                     <img 
//                       src={ chocolate.image } 
//                       loading="lazy" 
//                       alt={ `...loading &{chocolate.alt}` }
//                     />
//                     <p>{ chocolate.title }</p>
//                     <p>{ chocolate.subTitle }</p>
//                     <div>
//                       <p>{ chocolate.price }</p>
//                       <AddCircleOutlineIcon 
//                         onClick={() => {
//                           console.log("clicked add to cart")
//                           setItem(chocolate)
//                         }} 
//                         style={{ fontSize: 35, color: "var(--main-red)", cursor: "pointer"}}
//                       />
//                     </div>
//                   </ChocoShop.Link>
//                 </ChocoShop.MenuItem>
//               )
//             })}