'use client'
import React, { useState } from "react";
import Line from "../Line.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
// import Link from "next/link";
// import CelebLandingPage from "../Pages/CelebLandingPage";

// class library
const baseButtonClass = "py-2 px-6 text-lg font-semibold";
const activeClass = "bg-white rounded-md p-2 text-gray-500";
const inactiveClass = "text-gray-600";
const baseTabContainer =
  "mt-8 mx-0 md:mx-44 flex justify-center gap-6 bg-gray-200 rounded border-gray-200 items-center p-2";

export default function BraggingRights() {
  const [activeTab, setActiveTab] = useState<"superfan" | "manager">(
    "superfan"
  );

  const [celebrityName, setCelebrityName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log("Celebrity Name:", celebrityName);
    // console.log("Email Address:", email);
    // logic for form submission
    setCelebrityName("");
    setEmail("");
  };

  const handleJoinCollector = () => {
    // console.log("Join as a Collector button clicked!");
  };

  const getButtonClass = (tab: "superfan" | "manager") =>
    `${baseButtonClass} ${activeTab === tab ? activeClass : inactiveClass}`;

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-xl md:text-4xl font-inter font-bold text-gray-800 mb-4">
          Earn Your Bragging Rights
        </h1>
        <img src='/Line.svg' alt="Liiii" />

        {/* Tabs */}
        <div className={baseTabContainer}>
          <button
            className={getButtonClass("superfan")}
            onClick={() => setActiveTab("superfan")}
          >
            Superfan?
          </button>
          <button
            className={`${getButtonClass("manager")} text-[74%] md:text-lg`}
            onClick={() => setActiveTab("manager")}
          >
            Celebrity/Talent Manager?
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-8 mx-0 md:mx-44">
          {activeTab === "superfan" && (
            <div className="text-gray-700 text-lg flex flex-col mt-10 justify-center items-center">
              <p className="text-sm md:text-xl">
                Enter your #1 favorite celebrity to join our waitlist
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
                    Celebrity Name
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
                    Email Address
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
                    onClick={handleJoinCollector}
                    className="flex justify-center items-center mb-4 gap-2 w-full shadow-lg bg-green-500 hover:bg-green-700 text-white text-md py-3 px-6 rounded-[40px]"
                  >
                    Join as a Collector
                  </button>
                
              </form>
            </div>
          )}
          {activeTab === "manager" && (
            <div className="text-gray-700 text-lg flex flex-col gap-7 mt-10 justify-center items-center">
              <p>Get paid to connect with your super-fans</p>
              <div className="bg-white w-full py-14 md:py-20 px-4 rounded-md">
                
                  <button className="flex justify-center items-center gap-2 w-full shadow-lg bg-white hover:bg-green-700 text-black hover:text-white text-md py-3 px-6 rounded-[40px]">
                    Join as a Celeb
                    <IoIosArrowRoundForward className="text-xl" />
                  </button>
            
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
