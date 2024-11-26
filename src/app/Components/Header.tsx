'use client'
import React, { useState, useEffect, useRef } from "react";
import Vendue from "../assets/VENDUE.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

export default function Header () {
  const [showOverlay, setShowOverlay] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        overlayRef.current &&
        !overlayRef.current.contains(event.target as Node)
      ) {
        setShowOverlay(false);
      }
    };

    if (showOverlay) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOverlay]);

  return (
    <div className="flex justify-center pb-3 items-center mx-auto my-auto">
      <div className="flex items-center justify-between bg-[#FFFFFF] px-4 py-3 w-full rounded-2xl shadow mt-4 md:w-1/2 relative">
        
          <img src={Vendue} alt="vendue" />
        
        {/* Main Button with Overlay */}
        <div className="relative">
          <button
            onClick={() => setShowOverlay((prev) => !prev)}
            className="flex-shrink-0 bg-[#00BA5C] border-4 drop-shadow-lg  bg-gradient-to-r from-green-700 to-green-800 text-white px-[32px] py-[10px] rounded-[40px]"
          >
            <p className="text-sm">Join waitlist</p>
          </button>

          {/* Overlay Buttons */}
          {showOverlay && (
            <div
              ref={overlayRef}
              className="absolute top-full left-[30%] transform -translate-x-1/2 mt-2 bg-green-500 shadow-lg rounded-lg flex flex-col items-center z-10 w-48"
            >
              {/* Option 1 */}
              <Link to="/" className="w-full">
                <button className="flex justify-between items-center gap-2 text-md bg-green-500 hover:bg-green-700 text-white text-md py-2 px-4 rounded-md w-full mt-2">
                  Join as a collector
                  <IoIosArrowRoundForward className="text-xl" />
                </button>
              </Link>
              {/* Option 2 */}
              <Link href="/join-as-a-celeb" className="w-full">
                <button className="flex justify-between items-center gap-2 text-md bg-green-500 hover:bg-green-700 text-white text-md py-2 px-4 rounded-md w-full mt-2">
                  Join as a Celeb
                  <IoIosArrowRoundForward className="text-xl" />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


