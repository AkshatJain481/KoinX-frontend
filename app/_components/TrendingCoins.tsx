import Image from "next/image";
import { Coin, CoinsResponse } from "../_utils/interfaces";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";

const TrendingCoins = ({
  TrendingCurrencies,
}: {
  TrendingCurrencies: CoinsResponse["coins"];
}) => {
  return (
    <div className="p-6 bg-white rounded-lg mt-8">
      <h2 className="text-2xl font-semibold">Trending Coins (24h)</h2>
      <ul className="mt-6 space-y-5">
        {TrendingCurrencies?.slice(0, 3)?.map((coin: Coin, index: number) => (
          <li key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src={coin?.item?.small}
                alt={coin?.item?.symbol}
                width={26}
                height={26}
                className="rounded-full"
              />
              <p>{coin?.item?.name}</p>
            </div>
            {coin?.item?.data?.price_change_percentage_24h?.usd >= 0 ? (
              <div className="text-[#14B079] flex items-center space-x-2 py-1 px-2 rounded-sm bg-green-50 ml-8">
                <TiArrowSortedUp color="#14B079" size={20} />
                <p>
                  {coin?.item?.data?.price_change_percentage_24h?.usd?.toFixed(
                    2
                  )}
                  %
                </p>
              </div>
            ) : (
              <div className="text-red-500 flex items-center space-x-2 py-1 px-2 rounded-sm bg-red-50 ml-8">
                <TiArrowSortedDown color="red" size={20} />
                <p>
                  {coin?.item?.data?.price_change_percentage_24h?.usd?.toFixed(
                    2
                  )}
                  %
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingCoins;
