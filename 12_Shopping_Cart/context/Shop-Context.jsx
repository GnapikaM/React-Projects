import { createContext, useEffect, useState } from "react";
import { products } from "../constants/products";

// Create a context for managing the shopping cart state.
export const ShopContext = createContext(null);

// Initialize the default shopping cart.
const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem("cartItems"); // Check if there are stored cart items in local storage.
    return storedCartItems ? JSON.parse(storedCartItems) : getDefaultCart(); // If stored items exist, use them; otherwise, use the defualt cart.
  });

  // Using state to track the count of Cart Items.
  const [cartItemCount, setCartItemCount] = useState(0);

  // Add to Cart function
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Remove from Cart function
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Reset the cart to its default cart
  const resetCart = () => {
    setCartItems(getDefaultCart());
  };

  // Store the updated cart items in local storage.
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Calculate the total count of items in the cart.
  useEffect(() => {
    const count = Object.values(cartItems).reduce((acc, item) => acc + item, 0);
    setCartItemCount(count);
  }, [cartItems]);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    cartItemCount,
    setCartItemCount,
    resetCart,
  };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
