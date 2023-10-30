import { arrowRight } from "../assets/icons";
import { statistics, shoes } from "../constants";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  thumbnailBackground,
} from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";

const Hero = () => {
  const [bigShoeImage, setBigShoeImage] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="w-full min-h-screen max-container flex sm:flex-row flex-col padding-x max-lg:block"
    >
      <div className="relative w-[55%] flex flex-col justify-center items-start pt-28 max-lg:w-full">
        <p className="text-coral-red xl:text-lg text-sm font-montserrat mb-5">
          Our Summer Collections
        </p>
        <h1 className="font-bold text-[70px] leading-[85px] font-palanquin mb-6 max-sm:text-[55px] max-sm:leading-[60px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>{" "}
          <br />
          <span className="text-coral-red">Nike</span>
          <span> Shoes</span>
        </h1>
        <p className="xl:text-base text-sm font-montserrat mb-8 text-gray-500">
          Discover stylish Nike arrivals, quality
          <br />
          comfort, and innovation for your active life.
        </p>
        <Button label="Shop now" iconUrl={arrowRight} />

        <div className="flex justify-start items-start flex-wrap w-full gap-16 mt-10">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-bold text-2xl font-palanquin">{stat.value}</p>
              <p className="text-[12px] text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-lg:w-full max-lg:mt-10 max-lg:h-[100%] w-[45%] relative flex flex-1 justify-center items-center bg-hero bg-no-repeat bg-cover bg-center max-lg:justify-between max-md:justify-center">
        <img
          src={bigShoeImage}
          alt="bigShoe1"
          className="object-contain relative z-10 w-[300px] max-lg:w-[400px] max-lg:h-[500px] max-lg:mx-20 max-md:relative max-md:top-20"
        />

          <div className="flex absolute bottom-2 gap-3 max-lg:flex-col max-lg:right-[5%] max-lg:top-[11%] max-md:flex-row max-md:right-0 max-md:px-2">
          {shoes.map((shoe) => (
            <div key={shoe.thumbnail}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {
                  setBigShoeImage(shoe);
                }}
                bigShoeImg={bigShoeImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
