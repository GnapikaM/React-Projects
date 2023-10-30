import { bat, hauntedHouse, header, magicwoman, pumpkin } from "../assets";
import ProductCard from "../components/ProductCard";
import Notification from "../components/Notification";
import { products } from "../constants/products";
import { useState } from "react";

const Shop = () => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="my-16 mx-auto max-w-[1200px]">
      {showNotification && <Notification message="Added to Cart" />}
      <div>
        <div className="flex justify-center relative">
          <img
            src={header}
            alt="header-image"
            width={450}
            className=" absolute z-2 max-sm:hidden"
          />
          <p className="bg-slate-30 absolute top-28 left-[49%] font-bold text-2xl z-2 hidden sm:block">
            Trick<span className="w-4 text-orange-500"> or </span>Treat
          </p>
          <p className="text-center mt-20 font-bold text-orange-500 bg-black px-4 py-2 text-[34px] w-[100%] z-2 uppercase relative sm:hidden">
            Trick<span className="w-4 text-orange-500 lowercase"> 🎃 </span>
            Treat
          </p>
        </div>
        <div className="flex flex-wrap justify-center mt-60 gap-20 max-sm:gap-10 max-sm:mt-20">
          {/* Mapping through the "products" array and rendering "ProductCard" components. */}
          {products.map((costume) => (
            <ProductCard
              key={costume.id}
              costume={costume}
              showNotification={showNotification}
              setShowNotification={setShowNotification}
            />
          ))}
        </div>
        <div className="relative max-sm:hidden">
          <img
            src={magicwoman}
            alt=""
            width={100}
            className="absolute right-28 bottom-52"
          />
          <img
            src={bat}
            alt=""
            width={50}
            className="absolute right-0 bottom-52"
          />
          <img
            src={bat}
            alt=""
            width={60}
            className="absolute -right-0 bottom-60"
          />
          <img
            src={hauntedHouse}
            alt=""
            width={200}
            className="absolute right-0 -bottom-16"
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
