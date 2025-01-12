import Image from "next/image";

const CurrencyTitle = ({
  CryptoCurrency,
  CurrencySymbol,
}: {
  CryptoCurrency: string;
  CurrencySymbol: { symbol: string } | undefined;
}) => {
  switch (CryptoCurrency) {
    case "Bitcoin":
      return (
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-3">
            <Image src="/Bitcoin.svg" alt="Bitcoin" width={36} height={36} />
            <h1 className="text-2xl font-semibold">{CryptoCurrency}</h1>
            <span className="font-semibold text-gray-500">
              {CurrencySymbol?.symbol?.toUpperCase()}
            </span>
          </div>
          <div className="text-white bg-gray-500 p-2 rounded-lg">Rank #1</div>
        </div>
      );
    case "Ethereum":
      return (
        <div className="flex items-center space-x-12">
          <div className="flex items-center space-x-3">
            <Image src="/Ethereum.svg" alt="Ethereum" width={36} height={36} />
            <h1 className="text-2xl font-semibold">{CryptoCurrency}</h1>
            <span className="font-semibold text-gray-500">
              {CurrencySymbol?.symbol?.toUpperCase()}
            </span>
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
            <span className="font-semibold text-gray-500">
              {CurrencySymbol?.symbol?.toUpperCase()}
            </span>
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
            <span className="font-semibold text-gray-500">
              {CurrencySymbol?.symbol?.toUpperCase()}
            </span>
          </div>
          <div className="text-white bg-gray-500 p-2 rounded-lg">Rank #1</div>
        </div>
      );
  }
};

export default CurrencyTitle;
