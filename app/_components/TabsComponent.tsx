"use client";
import { useRef, useState, useLayoutEffect } from "react";

const TabsComponent = () => {
  const tabs = [
    "Overview",
    "Fundamentals",
    "News Insights",
    "Sentiments",
    "Team",
    "Technicals",
    "Tokenomics",
  ];
  const [activeTab, setActiveTab] = useState(0);
  const ButtonRefs = useRef<(HTMLDivElement | null)[]>([]); // Store button refs
  const [borderStyle, setBorderStyle] = useState({
    width: 0,
    transform: "translateX(0px)",
  });

  const updateBorderStyle = () => {
    const activeButton = ButtonRefs.current[activeTab];
    if (activeButton) {
      const width = activeButton.offsetWidth || 0;
      const transform = `translateX(${ButtonRefs.current
        .slice(0, activeTab)
        .reduce((acc, btn) => acc + (btn?.offsetWidth || 0), 0)}px)`;
      setBorderStyle({ width, transform });
    }
  };

  useLayoutEffect(() => {
    updateBorderStyle();
  }, [activeTab]); // Only depend on activeTab

  return (
    <div
      className={`flex relative border-b border-gray-300 border-solid overflow-x-auto no-scrollbar`}
    >
      {tabs.map((tab: string, index: number) => (
        <div
          key={tab}
          onClick={() => setActiveTab(index)}
          className={`focus:outline-none cursor-pointer relative transition-colors duration-300 ease-in-out py-4 px-2 md:p-4 text-xs min-w-24 text-center md:text-sm lg:text-base ${
            activeTab === index
              ? "text-[#0052FE] font-semibold"
              : "text-gray-600 font-medium hover:text-gray-700"
          }`}
          ref={(el) => {
            ButtonRefs.current[index] = el;
          }} // Store ref for button width
        >
          {tab}
        </div>
      ))}
      <div
        className="absolute bottom-0 h-1 bg-[#0052FE] transition-all duration-300"
        style={{
          width: `${borderStyle.width}px`, // Match active tab width
          transform: borderStyle.transform, // Move to active tab position
        }}
      />
    </div>
  );
};

export default TabsComponent;
