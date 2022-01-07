import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Card, Modal, Carousel, Form, Button } from "react-bootstrap";

export default function buyGuide(props) {
  const [showLayer, setShowLayer] = useState("first");

  useEffect(() => {
    if (props.show) setShowLayer("first");
  }, [props.show]);

  const imageCarousel = (images) => {
    var finalCode = [];
    for (var i = 0; i < images.length; i++)
      finalCode.push(
        <Carousel.Item>
          <img className="d-block w-100" src={images[i]} alt="First slide" />
        </Carousel.Item>
      );
    return (
      <Carousel wrap={false} interval={null}>
        {finalCode}
      </Carousel>
    );
  };

  const metamaskImages = [
    "/metamask_0.jpg",
    "/metamask_1.jpg",
    "/metamask_2.jpg",
    "/metamask_3.jpg",
    "/metamask_4.jpg",
  ];

  const coinbaseImages = [
    "/coinbase_0.jpg",
    "/coinbase_1.jpg",
    "/coinbase_2.jpg",
  ];

  const kucoinImages = ["/kucoin_0.jpg", "/kucoin_1.jpg"];

  const binanceImages = [
    "/binance_0.jpg",
    "/binance_1.jpg",
    "/binance_2.jpg",
    "/binance_3.jpg",
    "/binance_4.jpg",
  ];

  const buyImages = ["/buy_3.jpg", "/buy_4.jpg", "/buy_5.jpg"]; //scammer last page

  const firstLayer = (
    <div>
      <div className="guideLabel">Do you have AVAX in your wallet?</div>
      <div className="buttonGroup">
        <button onClick={() => setShowLayer("traderJoe")}>Yes</button>
        <button onClick={() => setShowLayer("metamask")}>No</button>
      </div>
    </div>
  );

  const metamaskLayer = (
    <div>
      {imageCarousel(metamaskImages)}
      <div className="guideLabel caption">
        Add avalanche to your wallet if not already,
        <br /> press Next to continue
      </div>
      <div className="buttonGroup">
        <button onClick={() => setShowLayer("cexQuestions")}>Next</button>
      </div>
    </div>
  );

  const cexQuestionsLayer = (
    <div>
      <div className="guideLabel">Pick a CeX to buy AVAX</div>
      <div className="buttonGroup">
        <Button onClick={() => setShowLayer("binance")}>Binance</Button>
        <Button onClick={() => setShowLayer("coinbase")}>Coinbase</Button>
        <Button onClick={() => setShowLayer("kucoin")}>KuCoin</Button>
        <Button onClick={() => setShowLayer("otherCex")}>Other</Button>
      </div>
    </div>
  );

  const cexLayer = (cex) => {
    return (
      <div>
        {imageCarousel(eval(cex + "Images"))}
        <div className="guideLabel caption">
          Withdraw AVAX to your wallet using {cex}, <br />
          press Next to continue
        </div>
        <div className="buttonGroup">
          <button onClick={() => setShowLayer("traderJoe")}>Next</button>
        </div>
      </div>
    );
  };

  const otherCexLayer = (
      <div>
        <div className="guideLabel caption">
          Create an account with the exchanges previously listed, or figure out another way to get AVAX on your wallet
        </div>
        <div className="buttonGroup">
          <button onClick={() => setShowLayer("traderJoe")}>Next</button>
        </div>
      </div>
    )

  const traderJoeLayer = (
    <div>
      {imageCarousel(buyImages)}
      {/* <p>1. Add .111 with the </p> */}

      <div className="guideLabel caption">
        Press the button below and follow the above instructions
      </div>
      <div className="buttonGroup">
        <button
          onClick={() =>
            window.open(
              "https://traderjoexyz.com/#/trade?outputCurrency=0x4939B3313E73ae8546b90e53E998E82274afDbDB",
              "_blank"
            )
          }
        >
          Buy $CCC (TraderJoe)
        </button>
        <button onClick={() =>{props.setShow(false)}}>Done</button>
      </div>
    </div>
  );

  return (
    <div>
      <p>{props.show}</p>
      <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        fullscreen
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            CCC Buy Guide
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        { showLayer != "first" ? <button onClick={ () => setShowLayer("first")} className="backButton"><img src="https://www.svgrepo.com/show/114939/go-back-arrow.svg"></img></button> : null}
          <div className="guideContainer">
            {showLayer == "first" ? firstLayer : null}
            {showLayer == "metamask" ? metamaskLayer : null}
            {showLayer == "cexQuestions" ? cexQuestionsLayer : null}
            {showLayer == "coinbase" ||
            showLayer == "binance" ||
            showLayer == "kucoin"
              ? cexLayer(showLayer)
              : null}
            {showLayer == "traderJoe" ? traderJoeLayer : null}
            {showLayer == "otherCex" ? otherCexLayer : null}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
