import React from "react";

export default function WhyChooseVendue () {
  return (
    <div className="py-8 md:py-16 px-14">
      <div className="container mx-auto text-center px-6">
        <h1 className="text-xl md:text-4xl font-inter font-bold text-gray-800 mb-4">
          Why Choose Vendue
        </h1>
        <img src='/Line.svg' alt="Line" />
        {/* Responsive Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white border rounded-xl shadow-md p-6">
            <div className="bg-white border rounded-lg shadow-md p-2 md:p-8 mb-4">
              <h2 className="text-xl text-left font-bold text-gray-800 mb-2">
                Collect items of value directly from celebrities anywhere in the
                world
              </h2>
              <img src='/Collections.svg' alt="Coollections" />
            </div>
            <p className="text-gray-600 text-left">
              Items used by celebrities for electrifying events such as football
              matches, unforgettable music shows and so much more can find their
              new home in your collection and earn you a superfan bragging
              right.
            </p>
          </div>
          <div className="bg-white border rounded-lg shadow-md p-6">
            <div className="bg-white border rounded-lg shadow-md p-2 md:p-8 mb-4">
              <h2 className="text-xl text-left font-bold text-gray-800 mb-2">
                Get Closer to Favorite Celebrities for Clout & Business
              </h2>
              <img src='/Chat.svg' alt="Chat" />
            </div>
            <p className="text-gray-600 text-left">
              As a collector, get unlimited access to celebrities when you meet
              them physically at shows and other events for photo ops and online
              via collector-only direct messages.
            </p>
          </div>
          <div className="bg-white border rounded-lg shadow-md p-6">
            <div className="bg-white border rounded-lg shadow-md p-2 md:p-8 mb-4">
              <h2 className="text-xl text-left font-bold text-gray-800 mb-2">
                Collection as Investment
              </h2>
              <img src='/Investment.svg' alt="Invest" />
            </div>
            <p className="text-gray-600 text-left">
              Depending on the demand for the items you collect, you may resell
              collectibles to a teeming fanbase at a higher price.
            </p>
          </div>
          <div className="bg-white border rounded-lg shadow-md p-6">
            <div className="bg-white border rounded-lg shadow-md p-2 md:p-8 mb-4">
              <h2 className="text-xl text-left font-bold text-gray-800 mb-2">
                Collector Badge
              </h2>
              <img src='/Badge.svg' alt="Badge" />
            </div>
            <p className="text-gray-600 text-left">
              Stand-out among fans online with the display of your official
              collector badge of your favorite celebrities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


