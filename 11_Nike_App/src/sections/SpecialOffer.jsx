import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col">
      <img src={offer} alt="offer-image" className="w-2/5 max-lg:w-full max-lg:px-[5%] max-lg:mb-10" />
      <div className="w-[55%] max-lg:w-full max-lg:px-[5%]">
        <p className="text-[30px] font-bold font-palanquin mb-4"><span className="text-coral-red">Special</span> Offer</p>
        <p className="text-slate-gray mb-2">Embark on a shopping journey that redefines your experience with unbestable deals. From premier selections to incredible savings, we offer unparalled that sets us apart.</p>
        <p className="text-slate-gray">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="flex gap-4 mt-8 max-sm:flex-col">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button label="View more" backgroundColor="bg-white" textColor="text-slate-gray" borderColor="border-slate-gray" />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer