import React from "react";

function Row({ coin, isFavorite, onFavoriteClick }) {
  return (
    <div className="row">
      <div className="field small-field">
        <div className={{ height: "20px", width: "20px" }}>
          ikona
        </div>
      </div>
      <div className="field small-field">
        {coin.market_cap_rank}
      </div>
      <div className="field large-field left">
        <div className="coinName">
          <div className="coinImage">
            <img
              src={coin.image}
              style={{ height: "100%", width: "100%" }}
              alt=""
            />
          </div>
          <div className="bolded">{coin.name}</div>
          <div className="thin">{coin.symbol.toUpperCase()}</div>
        </div>
      </div>
      <div className="field large-field bolded">
        ${coin.current_price}
      </div>
      <div className="field large-field bolded">
        ${coin.high_24h}
      </div>
      <div className="field large-field bolded">${coin.ath}</div>
      <div className="field large-field bolded">$25</div>
    </div>
  );
}

export default Row;
