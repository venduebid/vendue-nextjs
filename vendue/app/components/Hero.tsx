import React from "react";
// import herobg from "../assets/HeroBg.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";
export default function Hero() {
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
            <h1 className="text-[27px] md:text-[45px] font-inter font-bold mt-6 p-2 text-center w-[500px] md:w-[800px]">
              Shop from celebrities globally{" "}
            </h1>
            <span className="bg-[#00BA5C]/20 text-[#00BA5C] text-xl md:text-4xl font-inter font-bold text-center rounded-sm p-2 w-[300px] md:w-[500px]">
              & enjoy super-fan privileges
            </span>
          </div>
          <p className="text-lg text-gray-600 mb-6 w-[357px] md:w-[450px] text-center flex justify-center">
            Discover, bid & own your favorite celebrities' 1-of-1 items. Earn
            the bragging rights as a superfan.
          </p>
        </div>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link href='/' className="bg-green-500  hover:bg-green-700  text-white text-md py-3 px-6 rounded-[40px] shadow-md border flex-shrink-0 w-[200px]">
          Join as a collector
          </Link>

          <Link href="/join-as-celeb">
            <button className="flex justify-center items-center gap-2 bg-white hover:bg-slate-100 shadow-md border text-black text-md py-3 px-6 rounded-[40px] flex-shrink-0 w-[200px]">
              Join as a Celeb
              <IoIosArrowRoundForward className="text-xl" />
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center mt-8 md:mt-20 p-4">
        <img src='/Messi.svg' alt="Messi" />
      </div>
    </div>
  );
}
