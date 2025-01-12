import CurrencyTitle from "./CurrencyTitle";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import TimeSeriesChart from "./Chart";

const CurrencyChart = ({
  CryptoCurrency,
  CurrencySymbol,
  CurrencyData,
}: {
  CryptoCurrency: string;
  CurrencySymbol: { symbol: string } | undefined;
  CurrencyData: {
    priceUSD: number;
    change24hUSD: number;
    priceINR: number;
    change24hINR: number;
  };
}) => {
  return (
    <div className="bg-white p-2 sm:p-6 rounded-lg mb-6">
      <div className="max-sm:hidden">
        <CurrencyTitle
          CurrencySymbol={CurrencySymbol}
          CryptoCurrency={CryptoCurrency}
        />
      </div>
      <div className="flex items-center sm:mt-10">
        <p className="text-3xl font-semibold">$ {CurrencyData?.priceUSD}</p>
        {CurrencyData?.change24hUSD >= 0 ? (
          <div className="text-[#14B079] flex items-center space-x-2 py-1 px-2 rounded-sm bg-green-50 ml-8">
            <TiArrowSortedUp color="#14B079" size={20} />
            <p>{CurrencyData?.change24hUSD?.toFixed(2)}</p>
          </div>
        ) : (
          <div className="text-red-500 flex items-center space-x-2 py-1 px-2 rounded-sm bg-red-50 ml-8">
            <TiArrowSortedDown color="red" size={20} />
            <p>{CurrencyData?.change24hUSD?.toFixed(2)}</p>
          </div>
        )}
        <p className="text-gray-500 text-sm ml-4">(24H)</p>
      </div>
      <p className="text-lg mt-2 pb-4 border-b border-gray-200">
        ₹ {CurrencyData?.priceINR}
      </p>
      <div>
        <TimeSeriesChart
          BaseValue={CurrencyData?.priceUSD}
          CryptoCurrency={CryptoCurrency}
        />
      </div>
    </div>
  );
};

export default CurrencyChart;
