import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/Shop-Context";
import { products } from "../constants/products";
import CartProductCard from "../components/CartProductCard";
import { sadPumpkin } from "../assets";

const Cart = () => {
  // Accessing the shopping cart context from ShopContext.
  const { cartItems, resetCart } = useContext(ShopContext);

  // Calculating the total number of items in the shopping cart.
  const itemsCount = Object.values(cartItems).reduce(
    (acc, item) => acc + item,
    0
  );

  // Function to clear the shopping cart.
  const handleClearCart = () => {
    resetCart();
  };

  // Using state to track the total price of items in the cart.
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Calculating the total price when cartItems or products change.
    const newTotalAmount = Object.keys(cartItems).reduce((total, productId) => {
      const product = products.find((p) => p.id === parseInt(productId));
      return total + (product ? product.price * cartItems[productId] : 0);
    }, 0);
    setTotalAmount(newTotalAmount);
  }, [cartItems]); // This effect runs when cartItems change.

  return (
    <div className="flex flex-col justify-center items-center mt-32">
      <h1 className="text-[40px] text-center text-black">Your Cart</h1>
      {itemsCount === 0 ? (
        <div className="my-10 flex flex-col items-center">
          <img src={sadPumpkin} alt="sad face" />
          <p className="text-center font-normal text-3xl my-10 text-gray-500">
            is now Empty
          </p>
          <Link to="/">
            <button className="border border-black px-7 py-2 rounded-full hover:border-orange-500 hover:text-orange-500">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <div className="relative">
          <button
            className="absolute right-0 top-10 font-medium bg-black text-orange-500 px-3 py-1 rounded-xl hover:bg-orange-500 hover:text-black max-sm:top-7"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <div className="mt-20 mb-10 flex flex-col items-center gap-5">
            {products.map((product) => {
              if (cartItems[product.id] !== 0) {
                console.log("Product:", product);
                return (
                  <CartProductCard
                    key={product.id}
                    product={product}
                    totalAmount={totalAmount}
                    setTotalAmount={setTotalAmount}
                  />
                );
              }
            })}
          </div>
          <div className="flex justify-between bg-white mb-10 max-sm:justify-around">
            <h3 className="text-xl font-semibold">Total Price</h3>
            <h3 className="text-xl font-medium">₹{totalAmount}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
