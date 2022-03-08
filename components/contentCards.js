import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Card, Row, Modal, Form, Button } from "react-bootstrap";
import Calculator from "./calculator.js";
import HuntCalc from "./huntCalc.js"
import BuyGuide from "./buyGuide.js";
import Link from 'next/link'

export default function banner(props) {
  const [CalcShow, setCalcShow] = useState(false);
  const [buyGuideShow, setBuyGuideShow] = useState(false);
  

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
      <HuntCalc
              tusPrice={props.tusPrice}
      />

      <Row>
      <Link scroll={false} href={`/?modalId=buyGuide`} as={`/?modalId=buyGuide`}>
        <Card onClick={() => setBuyGuideShow(true)} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            height="150"
            src="ccc-thumbnail.png"
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
          </Link>
        <Link scroll={false} href={`/?modalId=hunt`} as={`/?modalId=hunt`}>
        <Card
          style={{ width: "18rem" }}
        >
          <Card.Img
            variant="top"
            width="150"
            height="160"
            src="/hunt-thumbnail2.png"
          />{" "}
          <Card.Body>
            <Card.Title className="hunt-title">HUNT Crabada Calculator</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Calculator</Card.Subtitle>
            <Card.Text>
            A calculator for approximating daily and monthly TUS yields
              for Crabada Hunt NFT pools.
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>
        <Link scroll={false} href={`/?modalId=cccCalc`} as={`/?modalId=cccCalc`}>
        <Card onClick={() => setCalcShow(true)} style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            width="150"
            height="160"
            src="/calc-thumbnail.png"
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
        </Link>

        <Card
          onClick={() => window.open("https://snapshot.org/#/crosschaincapitaldao.eth/", "_blank")}
          style={{ width: "18rem" }}
        >
          <Card.Img
            variant="top"
            width="150"
            height="160"
            src="/snapshot-thumbnail.png"
          />{" "}
          <Card.Body>
            <Card.Title>Snapshot Proposals</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Governance</Card.Subtitle>
            <Card.Text>
              Links to CCC's snapshot page, where DAO proposals are viewed and voted on. Very important to participate!
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
            src="/treasury-thumbnail.png"
          />{" "}
          <Card.Body>
            <Card.Title >CCC's Treasury</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Link</Card.Subtitle>
            <Card.Text>
              A live view and breakdown of CCC's strategies and holdings for the treasury. Only includes liquid ERC-20 tokens at the moment
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
            src="/docs-thumbnail.png"
          />{" "}
          <Card.Body>
            <Card.Title >Docs</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Link</Card.Subtitle>
            <Card.Text>
              Detailed, accurate, and updated information about CCC, HUNT, and other branches of the project.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          onClick={() => window.open("https://www.youtube.com/playlist?list=PL3iY8t2WSlaq33N_SsU4wDVptnGeRVZc1", "_blank")}
          style={{ width: "18rem" }}
        >
          <Card.Img
            variant="top"
            width="150"
            height="160"
            src="/calls-thumbnail.png"
          />{" "}
          <Card.Body>
            <Card.Title>Community Calls</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Link</Card.Subtitle>
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
            src="/discord-thumbnail.png"
          />{" "}
          <Card.Body>
            <Card.Title>Discord</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Link</Card.Subtitle>
            <Card.Text>
              Links to discord, CCC's main channel for community, info, and support
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
