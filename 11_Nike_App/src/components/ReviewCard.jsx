import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col items-center font-palanquin">
        <img src={imgURL} alt={customerName} width={100} className="rounded-full" /> 
        <p className="w-[300px] text-center py-4 leading-4 text-sm">{feedback}</p>
        <div className="flex gap-2">
            <img src={star} alt="review" width={20} />
            <p>{rating}</p>
        </div>
        <p className="pt-3 font-bold text-lg max-md:pb-14">{customerName}</p>
    </div>
  )
}       

export default ReviewCard