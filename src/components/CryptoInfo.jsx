import { ReactComponent as SearchIcon } from "../assets/search.svg";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Row from "./Row";
import Filters from "./Filters";
import mockData from "../mockData/data.json";
import { useEffect, useState } from "react";
import getCoinsData from "../apis/coins/getCoinsData";

const CryptoInfo = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    return () => {
      getCoinsData().then((res) => {
        setCoins(res);
      });
    };
  }, []);

  console.log(coins);

  return (
    <div className="container">
      <h1 className="title">
        Crypto Tracker <SearchIcon className="searchIcon" />
      </h1>
      <Filters />
      <SearchBar />
      <Header />
      {mockData.map((coin, index) => (
        <Row key={index} coin={coin} />
      ))}
    </div>
  );
};

export default CryptoInfo;
