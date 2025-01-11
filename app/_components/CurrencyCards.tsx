import Image from "next/image";

const CurrencyCards = () => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 min-w-64">
      <h5 className="flex items-center space-x-3">
        <Image src="/Bitcoin.svg" width={26} height={26} alt="currency" />
        <span>BTC</span>
        <span className="p-1 text-xs bg-green-50 text-green-400 rounded-sm">
          +0.52%
        </span>
      </h5>
      <p className="text-[20px] font-medium mt-2">$45,332.83</p>
      <Image src={"/GraphUp.svg"} height={58} width={140} alt="GraphSVG" />
    </div>
  );
};

export default CurrencyCards;
