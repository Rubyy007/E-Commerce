import React, { createContext, useState } from "react";
import data from "../datasets/products";
export const shopContext = createContext(); // Create context without initial value
const ContextProvider = (props) => {
  // Function to initialize default cart state
  const getDefaultCart = () => {
    let cart = {};
    data.forEach((product) => {
      cart[product.id] = 0; // Initialize each product's quantity to 0
    });
    return cart;
  };

  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1 // Increment quantity of the item in cart
    }));
  };
  const removeCart = (itemId) => {
      if (cartItems[itemId] > 0) { // Check if item quantity is greater than 0
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1 // Decrement quantity of the item in cart
        }));
    }
};
  const contextValue = { data, cartItems, addToCart, removeCart };

  console.log("context", cartItems);

  return (
    <shopContext.Provider value={contextValue}>
      {props.children}
    </shopContext.Provider>
  );
};
export default ContextProvider;
