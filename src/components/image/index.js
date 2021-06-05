import React, {useContext} from "react";
import { Container } from './styles/image';
import { Context } from '../../context/Context';
import useHover from "../../hooks/useHover";
import PropTypes from "prop-types";


export default function Image({...restProps}) {

  function Image({className, img}) {
    const [hovered, ref] = useHover(null);
    const { allBars, toggleFavorite, addToCart, removeFromCart, cartItems } = useContext(Context);

    console.log("allBars image", allBars)
    
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

    return (
      <Container { ...restProps }>
         <div 
          className={`${className} image-container`}
          ref={ref}
        >
          <img src={img.url} className="image-grid" alt={`...Loading #${img.id}`}/>
          {heartIcon()}
          {cartIcon()}
        </div>
      </Container>
    )
  }
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool
  }) 
}