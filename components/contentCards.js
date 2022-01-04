import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Card, Row, Modal, Form, Button } from "react-bootstrap";
import Calculator from "./calculator.js";
import BuyGuide from "./buyGuide.js";

export default function banner(props) {
  const [CalcShow, setCalcShow] = useState(false);
  const [buyGuideShow, setBuyGuideShow] = useState(false);
  const [price, setPrice] = useState(props.price);
  const [volume, setVolume] = useState(props.volume);

  return (
    <div>
      <Calculator
        show={CalcShow}
        setShow={setCalcShow}
        price={props.price}
        volume={props.volume}
      />
            <BuyGuide
        show={buyGuideShow}
        setShow={setBuyGuideShow}
      />

      <Row>
        <Card onClick={() => setBuyGuideShow(true)} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            height="150"
            src="https://miro.medium.com/max/1400/0*uhQXvfVInMqINlj3.jpeg"
          />
          <Card.Body>
            <Card.Title>How to Buy</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Interactive Guide
            </Card.Subtitle>
            <Card.Text>
              An interactive, step-by-step walkthrough on buying $CCC for crypto
              begginers from scratch. Compiled from CCC instagram and discord official sources.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card onClick={() => setCalcShow(true)} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            width="150"
            height="160"
            src="https://n6f2f8b4.stackpathcdn.com/wp-content/uploads/2012/10/compoundinterest2.jpg"
          />
          <Card.Body>
            <Card.Title>Reflections Calculator</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Calculator
            </Card.Subtitle>
            <Card.Text>
              A calculator for approximating daily to yearly reflections
              based on volume, token amount, and price.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          onClick={() => window.open("https://www.youtube.com/playlist?list=PLSoFY8ejw45Dq3t3YLEX_Q0pSkTvSD_PC", "_blank")}
          style={{ width: "18rem" }}
        >
          <Card.Img
            variant="top"
            width="150"
            height="160"
            src="https://t3.ftcdn.net/jpg/00/94/00/44/360_F_94004479_1hInuNjorJITcIUq4dEt0Ll4ixvPr6Qi.jpg"
          />{" "}
          <Card.Body>
            <Card.Title>Community Calls</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Playlist</Card.Subtitle>
            <Card.Text>
              CCC has weekly scheduled community calls filled with updates, reports, resources, and Q&As. Recommended for anyone actively following the project.
            </Card.Text>
          </Card.Body>
        </Card>

        <Card
          onClick={() => window.open("https://discord.gg/wCx2yHPUMY", "_blank")}
          style={{ width: "18rem" }}
        >
          <Card.Img
            variant="top"
            width="150"
            height="160"
            src="https://support.discord.com/hc/article_attachments/1500015317842/Rebrand_Blog__1_.png"
          />{" "}
          <Card.Body>
            <Card.Title>#announcements</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Live feed</Card.Subtitle>
            <Card.Text>
              Discord live feed coming soon; for now links to a discord invite
            </Card.Text>
          </Card.Body>
        </Card>

        {/* <Card
          onClick={() => window.open("https://discord.gg/wCx2yHPUMY", "_blank")}
          style={{ width: "18rem" }}
        >
          <Card.Img
            variant="top"
            width="150"
            height="160"
            src="https://support.discord.com/hc/article_attachments/1500015317842/Rebrand_Blog__1_.png"
          />
          <Card.Body>
            <Card.Title>#team updates</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Live feed</Card.Subtitle>
            <Card.Text>
              Discord live feed coming soon; for now links to a discord invite
            </Card.Text>
          </Card.Body>
        </Card> */}
      </Row>
    </div>
  );
}
