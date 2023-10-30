import { truckFast, shieldTick, support } from "../assets/icons"

const ServiceCard = ({ imgURL, label, subtext}) => {
  return (
    <div>
        <img src={imgURL} alt={label} width={40} className="bg-coral-red p-2 rounded-full" />
        <p className="py-2 font-bold text-lg">{label}</p>
        <p className="text-slate-gray">{subtext}</p>
    </div>
  )
}

export default ServiceCard