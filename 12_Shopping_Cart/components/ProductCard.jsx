import React, { useContext, useEffect, useState } from "react";
import { bat } from "../assets";
import { ShopContext } from "../context/Shop-Context";
import { Link } from "react-router-dom";

const ProductCard = ({ costume, showNotification, setShowNotification }) => {
  // Accessing the shopping cart cotnext and functions from the ShopContenxt
  const { addToCart, cartItems } = useContext(ShopContext);

  // using state to track the text of the button
  const [buttonText, setButtonText] = useState("Add to Cart");

  const handleAddToCart = () => {
    addToCart(costume.id);
    setButtonText("Go to Cart");
    setShowNotification(true);
  };

  useEffect(() => {
    if (showNotification) {
      const timeout = setTimeout(() => {
        setShowNotification(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [showNotification]);

  return (
    <div key={costume.id} className="shadow-3xl relative w-[250px]">
      <img
        src={bat}
        alt="bat"
        width={100}
        className="absolute right-[-50px] top-[-50px] max-sm:hidden"
      />
      <img
        src={costume.productImage}
        alt={costume.productName}
        className="object-cover w-[250px] h-[300px]"
      />
      <div className="px-5">
        <h3 className="font-bold text-lg pt-5">{costume.productName}</h3>
        <div className="flex justify-between py-2">
          <p className="font-medium text-lg">₹{costume.price}</p>
          <p>⭐{costume.rating}</p>
        </div>
        {buttonText === "Add to Cart" ? (
          <button
            className="border border-black w-full py-2 my-4 rounded-full hover:border-orange-500 hover:text-orange-500"
            onClick={handleAddToCart}
          >
            {buttonText}
          </button>
        ) : (
          <Link to="/cart">
            <button className="border border-orange-500 text-orange-500 w-full py-2 my-4 rounded-full">
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
