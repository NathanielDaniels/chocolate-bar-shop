// import { type } from "os";
import { useState, useEffect } from "react";
import React from "react";
import { totalBarData } from "../assets/chocolateBarData";

interface ContextInterface {
  allBars: {
    id: string;
    image: string;
    title: string;
    subTitle: string;
    price: number;
    alt: string;
    about: string;
    contains: string;
    ingredients: string;
    allergies: string;
  }[];
  allPhotos: {
    id: string;
    url: string;
    isFavorite: boolean;
  }[];
  toggleFavorite: (id: string) => void;
  cartItems: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    amount: {};
  }[];
  setCartItems: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        name: string;
        price: number;
        image: string;
        description: string;
        title: string;
        subTitle: string;
        alt: string;
        about: string;
      }[]
    >
  >;
  addToCart: (item: {
    id: string;
    name?: string;
    price: number;
    image: string;
    title: string;
    description?: string;
    amount?: {};
  }) => void;
  removeFromCart: (id: string) => void;
  emptyCart: () => void;
}

const Context = React.createContext<ContextInterface>({
  allBars: [],
  allPhotos: [],
  toggleFavorite: () => {},
  cartItems: [],
  setCartItems: () => {},
  addToCart: () => {},
  removeFromCart: () => {},
  emptyCart: () => {},
});

type PhotoType = {
  id: string;
  url: string;
  isFavorite: boolean;
};

type SetAllPhotosType = React.Dispatch<React.SetStateAction<PhotoType[]>>;

type BarType = {
  id: string;
  image: string;
  title: string;
  subTitle: string;
  price: number;
  alt: string;
  about: string;
  contains: string;
  ingredients: string;
  allergies: string;
};

const ContextProvider: any = ({ children }: any) => {
  const [allBars] = useState<BarType[]>(totalBarData);
  const [allPhotos, setAllPhotos]: [PhotoType[], SetAllPhotosType] = useState(
    JSON.parse(localStorage.getItem("photos") || "[]") || []
  );
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems") || "[]") || []
  );

  type ImageType = {
    id: string;
    url: string;
    isFavorite: boolean;
  };

  useEffect(() => {
    const allImgs: ImageType[] = [];
    const photoStorage = JSON.parse(localStorage.getItem("photos") || "[]");
    allBars.map((item) =>
      allImgs.push({ url: item.image, id: item.id, isFavorite: false })
    );
    return photoStorage.length > 0 ? photoStorage : setAllPhotos(allImgs);
  }, [allBars]);

  function toggleFavorite(id: any) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  }

  useEffect(() => {
    localStorage.setItem("photos", JSON.stringify(allPhotos));
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    if (cartItems.length === 0) {
      localStorage.removeItem("cartItems");
    }
  }, [allPhotos, cartItems]);

  function addToCart(item: any) {
    setCartItems((prevItems: any) => {
      const itemIndex = prevItems.findIndex(
        (cartItem: any) => cartItem.id === item.id
      );
      if (itemIndex !== -1) {
        // Item already exists in cart, increment amount
        const newItems = [...prevItems];
        newItems[itemIndex] = {
          ...newItems[itemIndex],
          amount: newItems[itemIndex].amount + 1,
        };
        return newItems;
      } else {
        // Item does not exist in cart, add it with amount of 1
        return [...prevItems, { ...item, amount: 1 }];
      }
    });
  }

  function removeFromCart(id?: any) {
    // console.log(id);
    if (id) {
      setCartItems((prevItems: any) =>
        prevItems.filter((item: any) => item.id !== id)
      );
    } else {
      setCartItems([]);
      sessionStorage.setItem("cartAmount", JSON.stringify({}));
    }
    const updatedCartItems = cartItems.filter((item: any) => item.id !== id);
    const updatedCartAmount = updatedCartItems.reduce(
      (total: any, item: any) => {
        // console.log({ total, item  });
        // console.log(`${total[item.id]} = ${total[item.id]} + ${item.amount}`);
        total[item.id] = (total[item.id] || 0) + item.amount;
        return total;
      },
      {}
    );
    sessionStorage.setItem("cartAmount", JSON.stringify(updatedCartAmount));
  }

  function emptyCart() {
    setCartItems([]);
  }

  return (
    <Context.Provider
      value={{
        allBars,
        allPhotos,
        toggleFavorite,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
