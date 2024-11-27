import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

export default function SubHero () {
  return (
    <div className="py-4 md:py-16 mx-6 md:mx-20">
      <div className="container mx-auto text-center px-6 py-32 bg-[#2C661E] rounded-lg">
        <h1 className="text-lg md:text-4xl font-inter font-bold text-white mb-8 md:mb-16 mx-0 md:mx-64">
          Own a piece of celebrity history. Join the collector community!
        </h1>

        {/* Button Container */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 items-center">
          <Link href="/" className="bg-[#28BB71] hover:bg-green-700 text-white text-md py-3 px-6 rounded-[40px] w-[200px]">
          Join as a collector
          </Link>
          <Link href="/join-as-a-celeb">
            <button className="flex justify-center items-center gap-2 bg-white hover:bg-green-700 text-black hover:text-white text-md py-3 px-6 rounded-[40px] w-[200px]">
              Join as a Celeb
              <IoIosArrowRoundForward className="text-xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
