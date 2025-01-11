import { useRef, useState, useEffect } from "react";

const TabsComponent = ({
  tabs,
  activeTab,
  setActiveTab,
  className,
  border = true,
}: {
  tabs: string[];
  activeTab: number;
  setActiveTab: (index: number) => void;
  className?: string;
  border?: boolean;
}) => {
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

  useEffect(() => {
    updateBorderStyle();

    // Listen for resizing to update border position/width dynamically
    const resizeObserver = new ResizeObserver(updateBorderStyle);
    ButtonRefs.current.forEach(
      (button) => button && resizeObserver.observe(button)
    );

    return () => resizeObserver.disconnect();
  }, [activeTab, tabs]);

  return (
    <div
      className={`flex relative ${
        border && "border-y border-gray-300 border-solid"
      }`}
    >
      {tabs.map((tab: string, index: number) => (
        <div
          key={tab}
          onClick={() => setActiveTab(index)}
          className={`${className} focus:outline-none cursor-pointer relative transition-colors duration-300 ease-in-out ${
            activeTab === index
              ? "text-[#0052FE]"
              : "text-gray-600 hover:text-gray-700"
          }`}
          ref={(el) => {
            ButtonRefs.current[index] = el;
          }} // Store ref for button width
        >
          {tab}
        </div>
      ))}
      <div
        className="absolute bottom-0 h-0.5 bg-[#0052FE] transition-all duration-300"
        style={{
          width: `${borderStyle.width}px`, // Match active tab width
          transform: borderStyle.transform, // Move to active tab position
        }}
      />
    </div>
  );
};

export default TabsComponent;
