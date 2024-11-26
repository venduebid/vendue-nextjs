import React, { useState } from "react";
import Line from "../assets/Line.svg";
import { GoPlus, GoDash } from "react-icons/go";

// Utility class library
const baseFaqItemClass =
  "flex justify-between items-center p-5 rounded-md border cursor-pointer";
const activeFaqClass = "bg-gray-300";
const inactiveFaqClass = "bg-gray-200";
const faqQuestionClass = "font-inter text-[#667185]";
const faqAnswerClass =
  "p-5 rounded-md border-t-0 border-gray-300 text-gray-800";
const faqContainerClass = "flex flex-col gap-2 mt-12 mx-0 md:mx-44 p-4";

export default function Faqs () {
    
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: "What is Vendue?",
      answer:
        "Vendue is a unique online platform where superfans can discover, bid on, and own exclusive, one-of-a-kind items from their favorite celebrities.",
    },
    {
      question: "Can I make money from Vendue?",
      answer:
        "Yes! Depending on the demand for the celebrity items you collect, you may have the opportunity to resell them at a higher price.",
    },
    {
      question: "Can I chat with celebrities on Vendue?",
      answer:
        "Yes! As a verified collector, you gain exclusive access to celebrities through direct messaging features available only to collectors.",
    },
    {
      question: "Is Vendue free?",
      answer:
        "Joining Vendue as a collector is free. You can browse auctions and place bids at no cost. However, if you successfully win an auction, you'll need to pay for the item and any associated shipping costs.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getFaqItemClass = (index: number) =>
    `${baseFaqItemClass} ${
      openFaqIndex === index ? activeFaqClass : inactiveFaqClass
    }`;

  return (
    <div className="py-8 md:py-16">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-xl md:text-4xl font-inter font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h1>
        <img src={Line} alt="Line Divider" />
      </div>

      <div className={faqContainerClass}>
        {faqs.map((faq, index) => (
          <div key={index}>
            {/* Question Section */}
            <div
              className={getFaqItemClass(index)}
              onClick={() => toggleFaq(index)}
            >
              <p className={faqQuestionClass}>{faq.question}</p>
              {openFaqIndex === index ? <GoDash /> : <GoPlus />}
            </div>

            {/* Answer Section */}
            {openFaqIndex === index && (
              <div
                className={faqAnswerClass}
                style={{ backgroundColor: "#E5E7EB" }}
              >
                <p className={faqQuestionClass}>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
