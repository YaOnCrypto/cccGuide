import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Card, Navbar, Nav, Container } from "react-bootstrap";
import Banner from "../components/banner.js";
import ContentCards from "../components/contentCards.js";

export default function Home() {
  const [price, setPrice] = useState();
  const [volume, setVolume] = useState();
  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/cross-chain-capital")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPrice(json.market_data.current_price.usd);
        setVolume(json.market_data.total_volume.usd);
      });
  });

  return (
    <div className="cccContainer">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Rubik');
</style>

      <Banner price={price} volume={volume} />
      <div className="divider"></div>
      <div className="mainContent container">
        <div style={{ fontSize: "70px" }} className="title">
          Main Resources
        </div>

        <div className="resources">
          <ContentCards price={price} volume={volume} />
        </div>
      </div>

      <footer>
        <div className="footer">Made with ❤️ by YA#0999</div>
      </footer>
    </div>
  );
}
