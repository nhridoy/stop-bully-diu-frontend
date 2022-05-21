import React from "react";
import { getLocalCart, setLocalCart } from "../utils/localstorage";

const useCart = () => {
  const [cart, setCart] = React.useState(getLocalCart());

  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);
    console.log(productInCart);
    if (productInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCart(newCart);
      setLocalCart(newCart);
      console.log(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
    }
  };

  const removeFromCart = (product) => {
    const newCart = cart.filter((item) => item.id !== product.id);
    setCart(newCart);
    setLocalCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
    setLocalCart([]);
  };

  return { cart, addToCart, removeFromCart, clearCart };
};

export default useCart;
