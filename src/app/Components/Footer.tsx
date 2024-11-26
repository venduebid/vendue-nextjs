import React from "react";
import Vendue from "../assets/VENDUE.svg";
import { FiInstagram } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link"

export default function Footer() {
  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto text-center px-6 flex justify-between items-center">
       <Link href="/">
       
        <img src={Vendue} alt="Lgo" />
       </Link>
        <div className="flex gap-4">
          <FiInstagram />
          <BsFacebook />
          <MdEmail />
          <FaXTwitter />
        </div>
      </div>
      <hr className="mt-4" />

      <div className="container text-sm mx-auto px-6 flex justify-between gap-4 mt-4">
        <div className="text-left w-[90%] md:w-[40%] font-inter">
          <p>
            Vendue is not affiliated with the celebrities whose images may
            appear on the website.
          </p>
        </div>

        <div className="text-right font-inter w-[50%] md:w-[40%]">
          <p>Copyright © 2024 Vendue</p>
        </div>
      </div>
    </div>
  );
}
