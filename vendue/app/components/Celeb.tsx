'use client'
import { useState } from "react";

export default function Celeb () {
  const [celebrityName, setCelebrityName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCelebrityName("");
    setEmail("");
  };

  const handleJoinWaitlist = () => {
    // Handle join waitlist logic
  };

  return (
    <div className="py-0 md:py-16">
      <div className="container mx-auto text-center px-2 md:px-6">
        <div className="mt-8 mx-0 md:mx-48 flex flex-col justify-center gap-6 items-center p-4">
          <div className="flex justify-center gap-6 bg-gray-200 rounded border-gray-200 items-center px-4 py-2">
            <p className="text-[74%] md:text-lg bg-white font-inter rounded-md p-2 text-gray-500">
              Celebrity/Talent Manager
            </p>
          </div>
          <p className="text-sm md:text-lg font-inter mt-4">
            Get paid to connect with your super-fans
          </p>

          <form
            onSubmit={handleFormSubmit}
            className="bg-white shadow-lg w-full mt-4 px-4 py-6 rounded-md"
          >
            <div className="mb-4">
              <label
                htmlFor="celebrityName"
                className="block text-left text-gray-800 text-sm font-medium mb-2 p-2"
              >
                Celebrity name
              </label>
              <input
                type="text"
                id="celebrityName"
                value={celebrityName}
                onChange={(e) => setCelebrityName(e.target.value)}
                placeholder="Wizkid"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-green-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-left text-gray-800 text-sm font-medium mb-2 p-2"
              >
                Contact email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              onClick={handleJoinWaitlist}
              className="flex justify-center items-center mb-4 gap-2 w-full shadow-lg bg-green-500 hover:bg-green-700 text-white text-md py-3 px-6 rounded-[40px]"
            >
              Join Waitlist
            </button>
          </form>
          <hr className="w-full border-t border-gray-300 border-dotted mt-4" />

        
          <div className="bg-white shadow-lg w-full mt-4 px-4 py-6 rounded-md">
            <h2 className="text-black font-inter font-medium text-[18px] text-center">
              Setting up is easy
            </h2>
            <p className="text-sm md:text-lg font-inter mt-4 text-[#667185] text-center">
              Set up your Vendue account and create your auctions in minutes
            </p>
            <div className="flex flex-col items-center gap-6 mt-6">
              {/* Step 1 */}
              <div className="flex flex-col items-center">
                <p className="border-2 border-gray-400 bg-gray-400 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                  1
                </p>
                <p className="font-inter font-semibold text-sm mt-2 py-2 px-14 lg:px-28 text-[#667185] border border-[#F0F2F5] bg-[#F7F9FC] rounded-md text-center">
                  Set up your profile
                </p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center">
                <p className="border-2 border-gray-400 bg-gray-400 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                  2
                </p>
                <p className="font-inter font-semibold text-sm mt-2 py-2 px-14 lg:px-28 text-[#667185] border border-[#F0F2F5] bg-[#F7F9FC] rounded-md text-center">
                  Create & share auctions in minutes
                </p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center">
                <p className="border-2 border-gray-400 bg-gray-400 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                  3
                </p>
                <p className="font-inter font-semibold text-sm mt-2 py-2 px-14 lg:px-28 text-[#667185] border border-[#F0F2F5] bg-[#F7F9FC] rounded-md text-center">
                  Earn and connect with your super fans
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};