import { useEffect, useState, useContext } from 'react';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

export default function addToCart(target) {
  // const [content, setContent] = useState([]);

  

  useEffect(() => {
    itemFeature.map((chocolate) => {
      <AddCircleOutlineIcon 
        onClick={() => {
          // console.log("clicked add to cart")
          addToCart({
            id: chocolate.id,
            image: chocolate.image,
            title: chocolate.title,
            price: chocolate.price,
          })
        }} 
        style={{ fontSize: 35, color: "var(--main-red)", cursor: "pointer"}}
      />
    })
  }, [])

  return 
}

