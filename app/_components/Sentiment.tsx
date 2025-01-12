import { IoMdInformationCircle } from "react-icons/io";
import SentimentCarousel from "./SentimentCarousel";

const Sentiment = () => {
  return (
    <div className="bg-white p-6 rounded-lg mt-6">
      <h2 className="font-semibold text-2xl">Sentiment</h2>
      <h3 className="flex space-x-2 items-center mt-6">
        <span className="font-semibold text-xl text-[#44475B]">Key Events</span>
        <IoMdInformationCircle size={20} color="#7C7E8C" />
      </h3>
      <SentimentCarousel />
      <h3 className="flex space-x-2 items-center mt-10">
        <span className="font-semibold text-xl text-[#44475B]">
          Analyst Estimates
        </span>
        <IoMdInformationCircle size={20} color="#7C7E8C" />
      </h3>
      <div className="mt-8 flex items-center gap-4 sm:gap-16">
        <div className="rounded-full bg-[#EBF9F4] py-6 px-4 sm:py-16 sm:px-12 text-green-600 text-center text-2xl sm:text-5xl">
          76<span className="text-lg">%</span>
        </div>
        <ul className="flex-grow text-gray-500 space-y-5">
          <li className="flex items-center space-x-5">
            <p>Buy</p>
            <div
              className="h-2 bg-[#00B386] rounded-sm"
              style={{ width: "76%" }}
            ></div>
            <p>76%</p>
          </li>
          <li className="flex items-center space-x-4">
            <p>Hold</p>
            <div
              className="h-2 bg-[#C7C8CE] rounded-sm"
              style={{ width: "8%" }}
            ></div>
            <p>8%</p>
          </li>
          <li className="flex items-center space-x-6">
            <p>Sell</p>
            <div
              className="h-2 bg-[#F7324C] rounded-sm"
              style={{ width: "16%" }}
            ></div>
            <p>16%</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sentiment;
