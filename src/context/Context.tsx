// import { type } from "os";
import { useState, useEffect } from "react";
import React from "react";
// import { totalBarData } from "../assets/chocolateBarData";
import { totalBarData } from "../assets/chocolateBarData";
// import { totalBarData, products } from "../assets/chocolateBarData";

interface ContextInterface {
  getAllBars: any;
  // allBars: {
  //   id: string;
  //   image: string;
  //   title: string;
  //   subTitle: string;
  //   price: number;
  //   alt: string;
  //   about: string;
  //   contains: string;
  //   ingredients: string;
  //   allergies: string;
  // }[];
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
  getAllBars: [],
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
  const [allChocoBars, setAllChocoBars] = useState<BarType[]>([]);
  const [allPhotos, setAllPhotos]: [PhotoType[], SetAllPhotosType] = useState(
    JSON.parse(localStorage.getItem("photos") || "[]") || []
  );
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems") || "[]") || []
  );

  const getAllBars = new Promise((resolve) => {
    setTimeout(() => {
      resolve(totalBarData);
    }, 1000);
  });

  getAllBars.then((data: any) => {
    setAllChocoBars(data);
  });

  type ImageType = {
    id: string;
    url: string;
    isFavorite: boolean;
  };

  useEffect(() => {
    const allImgs: ImageType[] = [];
    const photoStorage = JSON.parse(localStorage.getItem("photos") || "[]");
    allChocoBars.map((item) =>
      allImgs.push({ url: item.image, id: item.id, isFavorite: false })
    );
    return photoStorage.length > 0 ? photoStorage : setAllPhotos(allImgs);
  }, [allChocoBars]);

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
  }, [allPhotos]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    if (cartItems.length === 0) {
      localStorage.removeItem("cartItems");
      sessionStorage.removeItem("cartAmount");
    }

    const updatedCartAmount = cartItems.reduce((total: any, item: any) => { 
      total[item.id] = (total[item.id] || 0) + item.amount;
      return total;
    }, {});
    sessionStorage.setItem("cartAmount", JSON.stringify(updatedCartAmount));
  }, [cartItems]);

  // useEffect(() => {
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //   if (cartItems.length === 0) {
  //     localStorage.removeItem("cartItems");
  //     sessionStorage.removeItem("cartAmount");
  //   }
  // }, [cartItems]);

  function addToCart(item: any) {
    setCartItems((prevItems: any) => {
      const itemIndex: any = prevItems.findIndex(
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
  //! Working to pull cart amounts from sessionStorage
  // useEffect(() => {
  //   const updatedCartAmounts = cartItems.map((item: any) => {
  //     const { id, amount } = item;
  //     return item.amount
  //       ? { id: id, amount: amount }
  //       : { ...item.id, amount: 0 };
  //   });
  // }, [cartItems]);

  function removeFromCart(id?: any) {
    if (id) {
      setCartItems((prevItems: any) =>
        prevItems.filter((item: any) => item.id !== id)
      );
    } else {
      setCartItems([]);
      sessionStorage.removeItem("cartAmount");
      localStorage.removeItem("cartItems");
    }
    const updatedCartItems = cartItems.filter((item: any) => item.id !== id);
    const updatedCartAmount = updatedCartItems.reduce(
      (total: any, item: any) => {
        total[item.id] = (total[item.id] || 0) + item.amount;
        return total;
      },
      {}
    );
    sessionStorage.setItem("cartAmount", JSON.stringify(updatedCartAmount));
  }

  function emptyCart() {
    setCartItems([]);
    sessionStorage.removeItem("cartAmount");
    localStorage.removeItem("cartItems");
  }

  return (
    <Context.Provider
      value={{
        getAllBars,
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
