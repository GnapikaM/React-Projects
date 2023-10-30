import React, { useContext, useEffect, useState } from "react";
import { cancel } from "../assets";
import { ShopContext } from "../context/Shop-Context";

const CartProductCard = ({ product, totalAmount, setTotalAmount }) => {
  // state for the selected size
  const [selectedSize, setSelectedSize] = useState("XS");
  // state for the selected Quantity
  const [selectedQty, setSelectedQty] = useState(1);

  // Available Size options
  const availableSizes = ["XS", "S", "M", "L", "XL"];
  // Available Quantity options
  const availableQtys = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // Accessing shopping cart-related functions and context
  const { cartItems, removeFromCart, setCartItemCount } =
    useContext(ShopContext);

  // Removing product from the cart
  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };

  // Updating the selected Quantity, cart item count, total amount
  const handleQuantityChange = (newQty) => {
    const oldQty = selectedQty;

    setSelectedQty(newQty);
    setCartItemCount((prevCount) => prevCount - oldQty + parseInt(newQty, 10));

    totalAmount = totalAmount - oldQty * product.price + newQty * product.price;
    setTotalAmount(totalAmount);
  };

  return (
    <div className="border-2 border-black flex items-center relative w-[600px] max-sm:w-[100%]">
      <img
        src={cancel}
        alt="cancel-btn"
        className="absolute w-6 h-6 right-2 top-2 cursor-pointer max-sm:-right-3 max-sm:-top-3 max-sm:bg-white"
        onClick={handleRemoveFromCart}
      />
      <img
        src={product.productImage}
        alt=""
        width={120}
        className="m-2 max-sm:w-[70px]"
      />
      <div className="pl-1 max-sm:pl-0 max-sm:pr-1">
        <h3 className="font-bold text-lg max-sm:text-sm max-sm:leading-4">
          {product.productName}
        </h3>
        <div className="flex my-3 max-sm:my-1">
          <div className="flex items-center">
            <p className="font-semibold pr-3 max-sm:pr-1">Size: </p>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="bg-white border border-gray-300 rounded-md py-1 px-6 max-sm:py-0 max-sm:px-1"
            >
              {availableSizes.map((size) => (
                <option value={size} key={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center ml-20 max-sm:ml-6">
            <p className="font-semibold pr-3 max-sm:pr-1">Qty: </p>
            <select
              value={selectedQty}
              onChange={(e) => handleQuantityChange(e.target.value)}
              className="bg-white border border-gray-300 rounded-md py-1 px-6 max-sm:py-0 max-sm:px-1"
            >
              {availableQtys.map((qty) => (
                <option value={qty} key={qty}>
                  {qty}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="font-medium text-lg max-sm:text-sm">
          Price: <span>₹{product.price}</span>
        </p>
        <div className="flex items-center my-2 max-sm:my-1">
          <div className="w-5 flex items-center">
            <ion-icon name="return-down-back"></ion-icon>
          </div>
          <p className="text-base">14 days return available</p>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
