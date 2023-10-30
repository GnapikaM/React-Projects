import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <div className="flex justify-between max-md:flex-col">
      <div className="flex flex-col w-2/5 xl:w-3/5 justify-center max-md:w-full">
        <p className="font-bold text-[32px] font-montserrat mb-4 leading-10">We Provide You <span className="text-coral-red"> Super Quality </span> Shoes</p>
        <p>Ensuring premium comfort and style. Our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="mt-3 mb-8">Our dedication to detail and excellence ensures your satisfaction.</p>
        <div className="flex gap-4 max-sm:flex-col max-sm:w-full">
          <Button label="View details" />
          <Button label="Learn more" backgroundColor="br-white" textColor="text-slate-gray" borderColor="border-slate-gray" />
        </div>
      </div>
      <img src={shoe8} alt="shoe" height={400} width={400} className="max-md:w-full p-[5%]" />
    </div>
  )
}

export default SuperQuality