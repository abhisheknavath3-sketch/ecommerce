import { createContext, useState } from "react";

export const ContentContext = createContext();

const ContentProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [quantity, setQuantity] = useState(1);
 
  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.some((i) => i.id === item.id);

      if(exists){
        return prev;
      }
      return [...prev, item];
    });
  };

  const addToWishlist = (item) => {
    setWishlist((prev) =>
      prev.some((w) => w.id === item.id)
        ? prev.filter((w) => w.id !== item.id)
        : [...prev, item]
    );
  };
  const removeFromCart = (id) => {
  setCart((prev) => prev.filter((item) => item.id !== id));
};


  return (
    <ContentContext.Provider
      value={{ cart, wishlist, addToCart, addToWishlist,removeFromCart, quantity, setQuantity }}
    >
      {children}
    </ContentContext.Provider>
  );
};



export default ContentProvider;
