import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cart } from "../assets";
import { pumpkin } from "../assets";
import { ShopContext } from "../context/Shop-Context";

const Navbar = () => {
  // Accessing the context value from the ShopContext.
  const { cartItemCount } = useContext(ShopContext);

  return (
    <div className="p-4 my-0 mx-auto fixed top-0 left-0 right-0 bottom-0 bg-white z-[5] h-20">
      <div className="flex justify-between items-center">
        <div className="flex">
          <img src={pumpkin} alt="pumpkin" width={50} />
          <img src={pumpkin} alt="pumpkin" width={50} />
        </div>
        <div className="flex">
          <Link className="pr-10 font-medium text-lg max-sm:pr-5" to="/">
            SHOP
          </Link>
          <Link className="pr-10 relative max-sm:pr-1" to="/cart">
            <img src={cart} alt="" width={30} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 right-8 bg-orange-500 h-5 w-5 text-white rounded-full flex items-center justify-center max-sm:-right-1">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
