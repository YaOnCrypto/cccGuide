import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Card, Accordion, Modal, Form, Button } from "react-bootstrap";
import { useRouter } from 'next/router'


export default function banner(props) {
  const [poolTus, setPoolTus] = useState(2710.97);
  const [poolShare, setPoolShare] = useState(1);
  const [tusPrice, setTusPrice] = useState(props.tusPrice);

  useEffect(() => {
    setTusPrice(props.tusPrice);
    setPoolTus(2710.97);
    setPoolShare(1);
  }, [props.tusPrice]);

  const router = useRouter()

  const financial = (x) => {
    return Number.parseFloat(x).toFixed(2);
  };


  return (
    <div>
      <Modal
        show={router.query.modalId == "hunt"}
        onHide={() => { router.push('/', undefined, { scroll: false }) }}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title className="hunt-title" id="example-custom-modal-styling-title">
            HUNT Rewards Calculator
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="calculatorContent">
            <div className="inputGroup" style={{ justifyContent: "space-around" }}>
              <Form.Group className="inputItem" controlId="calcInput">
                <Form.Label className="hunt-font">TUS Price</Form.Label>
                <Form.Control
                  value={tusPrice}
                  size="lg"
                  className="hunt-font"
                  onInput={(e) => { !isNaN(e.target.value) && e.target.value.length <= 7 ? setTusPrice(e.target.value) : null }}
                  placeholder="Price of TUS token"
                  defaultValue={Number.parseFloat(tusPrice).toFixed(4)}
                />
                <button
                  onClick={() => setTusPrice(props.tusPrice)}
                  className="calcCurrentButton tusCurrent"
                  style={{ fontSize: "0.5em" }}
                >
                  Current
                </button>
              </Form.Group>
            </div>
            <div className="inputGroup" style={{ justifyContent: "space-around" }}>
              <Form.Group className="inputItem" controlId="calcInput">
                <Form.Label className="hunt-font">TUS Yield per Pool</Form.Label>
                <Form.Control
                  value={poolTus}
                  size="lg"
                  className="hunt-font"
                  onInput={(e) => { !isNaN(e.target.value) && e.target.value.length < 9 ? setPoolTus(e.target.value) : null }}
                  placeholder="min. = 2710.97"
                  defaultValue="2710.97"
                />
              </Form.Group>
            </div>
            <div className="inputGroup" style={{ justifyContent: "space-around" }}>
              <Form.Group className="inputItem" controlId="calcInput">
                <Form.Label className="hunt-font">Pool Share</Form.Label>
                <Form.Control
                  size="lg"
                  className="hunt-font"
                  value={poolShare}
                  onInput={(e) => { !isNaN(e.target.value) ? e.target.value <= 100 && e.target.value.length < 8 ? setPoolShare(e.target.value) : null : null }}
                  placeholder="1-100"
                  defaultValue={1}
                />
                <button
                  className="hunt-font"
                  className="calcCurrentButton"
                >
                  %
                </button>
              </Form.Group>
            </div>


            <div className="calcStats">
              <div className="calcStatsGroup hunt-font" style={{ justifyContent: "space-evenly" }}>
                <table>
                  <tr>
                    <th>Daily Yield</th>
                    <th>{financial(poolTus * poolShare / 100)} TUS</th>
                  </tr>
                  <tr>
                    <td>$ value </td>
                    <td>${financial(poolTus * poolShare / 100 * tusPrice)}</td>
                  </tr>
                  <tr>
                    <td>Monthly Yield</td>
                    <td>{financial(poolTus * poolShare / 100 * 30)} TUS</td>
                  </tr>
                  <tr>
                    <td>$ value </td>
                    <td>${financial(poolTus * poolShare / 100 * 30 * tusPrice)}</td>
                  </tr>
                </table>

              </div>
            </div>

            <div style={{ height: "175px" }}></div>

            <img className="TusImage" src="https://assets.coingecko.com/coins/images/20012/large/img-tus.png?1636378482" />
            <p className="huntCalcInfo">To aproximate TUS yield per pool, check these win/lose <a href="https://docs.crabada.com/whitepaper/play-to-earn/scenerios">scenarios</a>.
              With 5 teams mining, the minimum amount possible is <i>2710.97</i> (factoring in the 15% performance fee) </p>
          </div>

        </Modal.Body>
      </Modal>
    </div>
  );
}
