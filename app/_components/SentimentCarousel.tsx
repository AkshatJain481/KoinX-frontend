"use client";
import SentimentCards from "./SentimentCards";
import { FaNewspaper } from "react-icons/fa6";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const SentimentCarousel = () => {
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

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="overflow-y-auto flex gap-4 mt-4 no-scrollbar"
      >
        <SentimentCards
          icon={<FaNewspaper color="white" className="h-4 w-4 md:h-6 md:w-6" />}
          BgColor="#E8F4FD"
          BgColorIcon="#0082FF"
        />
        <SentimentCards
          icon={
            <FaArrowTrendUp color="white" className="h-4 w-4 md:h-6 md:w-6" />
          }
          BgColor="#EBF9F4"
          BgColorIcon="#0FBA83"
        />
        <SentimentCards
          icon={<FaNewspaper color="white" className="h-4 w-4 md:h-6 md:w-6" />}
          BgColor="#E8F4FD"
          BgColorIcon="#0082FF"
        />
        <SentimentCards
          icon={
            <FaArrowTrendUp color="white" className="h-4 w-4 md:h-6 md:w-6" />
          }
          BgColor="#EBF9F4"
          BgColorIcon="#0FBA83"
        />
      </div>
      <button
        className="bg-white rounded-full absolute p-4 right-2 transform -translate-y-1/2 top-1/2"
        onClick={handleScrollRight}
      >
        <FaChevronRight size={20} color="#757779" />
      </button>
    </div>
  );
};

export default SentimentCarousel;
