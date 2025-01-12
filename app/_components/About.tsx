import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const About = ({ CryptoCurrency }: { CryptoCurrency: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg mt-6">
      <h2 className="font-semibold text-2xl">About {CryptoCurrency}</h2>
      <p className="font-bold text-lg mt-8">What is {CryptoCurrency}?</p>
      <p className="mt-2 text-gray-600 font-medium pb-4 border-b border-gray-200">
        {CryptoCurrency}&apos;s price today is US$16,951.82, with a 24-hour
        trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
        currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40%
        from its 7-day all-time low of $16,394.75. BTC has a circulating supply
        of 19.24 M BTC and a max supply of 21 M BTC.
      </p>
      <p className="font-bold text-lg mt-4">Lorem ipsum dolor sit amet</p>
      <p className="mt-2 text-gray-600 font-medium pb-4">
        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
        tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at.
        Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque
        fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien
        morbi sodales odio sed rhoncus.
      </p>
      <p className="mt-2 text-gray-600 font-medium pb-4">
        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas
        vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus
        felis pellentesque interdum. Odio cursus phasellus velit in senectus
        enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet
        magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent
        massa turpis a. Integer dignissim augue viverra nulla et quis lobortis
        phasellus. Integer pellentesque enim convallis ultricies at.
      </p>
      <p className="mt-2 text-gray-600 font-medium pb-4 border-b border-gray-200">
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
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
        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa
        vel convallis duis ac. Mi adipiscing semper scelerisque porttitor
        pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum
        fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper
        dui
      </p>
    </div>
  );
};

export default About;
