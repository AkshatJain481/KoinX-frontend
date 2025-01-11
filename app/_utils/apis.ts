import axios from "axios";

const getCurrencyPrice = async ({
  ids,
  vs_currencies = "inr,usd",
  include_24hr_change = true,
}: {
  ids: string;
  vs_currencies?: string;
  include_24hr_change?: boolean;
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

    return {
      priceUSD: response.data[ids]?.usd,
      priceINR: response.data[ids]?.inr,
      change24hUSD: response.data[ids]?.usd_24h_change,
      change24hINR: response.data[ids]?.inr_24h_change,
    };
  } catch (error) {
    console.warn("Error fetching Bitcoin prices:", error);
    return {
      priceUSD: 0,
      priceINR: 0,
      change24hUSD: 0,
      change24hINR: 0,
    };
  }
};

const getTrendingCoins = async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );

    return response.data?.coins;
  } catch (error) {
    console.warn("Error fetching trending coins:", error);
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
    console.warn(`Error fetching details for coin ${coinId}:`, error);
  }
};

export { getCurrencyPrice, getTrendingCoins, getCoinDetails };
