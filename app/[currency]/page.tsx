import { RiArrowRightDoubleFill } from "react-icons/ri";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { TiArrowSortedUp } from "react-icons/ti";
import TimeSeriesChart from "../_components/Chart";
import TabsComponent from "../_components/TabsComponent";
import PriceRangeIndicator from "../_components/PriceRangeIndicator";
import Fundamentals from "../_components/Fundamentals";
import { IoMdInformationCircle } from "react-icons/io";
import SentimentCarousel from "../_components/SentimentCarousel";
import { FaArrowRightLong } from "react-icons/fa6";
import PieRingChart from "../_components/PieChart";
import CurrencyCarousel from "../_components/CurrencyCarousel";

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
    <>
      <div className="bg-[#EFF2F5] px-[3%] pb-[4%]">
        <p className="flex items-center space-x-2 py-4">
          <span className="text-[#3E5765]">Cryptocurrencies</span>
          <RiArrowRightDoubleFill color="#3E5765" size={20} />
          <span>{CryptoCurrency}</span>
        </p>
        <div className="lg:flex gap-8">
          <div className="lg:w-2/3 xl:w-3/4 space-y-6">
            <div className="bg-white p-6 rounded-lg">
              {renderImage()}
              <div className="flex items-center mt-10">
                <p className="text-3xl max-sm:text-base font-semibold">
                  $46,953.04
                </p>
                <div className="text-[#14B079] flex items-center space-x-2 py-1 px-2 rounded-sm bg-green-50 ml-8">
                  <TiArrowSortedUp color="#14B079" size={20} />
                  <p>2.51%</p>
                </div>
                <p className="text-gray-500 text-sm ml-4">(24H)</p>
              </div>
              <p className="max-sm:text-xs text-lg mt-2 pb-4 border-b border-gray-200">
                ₹ 39,42,343
              </p>
              <div>
                <TimeSeriesChart CryptoCurrency={CryptoCurrency} />
              </div>
            </div>
            <TabsComponent />
            <div className="bg-white p-6 rounded-lg space-y-12">
              <h2 className="font-semibold text-2xl">Performance</h2>
              <PriceRangeIndicator />
              <Fundamentals Cryptocurrency={CryptoCurrency} />
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h2 className="font-semibold text-2xl">Sentiment</h2>
              <h3 className="flex space-x-2 items-center mt-6">
                <span className="font-semibold text-xl text-[#44475B]">
                  Key Events
                </span>
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
            <div className="bg-white p-6 rounded-lg">
              <h2 className="font-semibold text-2xl">About {CryptoCurrency}</h2>
              <p className="font-bold text-lg mt-8">
                What is {CryptoCurrency}?
              </p>
              <p className="mt-2 text-gray-600 font-medium pb-4 border-b border-gray-200">
                {CryptoCurrency}&apos;s price today is US$16,951.82, with a
                24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24
                hours. It is currently -7.70% from its 7-day all-time high of
                $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75.
                BTC has a circulating supply of 19.24 M BTC and a max supply of
                21 M BTC.
              </p>
              <p className="font-bold text-lg mt-4">
                Lorem ipsum dolor sit amet
              </p>
              <p className="mt-2 text-gray-600 font-medium pb-4">
                Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit
                lobortis tristique pharetra. Diam id et lectus urna et tellus
                aliquam dictum at. Viverra diam suspendisse enim facilisi diam
                ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut
                sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                rhoncus.
              </p>
              <p className="mt-2 text-gray-600 font-medium pb-4">
                Diam praesent massa dapibus magna aliquam a dictumst volutpat.
                Egestas vitae pellentesque auctor amet. Nunc sagittis libero
                adipiscing cursus felis pellentesque interdum. Odio cursus
                phasellus velit in senectus enim dui. Turpis tristique placerat
                interdum sed volutpat. Id imperdiet magna eget eros donec cursus
                nunc. Mauris faucibus diam mi nunc praesent massa turpis a.
                Integer dignissim augue viverra nulla et quis lobortis
                phasellus. Integer pellentesque enim convallis ultricies at.
              </p>
              <p className="mt-2 text-gray-600 font-medium pb-4 border-b border-gray-200">
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                aliquam massa vel convallis duis ac. Mi adipiscing semper
                scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                tincidunt volutpat in eget. Ullamcorper dui
              </p>
              <h2 className="font-semibold text-2xl mt-6 mb-5">
                Already Holding {CryptoCurrency}?
              </h2>
              <div className="max-md:space-y-6 md:flex items-center gap-8">
                <div className="bg-gradient-to-br from-[#79F1A4] to-[#0E5CAD] p-4 rounded-lg flex items-center gap-6 max-w-96 min-w-72">
                  <Image
                    src={"/Profits.svg"}
                    width={128}
                    height={128}
                    layout="responsive"
                    alt="Profits"
                    className="max-w-32 max-h-32"
                  />
                  <div className="space-y-6">
                    <p className="font-bold text-white text-xl">
                      Calculate your Profits
                    </p>
                    <button className="bg-white text-black flex items-center space-x-4 py-2 px-3 rounded-lg">
                      <span className="font-medium text-sm xl:text-base">
                        Check Now
                      </span>
                      <FaArrowRightLong
                        color="black"
                        className="h-3 w-3 xl:h-5 xl:w-5"
                      />
                    </button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#FF9865] to-[#EF3031] p-4 rounded-lg flex items-center gap-6 max-w-96 min-w-72">
                  <Image
                    src={"/Profits.svg"}
                    width={128}
                    height={128}
                    layout="responsive"
                    alt="Profits"
                    className="max-w-32 max-h-32"
                  />
                  <div className="space-y-6">
                    <p className="font-bold text-white text-xl">
                      Calculate your tax liability
                    </p>
                    <button className="bg-white text-black flex items-center space-x-4 py-2 px-3 rounded-lg">
                      <span className="font-medium text-sm xl:text-base">
                        Check Now
                      </span>
                      <FaArrowRightLong
                        color="black"
                        className="h-3 w-3 xl:h-5 xl:w-5"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <p className="font-medium mt-4 py-4 border-t border-gray-200 text-gray-600">
                Fermentum hendrerit imperdiet nulla viverra faucibus. Sit
                aliquam massa vel convallis duis ac. Mi adipiscing semper
                scelerisque porttitor pulvinar nunc risus. Fermentum potenti
                iaculis lacinia congue ipsum fames amet dui. Purus ultrices
                tincidunt volutpat in eget. Ullamcorper dui
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <h2 className="font-semibold text-2xl">Tokenomics</h2>
              <h4 className="font-semibold text-xl mt-6">
                Initial Distribution
              </h4>
              <PieRingChart />
              <p className="text-gray-800 mt-3">
                Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
                ornare vestibulum nunc dignissim vel consequat. Leo etiam
                nascetur bibendum amet enim sit eget leo amet. At metus orci
                augue fusce eleifend lectus eu fusce adipiscing. Volutpat
                ultrices nibh sodales massa habitasse urna felis augue. Gravida
                aliquam fermentum augue eu. Imperdiet bibendum amet aliquam
                donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
                curabitur sem posuere facilisis vitae. Sed lorem sit mauris id
                eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h2 className="font-semibold text-2xl">Team</h2>
              <p className="mt-6 text-gray-800 font-medium">
                Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing
                arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor
                id pretium quam. Facilisis purus convallis quam augue.
              </p>
              <div className="mt-8 bg-[#E8F4FD] rounded-lg sm:flex items-center gap-6 py-4 px-8">
                <div className="text-center">
                  <Image
                    src={"/TeamMember.svg"}
                    height={400}
                    width={400}
                    alt="Team Member"
                    className="rounded-lg max-sm:max-w-28 max-sm:max-h-28 max-sm:mx-auto"
                  />
                  <p className="font-medium mt-2 sm:mt-4">John Smith</p>
                  <p className="font-medium text-gray-400 text-xs">
                    Designation here
                  </p>
                </div>
                <p className="sm:text-lg text-sm">
                  Lorem ipsum dolor sit amet consectetur. In justo rutrum sit
                  sit fermentum ut libero hendrerit id. Tellus sit ornare netus
                  sagittis in nunc convallis mattis maecenas. Tempus arcu leo
                  sociis laoreet nec neque sed pellentesque viverra. Consectetur
                  proin amet ut id facilisi quis consectetur. Tellus gravida
                  ultricies feugiat sed eu egestas dolor est ipsum. Malesuada
                  etiam mi gravida praesent interdu
                </p>
              </div>
              <div className="mt-8 bg-[#E8F4FD] rounded-lg sm:flex items-center gap-6 py-4 px-8">
                <div className="text-center">
                  <Image
                    src={"/TeamMember.svg"}
                    height={400}
                    width={400}
                    alt="Team Member"
                    className="rounded-lg max-sm:max-w-28 max-sm:max-h-28 max-sm:mx-auto"
                  />
                  <p className="font-medium mt-2 sm:mt-4">John Smith</p>
                  <p className="font-medium text-gray-400 text-xs">
                    Designation here
                  </p>
                </div>
                <p className="sm:text-lg text-sm">
                  Lorem ipsum dolor sit amet consectetur. In justo rutrum sit
                  sit fermentum ut libero hendrerit id. Tellus sit ornare netus
                  sagittis in nunc convallis mattis maecenas. Tempus arcu leo
                  sociis laoreet nec neque sed pellentesque viverra. Consectetur
                  proin amet ut id facilisi quis consectetur. Tellus gravida
                  ultricies feugiat sed eu egestas dolor est ipsum. Malesuada
                  etiam mi gravida praesent interdu
                </p>
              </div>
              <div className="mt-8 bg-[#E8F4FD] rounded-lg sm:flex items-center gap-6 py-4 px-8">
                <div className="text-center">
                  <Image
                    src={"/TeamMember.svg"}
                    height={400}
                    width={400}
                    alt="Team Member"
                    className="rounded-lg max-sm:max-w-28 max-sm:max-h-28 max-sm:mx-auto"
                  />
                  <p className="font-medium mt-2 sm:mt-4">John Smith</p>
                  <p className="font-medium text-gray-400 text-xs">
                    Designation here
                  </p>
                </div>
                <p className="sm:text-lg text-sm">
                  Lorem ipsum dolor sit amet consectetur. In justo rutrum sit
                  sit fermentum ut libero hendrerit id. Tellus sit ornare netus
                  sagittis in nunc convallis mattis maecenas. Tempus arcu leo
                  sociis laoreet nec neque sed pellentesque viverra. Consectetur
                  proin amet ut id facilisi quis consectetur. Tellus gravida
                  ultricies feugiat sed eu egestas dolor est ipsum. Malesuada
                  etiam mi gravida praesent interdu
                </p>
              </div>
            </div>
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
            <div className="p-6 bg-white rounded-lg mt-8">
              <h2 className="text-2xl font-semibold">Trending Coins (24h)</h2>
              <ul className="mt-6 space-y-5">
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/Bitcoin.svg"
                      alt="Bitcoin"
                      width={26}
                      height={26}
                    />
                    <p>Ethereum(ETH)</p>
                  </div>
                  <div className="text-[#14B079] flex items-center space-x-2 py-1 px-2 rounded-sm bg-green-50 ml-8">
                    <TiArrowSortedUp color="#14B079" size={20} />
                    <p>2.51%</p>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/Bitcoin.svg"
                      alt="Bitcoin"
                      width={26}
                      height={26}
                    />
                    <p>Ethereum(ETH)</p>
                  </div>
                  <div className="text-[#14B079] flex items-center space-x-2 py-1 px-2 rounded-sm bg-green-50 ml-8">
                    <TiArrowSortedUp color="#14B079" size={20} />
                    <p>2.51%</p>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/Bitcoin.svg"
                      alt="Bitcoin"
                      width={26}
                      height={26}
                    />
                    <p>Ethereum(ETH)</p>
                  </div>
                  <div className="text-[#14B079] flex items-center space-x-2 py-1 px-2 rounded-sm bg-green-50 ml-8">
                    <TiArrowSortedUp color="#14B079" size={20} />
                    <p>2.51%</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white my-24">
        <h2 className="font-semibold text-2xl px-12 mb-6">You May Also Like</h2>
        <CurrencyCarousel />
        <h2 className="font-semibold text-2xl px-12 mt-10 mb-6">
          Trending Coins
        </h2>
        <CurrencyCarousel />
      </div>
    </>
  );
};

export default page;
