import { ReactComponent as EmptyStar } from "../assets/emptyStar.svg";
import { ReactComponent as Star } from "../assets/star.svg";
import React, { useState } from "react";

function Header() {
  const [filterFav, setFilterFav] = useState(false);
  const toggleFilterHandler = function () {
    setFilterFav((prevState) => !prevState);
  };

  return (
    <div className="header">
      <div className="small-field"></div>
      <div className="small-field bolded">#</div>
      <div className="small-field bolded left">Name</div>
      <div className="large-field bolded">Price</div>
      <div className="large-field bolded">24h %</div>
      <div className="large-field bolded">All Time High</div>
      <div className="large-field bolded">All Time Low</div>
      <div className="large-field bolded">Market Cap</div>
    </div>
  );
}

export default Header;
