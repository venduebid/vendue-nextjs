import React from "react";
import Line from "../assets/Line.svg";
import Vector from "../assets/Vector1.svg";
import Vector2 from "../assets/Vector2.svg";
import Step1 from "../assets/Step1.svg";
import Step2 from "../assets/Step2.svg";
import Step3 from "../assets/Step3.svg";
import { motion } from "framer-motion";

export default function HowVendueWorks () {
  // Animation Variants
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="py-8 md:py-16">
      <div className="mx-auto text-center px-6">
        <h1 className="text-xl md:text-4xl font-inter font-bold text-gray-800 mb-4">
          How Vendue Works
        </h1>
        <img src={Line} alt="Divider Line" className="mx-auto" />

        {/* Steps Container with Animation */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start mt-8 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Step 1 */}
          <motion.div
            className="flex flex-col w-full md:w-1/3"
            variants={stepVariants}
          >
            <div className="flex justify-center gap-4">
              <p className="text-[#667185]">Step 1</p>
              <img src={Vector} alt="Vector" className="mt-4" />
            </div>
            <div className="bg-[#F7F7F8] rounded-lg mt-6 p-6 flex flex-col items-center min-h-[350px]">
              <p className="font-inter text-black font-medium">Discover</p>
              <img src={Step1} alt="Step 1" className="mt-4" />
              <p className="text-center text-[#475367] mt-4 text-sm">
                Browse through thousands of celebrity auctions
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div
            className="flex flex-col items-center w-full md:w-1/3"
            variants={stepVariants}
          >
            <div className="flex md:hidden gap-4">
              <p className="text-[#667185]">Step 2</p>
              <img src={Vector} alt="Vector" className="mt-4" />
            </div>
            <div className="bg-[#F7F7F8] rounded-lg p-6 mt-6 md:mt-24 flex flex-col items-center min-h-[350px]">
              <p className="font-inter text-black font-medium">Bid & Own</p>
              <img src={Step2} alt="Step 2" className="mt-4" />
              <p className="text-center text-[#475367] mt-4 text-sm">
                After a successful bid, the item is shipped to your address, and
                digital ownership is transferred to you.
              </p>
            </div>
            <div className="hidden md:flex items-center justify-center gap-4 mt-4">
              <p className="text-[#667185] mt-10">Step 2</p>
              <img src={Vector2} alt="Vector" className="" />
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div
            className="flex flex-col items-center w-full md:w-1/3"
            variants={stepVariants}
          >
            <div className="flex gap-4">
              <p className="text-[#667185]">Step 3</p>
              <img src={Vector} alt="Vector" className="mt-4" />
            </div>
            <div className="bg-[#F7F7F8] rounded-lg p-6 mt-6 flex flex-col items-center min-h-[350px]">
              <p className="font-inter text-black font-medium">Access</p>
              <img src={Step3} alt="Step 3" className="mt-4" />
              <p className="text-center text-[#475367] mt-4 text-sm">
                Get your collector's badge that gives you physical and online
                access to the celebrity
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};