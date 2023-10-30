import { star } from "../assets/icons"

const ProductCard = ({ imgURL, rating, name, price }) => {
  return (
    <div className="font-montserrat flex flex-col flex-1 max-sm:w-[100%] max-sm:px-[10%]">
      <img src={imgURL} alt={name} />
      <div>
        <div className="flex mt-5">
          <img src={star} alt="rating" className="mr-2 w-5" />
          <span className="text-slate-gray">{rating}</span>
        </div>
        <h2 className="font-bold mt-3">{name}</h2>
        <p className="mt-1 font-medium text-coral-red">{price}</p>
      </div>
    </div>
  )
}

export default ProductCard