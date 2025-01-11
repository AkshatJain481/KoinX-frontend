import { TiArrowSortedUp } from "react-icons/ti";

interface PriceRangeProps {
  currentPrice?: number;
  todayLow?: number;
  todayHigh?: number;
  weekLow?: number;
  weekHigh?: number;
}

const PriceRangeIndicator = ({
  currentPrice = 48637.83,
  todayLow = 46930.22,
  todayHigh = 49343.83,
  weekLow = 16930.22,
  weekHigh = 49743.83,
}: PriceRangeProps) => {
  // Calculate percentage positions for indicators
  const getTodayPosition = () => {
    const range = todayHigh - todayLow;
    return ((currentPrice - todayLow) / range) * 100;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  return (
    <div className="space-y-6">
      {/* Today's Range */}
      <div className="flex items-center gap-2">
        <div className="text-gray-600 w-1/6 space-y-3">
          <p className="text-xs sm:text-base">Today&apos;s Low</p>
          <p className="font-medium text-xs sm:text-lg">
            ${formatPrice(todayLow)}
          </p>
        </div>
        <div className="relative h-2 w-2/3">
          <div className="absolute w-full h-full rounded-full overflow-hidden">
            <div className="relative w-full h-full">
              {/* Gradient background */}
              <div className="absolute w-full h-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500" />
            </div>
          </div>
          {/* Current price indicator */}
          <div
            className="absolute top-1/2"
            style={{ left: `${getTodayPosition()}%` }}
          >
            <TiArrowSortedUp className="transform" color="black" size={20} />
            <div className="absolute top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span className="text-sm text-gray-500 font-medium">
                ${formatPrice(currentPrice)}
              </span>
            </div>
          </div>
        </div>
        <div className="text-gray-600 w-1/6 space-y-3 text-right">
          <p className="text-xs sm:text-base">Today&apos;s High</p>
          <p className="font-medium text-xs sm:text-lg">
            ${formatPrice(todayHigh)}
          </p>
        </div>
      </div>

      {/* 52 Week Range */}
      <div className="gap-2 flex items-center">
        <div className="text-gray-600 space-y-3 w-1/6">
          <p className="text-xs sm:text-base">52W Low</p>
          <p className="font-medium text-xs sm:text-lg">
            ${formatPrice(weekLow)}
          </p>
        </div>
        <div className="relative h-2 w-2/3">
          <div className="absolute w-full h-full rounded-full overflow-hidden">
            <div className="relative w-full h-full">
              {/* Gradient background */}
              <div className="absolute w-full h-full bg-gradient-to-r from-red-500 via-yellow-400 to-green-500" />
            </div>
          </div>
        </div>
        <div className="text-gray-600 space-y-3 w-1/6 text-right">
          <p className="text-xs sm:text-base">52W High</p>
          <p className="font-medium text-xs sm:text-lg">
            ${formatPrice(weekHigh)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeIndicator;
