import React from "react";
import Line from "../assets/Line.svg";
import Wizkid from "../assets/Wiz.svg";
import David from "../assets/David.svg";
import Lionel from "../assets/Lionel.svg";
import Drake from "../assets/Drake.svg";
import Kdot from "../assets/Kdot.svg";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Categories() {
  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-xl md:text-4xl font-inter font-bold text-gray-800 mb-4">
          Categories
        </h1>
        <img src={Line} alt="Divider Line" />
      </div>

      <div className="flex flex-col justify-center items-center mt-14 bg-[#F7F7F8] px-4 rounded-lg m-0 md:m-16">
        <div className="w-full flex flex-row justify-center items-center gap-6 mt-6">
          <img src={Wizkid} alt="Wizkid" className="max-w-[150px] h-auto" />
          <img src={David} alt="David" className="max-w-[150px] h-auto -m-10" />
          <img src={Lionel} alt="Lionel" className="max-w-[150px] h-auto" />
          <img src={Drake} alt="Drake" className="max-w-[150px] h-auto -m-10" />
          <img src={Kdot} alt="Kdot" className="max-w-[150px] h-auto" />
        </div>

        {/* Horizontal Scroll Section */}
        <div className="w-full overflow-x-auto scrollbar-hide mt-6">
          <div
            className="flex gap-6 justify-start md:justify-center px-4"
            style={{ minWidth: "100%" }}
          >
            <div className="px-8 py-4 bg-black text-white rounded-md text-center flex-shrink-0 min-w-[150px]">
              Musicians
            </div>
            <div className="px-8 py-4 bg-black text-white rounded-md text-center flex-shrink-0 min-w-[150px]">
              Film studios
            </div>
            <div className="px-8 py-4 bg-black text-white rounded-md text-center flex-shrink-0 min-w-[150px]">
              Actors
            </div>
            <div className="px-8 py-4 bg-black text-white rounded-md text-center flex-shrink-0 min-w-[150px]">
              Footballers
            </div>
            <div className="px-8 py-4 bg-black text-white rounded-md text-center flex-shrink-0 min-w-[150px]">
              Artists
            </div>
          </div>
        </div>
        <hr className="w-full border-t border-gray-300 border-dotted mt-14" />

        {/* Buttons Section */}
        <div className="flex justify-center gap-6 mt-16 mb-12">
          <Link href="/">
            <button className="bg-green-500 hover:bg-green-700 text-white text-md py-3 px-6 rounded-[40px]">
              Join as a collector
            </button>
          </Link>

          <Link href="/join-as-a-celeb">
            <button className="flex justify-center items-center gap-2 bg-green-500 hover:bg-green-700 text-white text-md py-3 px-6 rounded-[40px]">
              Join as a Celeb
              <IoIosArrowRoundForward className="text-2xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}