import Button from "../components/Button"

const Subscribe = () => {
  return (
    <section className="max-container font-palanquin flex items-center justify-between max-lg:flex-col">
      <h3 className="font-bold text-4xl max-sm:text-3xl w-3/5 max-lg:w-full max-lg:text-center max-lg:mb-10">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <div className="relative">
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="border border-slate-gray bg-transparent p-3 mr-3 w-[500px] max-sm:w-[290px] max-sm:p-4 rounded-full outline-none"
        />
        <div className="absolute top-[2.5px] right-4 max-sm:">
          <Button label="Sign Up" />
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
