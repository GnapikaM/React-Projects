import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <div className='flex flex-col items-center'>
        <p className='font-bold text-[32px] font-palanquin whitespace-nowrap max-sm:text-[26px]'>What Our <span className='text-coral-red'>Customers </span>Say?</p>
        <p className='mt-4 w-[500px] text-center leading-5 text-slate-gray max-sm:w-full max-sm:px-[2%]'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
        <div className="flex justify-around w-full mt-16 max-md:flex-col">
          {reviews.map((review) => (
            <ReviewCard key={review.customerName} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews