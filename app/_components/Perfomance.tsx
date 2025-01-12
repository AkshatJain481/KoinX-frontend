import PriceRangeIndicator from "./PriceRangeIndicator";
import Fundamentals from "./Fundamentals";

const Perfomance = ({ CryptoCurrency }: { CryptoCurrency: string }) => {
  return (
    <div className="bg-white p-6 rounded-lg space-y-12 mt-6">
      <h2 className="font-semibold text-2xl">Performance</h2>
      <PriceRangeIndicator />
      <Fundamentals Cryptocurrency={CryptoCurrency} />
    </div>
  );
};

export default Perfomance;
