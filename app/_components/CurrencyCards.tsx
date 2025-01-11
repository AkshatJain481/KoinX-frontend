import Image from "next/image";
import { Coin } from "../_utils/interfaces";

const CurrencyCards = ({ currency }: { currency: Coin }) => {
  return (
    <div className="border border-gray-200 rounded-xl p-4 min-w-64 cursor-pointer">
      <h5 className="flex items-center space-x-3">
        <Image
          src={currency?.item?.small}
          width={26}
          height={26}
          alt="currency"
          className="rounded-full"
        />
        <span>{currency?.item?.symbol}</span>
        {currency?.item?.data?.price_change_percentage_24h?.usd >= 0 ? (
          <span className="p-1 text-xs bg-green-50 text-green-400 rounded-sm">
            ${" "}
            {currency?.item?.data?.price_change_percentage_24h?.usd?.toFixed(2)}
            %
          </span>
        ) : (
          <span className="p-1 text-xs bg-red-50 text-red-400 rounded-sm">
            ${" "}
            {currency?.item?.data?.price_change_percentage_24h?.usd?.toFixed(2)}
            %
          </span>
        )}
      </h5>
      <p className="text-[20px] font-medium mt-2">
        ${currency?.item?.data?.price?.toFixed(2)}
      </p>
      <Image
        src={currency?.item?.data?.sparkline || "/GraphUp.svg"}
        height={58}
        width={140}
        alt="GraphSVG"
      />
    </div>
  );
};

export default CurrencyCards;
