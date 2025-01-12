import { RiArrowRightDoubleFill } from "react-icons/ri";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import TabsComponent from "../_components/TabsComponent";
import CurrencyCarousel from "../_components/CurrencyCarousel";
import {
  getCurrencyPrice,
  getCoinDetails,
  getTrendingCoins,
} from "../_utils/apis";
import { CoinsResponse } from "../_utils/interfaces";
import Team from "../_components/Team";
import Tokenomics from "../_components/Tokenomics";
import About from "../_components/About";
import Sentiment from "../_components/Sentiment";
import Perfomance from "../_components/Perfomance";
import CurrencyTitle from "../_components/CurrencyTitle";
import CurrencyChart from "../_components/CurrencyChart";

const page = async ({ params }: { params: Promise<{ currency: string }> }) => {
  const { currency } = await params;
  const CryptoCurrency = currency.replace(/^\w/, (c) => c.toUpperCase());

  const CurrencyData = await getCurrencyPrice({
    ids: CryptoCurrency?.toLowerCase(),
  });

  const TrendingCurrencies: CoinsResponse["coins"] =
    (await getTrendingCoins()) || [];

  const CurrencySymbol = await getCoinDetails(CryptoCurrency?.toLowerCase());

  return (
    <>
      <div className="bg-[#EFF2F5] px-[3%] pb-[4%]">
        <p className="flex items-center space-x-2 py-4">
          <span className="text-[#3E5765]">Cryptocurrencies</span>
          <RiArrowRightDoubleFill color="#3E5765" size={20} />
          <span>{CryptoCurrency}</span>
        </p>
        <div className="lg:flex gap-8">
          <div className="lg:w-2/3 xl:w-3/4">
            <div className="sm:hidden">
              <CurrencyTitle
                CurrencySymbol={CurrencySymbol}
                CryptoCurrency={CryptoCurrency}
              />
            </div>
            <CurrencyChart
              CurrencySymbol={CurrencySymbol}
              CryptoCurrency={CryptoCurrency}
              CurrencyData={CurrencyData}
            />
            <TabsComponent />
            <Perfomance CryptoCurrency={CryptoCurrency} />
            <Sentiment />
            <About CryptoCurrency={CryptoCurrency} />
            <Tokenomics />
            <Team />
          </div>
          <div className="max-lg:mt-8 lg:w-1/3 xl:w-1/4">
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
      <div className="bg-white my-24">
        <h2 className="font-semibold text-2xl px-12 mb-6">You May Also Like</h2>
        <CurrencyCarousel TrendingCurrencies={TrendingCurrencies} />
        <h2 className="font-semibold text-2xl px-12 mt-10 mb-6">
          Trending Coins
        </h2>
        <CurrencyCarousel TrendingCurrencies={TrendingCurrencies} />
      </div>
    </>
  );
};

export default page;
