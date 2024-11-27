import React from "react";


export default function CelebHero () {
  return (
    <div
      className="py-4 md:py-20 items-center"
      style={{
        backgroundImage: `url(/HeroBg.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto text-center px-6">
        <div className="flex flex-col gap-8 justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-[27px] md:text-[45px] text-black font-inter font-bold mt-6 p-2 text-center w-[500px] md:w-[800px]">
              Get paid to connect with{" "}
            </h1>
            <span className="bg-[#00BA5C]/20 text-[#00BA5C] text-xl md:text-4xl font-inter font-bold text-center rounded-sm p-2 w-[300px] md:w-[500px]">
              your super-fans
            </span>
          </div>
          <p className="text-lg text-gray-600 mb-6 w-[357px] md:w-[450px] text-center flex justify-center">
            Create a community of collectors for your items. Turn your fans to
            your collectors
          </p>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex justify-center items-center mt-12 gap-4">
        <img
          src='/CelebCr7.svg'
          alt="CR7"
          className="-m-40 z-20 transition-transform duration-500 hover:-translate-y-4"
        />
        <img
          src='/CelebMessi.svg'
          alt="Messi"
          className="z-20 transition-transform duration-500 hover:-translate-y-4"
        />
        <img
          src='/CelebCurry.svg'
          alt="Curry"
          className="-m-40 z-10 transition-transform duration-500 hover:-translate-y-4"
        />
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden justify-center items-center relative mt-4">
        <img
          src='/CelebCr7.svg'
          alt="CR7"
          className="absolute transform -translate-x-10 z-10"
        />
        <img 
          src='/CelebMessi.svg'
          alt="Messi" className="relative z-20" />
        <img
          src='/CelebCurry.svg'
          alt="Curry"
          className="absolute transform translate-x-10 z-10"
        />
      </div>
    </div>
  );
};