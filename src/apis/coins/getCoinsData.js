import axios from "axios";

const getCoinsData = async () => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=DESC&per_page=10&page=1`
  );
  return response;
};

export default getCoinsData;
