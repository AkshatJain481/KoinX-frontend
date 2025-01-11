import { RiArrowRightDoubleFill } from "react-icons/ri";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { TiArrowSortedUp } from "react-icons/ti";
import ChartFilters from "../_components/ChartFilters";
import TimeSeriesChart from "../_components/Chart";

const page = ({ params }: { params: { currency: string } }) => {
  const CryptoCurrency = params?.currency.replace(/^\w/, (c) =>
    c.toUpperCase()
  );

  const renderImage = () => {
    switch (CryptoCurrency) {
      case "Bitcoin":
        return (
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <Image src="/Bitcoin.svg" alt="Bitcoin" width={36} height={36} />
              <h1 className="text-2xl font-semibold">{CryptoCurrency}</h1>
              <span className="font-semibold text-gray-500">BTC</span>
            </div>
            <div className="text-white bg-gray-500 p-2 rounded-lg">Rank #1</div>
          </div>
        );
      case "Ethereum":
        return (
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <Image
                src="/Ethereum.svg"
                alt="Ethereum"
                width={36}
                height={36}
              />
              <h1 className="text-2xl font-semibold">{CryptoCurrency}</h1>
              <span className="font-semibold text-gray-500">ETH</span>
            </div>
            <div className="text-white bg-gray-500 p-2 rounded-lg">Rank #2</div>
          </div>
        );
      case "Polygon":
        return (
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <Image src="/Polygon.svg" alt="Polygon" width={36} height={36} />
              <h1 className="text-2xl font-semibold">{CryptoCurrency}</h1>
              <span className="font-semibold text-gray-500">MATIC</span>
            </div>
            <div className="text-white bg-gray-500 p-2 rounded-lg">Rank #3</div>
          </div>
        );
      default:
        return (
          <div className="flex items-center space-x-12">
            <div className="flex items-center space-x-3">
              <Image src="/Bitcoin.svg" alt="Bitcoin" width={36} height={36} />
              <h1 className="text-2xl font-semibold">{CryptoCurrency}</h1>
              <span className="font-semibold text-gray-500">BTC</span>
            </div>
            <div className="text-white bg-gray-500 p-2 rounded-lg">Rank #1</div>
          </div>
        );
    }
  };

  return (
    <div className="bg-[#EFF2F5] px-[3%]">
      <p className="flex items-center space-x-2 py-4">
        <span className="text-[#3E5765]">Cryptocurrencies</span>
        <RiArrowRightDoubleFill color="#3E5765" size={20} />
        <span>{CryptoCurrency}</span>
      </p>
      <div className="flex gap-4">
        <div className="w-3/4">
          <div className="bg-white p-6 rounded-lg">
            {renderImage()}
            <div className="flex items-center mt-10">
              <p className="text-3xl font-semibold">$46,953.04</p>
              <div className="text-[#14B079] flex items-center space-x-2 py-1 px-2 rounded-sm bg-green-50 ml-8">
                <TiArrowSortedUp color="#14B079" size={20} />
                <p>2.51%</p>
              </div>
              <p className="text-gray-500 text-sm ml-4">(24H)</p>
            </div>
            <p className="text-lg mt-2 pb-4 border-b border-gray-200">
              ₹ 39,42,343
            </p>
            <div>
              <TimeSeriesChart CryptoCurrency={CryptoCurrency} />
            </div>
          </div>
        </div>
        <div className="w-1/4">
          <div className="bg-[#0052FE] px-10 py-12 text-center rounded-2xl">
            <h2 className="font-bold text-white text-2xl">
              Get Started with KoinX for FREE
            </h2>
            <p className="text-white text-sm mt-6 mb-10">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </p>
            <Image
              src="/Graphic.svg"
              alt="Graphic"
              width={170}
              height={180}
              className="mx-auto"
            />
            <button className="flex items-center space-x-3 mx-auto mt-5 bg-white rounded-lg px-6 py-3">
              <span className="font-semibold">Get Started for FREE</span>
              <GoArrowRight size={20} color="black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
