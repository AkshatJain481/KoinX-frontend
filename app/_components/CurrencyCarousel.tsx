"use client";
import CurrencyCards from "./CurrencyCards";
import { useRef } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const CurrencyCarousel = ({
  TrendingCurrencies,
}: {
  TrendingCurrencies: any;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll handler
  const handleScrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 400, // Adjust scroll distance as needed
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  // Scroll handler
  const handleScrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -400, // Adjust scroll distance as needed
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <div className="relative">
      <button
        className="bg-white shadow rounded-full absolute p-2.5 left-4 transform -translate-y-1/2 top-1/2 border-gray-200 border-2"
        onClick={handleScrollLeft}
      >
        <FaChevronLeft size={16} color="#757779" />
      </button>
      <div
        ref={containerRef}
        className="overflow-y-auto flex gap-4 mt-4 no-scrollbar mx-12"
      >
        {TrendingCurrencies?.map((currency: any, index: number) => (
          <CurrencyCards key={index} currency={currency} />
        ))}
      </div>
      <button
        className="bg-white shadow rounded-full absolute p-2.5 right-4 transform -translate-y-1/2 top-1/2 border-gray-200 border-2"
        onClick={handleScrollRight}
      >
        <FaChevronRight size={16} color="#757779" />
      </button>
    </div>
  );
};

export default CurrencyCarousel;
