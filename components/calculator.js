import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Card, Accordion, Modal, Form, Button } from "react-bootstrap";

export default function banner(props) {
  const [price, setPrice] = useState(props.price);
  const [volume, setVolume] = useState(props.volume);
  const [rangeValue, setRangeValue] = useState(30);
  const [inputAmount, setInputAmount] = useState(1000000000);
  const [inputVolume, setInputVolume] = useState(volume);
  const [inputPrice, setInputPrice] = useState(price);
  const [inputPotentialPrice, setInputPotentialPrice] = useState(price);
  const [calculatedInterest, setCalculatedInterest] = useState(0);

  useEffect(() => {
    setCalculatedInterest(calculateInterest(inputAmount));
  });

  useEffect(() => {
    setPrice(props.price);
    setVolume(props.volume);
    setInputPrice(price);
    setInputPotentialPrice(price);
    setInputVolume(volume);
    setRangeValue(30);
    props.setShow(props.show);
  }, [props.show, props.price, props.volume]);

  const financial = (x) => {
    return Number.parseFloat(x).toFixed(2);
  };

  const calculateInterest = () => {
    var answer;
    const supplyOwned = inputAmount / 1500000000000;
    const dailyReturnDollars = supplyOwned * (inputVolume / 2) * 0.1;
    const dailyReturnRate =
      dailyReturnDollars / (inputAmount * inputPotentialPrice);
    answer =
      inputAmount *
      inputPotentialPrice *
      Math.exp(dailyReturnRate * rangeValue);
    return financial(answer);
  };

  const getPercentage = (compoundedAmount) => {
    const answer =
      (compoundedAmount / (inputPrice * inputAmount)) * 100;
    return financial(answer-100);
  };

  return (
    <div>
      <Modal
        show={props.show}
        onHide={() => props.setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            CCC Reflection Calculator
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="calculatorContent">
            <div className="inputGroup">
              <Form.Group className="inputItem" controlId="calcInput">
                <Form.Label>CCC Amount</Form.Label>
                <Form.Control
                  value={inputAmount}
                  onInput={(e) => setInputAmount(e.target.value)}
                  placeholder="e.g 100000000"
                  defaultValue="100000000"
                />
              </Form.Group>
              <Form.Group className="inputItem" controlId="calcInput">
                <Form.Label>24hr Volume</Form.Label>
                <Form.Control
                  value={inputVolume}
                  onInput={(e) => setInputVolume(e.target.value)}
                  placeholder="e.g 100000"
                  defaultValue={volume}
                />
                <button
                  onClick={() => setInputVolume(volume)}
                  className="calcCurrentButton"
                >
                  Current
                </button>
              </Form.Group>
            </div>
            <div className="inputGroup">
              <Form.Group className="inputItem" controlId="calcInput">
                <Form.Label>Current Price</Form.Label>
                <Form.Control
                  value={inputPrice}
                  onInput={(e) => setInputPrice(e.target.value)}
                  placeholder="e.g 0.000004"
                  defaultValue={price}
                />
                <button
                  onClick={() => setInputPrice(price)}
                  className="calcCurrentButton"
                >
                  Current
                </button>
              </Form.Group>
              <Form.Group className="inputItem" controlId="calcInput">
                <Form.Label>Potential Price</Form.Label>
                <Form.Control
                  value={inputPotentialPrice}
                  onInput={(e) => setInputPotentialPrice(e.target.value)}
                  placeholder="e.g 0.000004"
                  defaultValue={price}
                />
                <button
                  onClick={() => setInputPotentialPrice(price)}
                  className="calcCurrentButton"
                >
                  Current
                </button>
              </Form.Group>
            </div>

            <Form.Label>{rangeValue} days</Form.Label>
            <Form.Range
              onChange={(e) => setRangeValue(e.target.value)}
              defaultValue={30}
              min="1"
              max="365"
            />
            <div className="calcStats">
              <div className="calcStatsGroup">
                <h5 className="statLabel">Current Value</h5>
                <p className="statNumber">
                  ${financial(inputAmount * inputPrice)}
                </p>
              </div>
              <div className="calcStatsGroup">
                <h5 className="statLabel">Potential Return</h5>
                <p className="statNumber">${calculatedInterest}</p>
              </div>
              <div className="calcStatsGroup">
                <h5 className="statLabel">Potential Return Percentage</h5>
                <p className="statNumber">
                  {getPercentage(calculatedInterest) }%
                </p>
              </div>
              <div className="calcStatsGroup">
                <h5 className="statLabel">Potential CCC Amt.</h5>
                <p className="statNumber">{financial(calculatedInterest / inputPotentialPrice)}</p>
              </div>
              <div className="calcStatsGroup">
                <h5 className="statLabel">Potential # of mcNuggets</h5>
                <p className="statNumber">
                  {Math.floor(calculatedInterest / 0.225)}
                </p>
              </div>
            </div>
            <Accordion className="accordion">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Why this calculator is very conservative</Accordion.Header>
    <Accordion.Body>
                <p>Does not factor in</p>
                <ul>
              <li>sell tax/treasury</li>
              <li>buybacks or reflections in the burn address</li>
              <li>price appreciation in reflections earned</li>
              <li>increased volume with price appreciation</li>
                </ul>
                <p>Assumes</p>
                <ul>
                <li>buy volume is half of total volume</li>
                <li>treasury bears no returns and is not involved</li>
                </ul>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
