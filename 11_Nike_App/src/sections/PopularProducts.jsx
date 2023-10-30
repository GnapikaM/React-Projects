import ProductCard from "../components/ProductCard";
import { products } from "../constants";

const PopularProducts = () => {
  return (
    <div>
      <div className="font-bold text-[32px] font-montserrat max-sm:text-center">
        Our<span className="text-coral-red"> Popular </span>Products
      </div>
      <p className="w-[500px] max-sm:w-full leading-5 mt-5 text-gray-500">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value.</p>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <ProductCard key={product.name} {...product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
