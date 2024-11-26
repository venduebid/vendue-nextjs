import React from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import WhyChooseVendue from "../Components/WhyChooseVendue";
// import HowVendueWorks from "../Components/HowVendueWorks";
import Categories from "../Components/Categories";
import BraggingRights from "../Components/BraggingRights";
import Faqs from "../Components/Faqs";
import SubHero from "../Components/SubHero";
import Footer from "../Components/Footer";

export default function LandingPage() {
  return (
    <div className="bg-[#F1F1F1] overflow-x-hidden">
      <Header />
      <Hero />
      <WhyChooseVendue />
      {/* <HowVendueWorks /> */}
      <Categories />
      <BraggingRights />
      <Faqs />
      <SubHero />
      <Footer />
    </div>
  );
}
