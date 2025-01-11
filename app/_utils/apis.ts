import axios from "axios";

const getCurrencyPrice = async ({
  ids,
  vs_currencies,
  include_24hr_change,
}: {
  ids: string;
  vs_currencies: string;
  include_24hr_change: string;
}) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price",
      {
        params: {
          ids,
          vs_currencies,
          include_24hr_change,
        },
      }
    );

    // Extract relevant data from the API response
    const { currency } = response.data;
    return {
      priceUSD: currency?.usd,
      priceINR: currency?.inr,
      change24h: currency?.usd_24h_change,
    };
  } catch (error) {
    console.error("Error fetching Bitcoin prices:", error);
    throw new Error("Failed to fetch Bitcoin prices.");
  }
};

const getTrendingCoins = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    // Extract the top 3 trending coins
    const trendingCoins = response.data?.coins.slice(0, 3).map((coin: any) => ({
      id: coin.item.id,
      name: coin.item.name,
      symbol: coin.item.symbol,
      marketCapRank: coin.item.market_cap_rank,
    }));

    return trendingCoins;
  } catch (error) {
    console.error("Error fetching trending coins:", error);
    throw new Error("Failed to fetch trending coins.");
  }
};

const getCoinDetails = async (coinId: string) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );

    // Extract relevant data for the price chart
    return {
      symbol: response.data?.symbol,
    };
  } catch (error) {
    console.error(`Error fetching details for coin ${coinId}:`, error);
    throw new Error("Failed to fetch coin details.");
  }
};

export { getCurrencyPrice, getTrendingCoins, getCoinDetails };
