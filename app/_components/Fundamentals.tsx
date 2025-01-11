import { IoMdInformationCircle } from "react-icons/io";

const Fundamentals = ({ Cryptocurrency }: { Cryptocurrency: string }) => {
  return (
    <div>
      <h3 className="flex space-x-2 items-center">
        <span className="font-semibold text-xl text-[#44475B]">
          Fundamentals
        </span>
        <IoMdInformationCircle size={20} color="#ABB9BF" />
      </h3>
      <div className="xl:grid grid-cols-2 gap-12 mt-6">
        <ul>
          <li className="flex items-center justify-between py-5 pr-3 border-b border-gray-200 space-x-2">
            <p className="text-[#768396]">{Cryptocurrency} Price</p>
            <p className="text-right">$16,815.46</p>
          </li>
          <li className="flex items-center justify-between py-5 pr-3 border-b border-gray-200 space-x-2">
            <p className="text-[#768396]">24h Low / 24h High</p>
            <p className="text-right">$16,382.07 / $16,874.12</p>
          </li>
          <li className="flex items-center justify-between py-5 pr-3 border-b border-gray-200 space-x-2">
            <p className="text-[#768396]">7d Low / 7d High</p>
            <p className="text-right">$16,382.07 / $16,874.12</p>
          </li>
          <li className="flex items-center justify-between py-5 pr-3 border-b border-gray-200 space-x-2">
            <p className="text-[#768396]">Trading Volume</p>
            <p className="text-right">$23,249,202,782</p>
          </li>
          <li className="flex items-center justify-between py-5 pr-3 border-b border-gray-200 space-x-2">
            <p className="text-[#768396]">Market Cap Rank</p>
            <p>#1</p>
          </li>
        </ul>
        <ul>
          <li className="flex items-center justify-between py-5 pr-3 border-b border-gray-200 space-x-2">
            <p className="text-[#768396]">Market Cap</p>
            <p className="text-right">$323,507,290,047</p>
          </li>
          <li className="flex items-center justify-between py-5 pr-3 border-b border-gray-200 space-x-2">
            <p className="text-[#768396]">Market Cap Dominance</p>
            <p className="text-right">38.343%</p>
          </li>
          <li className="flex items-center justify-between py-5 pr-3 border-b border-gray-200 space-x-2">
            <p className="text-[#768396]">Volume / Market Cap</p>
            <p className="text-right">0.0718</p>
          </li>
          <li className="flex items-center justify-between py-3 pr-3 border-b border-gray-200">
            <p className="text-[#768396]">All-Time High</p>
            <div>
              <p className="text-right">
                $69,044.77 <span className="text-red-500">-75.6%</span>
              </p>
              <p className="text-xs">Nov 10, 2021 (about 1 year)</p>
            </div>
          </li>
          <li className="flex items-center justify-between py-3 pr-3 border-b border-gray-200">
            <p className="text-[#768396]">All-Time Low</p>
            <div>
              <p className="text-right">
                $67.81<span className="text-green-500"> 24729.1%</span>
              </p>
              <p className="text-xs">Jul 06, 2013 (over 9 years)</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Fundamentals;
