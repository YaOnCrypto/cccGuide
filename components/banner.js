import Head from "next/head";
import React, { useState, useEffect } from "react";
import { Card, Navbar, Nav, Container } from "react-bootstrap";
import { Parallax } from 'react-scroll-parallax';


export default function banner (props) {

    const [price, setPrice] = useState();
    const [volume, setVolume] = useState();
    useEffect(() => {
        setPrice(props.price)
        setVolume(props.volume)
    });
  
    const calcMc = (price, supply) =>{
      const mc = price*supply
      return mc.toLocaleString()
    }

    return(
        <div>
        <div className="bannerContainer">
        <Head>
          <title>CCC Community Guide</title>
        </Head>
        <Navbar>
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <img src="/cccLogo.svg" />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="">Home</Nav.Link>
              {/* <Nav.Link href="">Main Resources</Nav.Link> //make scroll down */}
              <Nav.Link href="https://medium.com/@crosschaincapital">Medium</Nav.Link>
              <Nav.Link href="https://discord.gg/wCx2yHPUMY">Discord</Nav.Link>
              <Nav.Link href="https://t.me/crosschaincapital">Telegram</Nav.Link>
              <Nav.Link href="https://www.instagram.com/crosschaincapital/">Instagram</Nav.Link>
              <Nav.Link href="https://www.tiktok.com/@crosschaincapital">TikTok</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

<div className="waveContainer">
        <img className="cccWaves" src="/cccWaves.svg" />
        </div>

        <div className="textContainer container">
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <p className="title">
            CCC Community <br /> Guide
          </p>
          <p className="subtitle">
            Info, Questions, and Recaps and more
            <br /> Made to and from the Community
          </p>
          <div className="statsContainer">
            <div className="statsItem">
              <p className="statsNumber">${price}</p>
              <p className="statsLabel">Price</p>
            </div>
            <div className="statsItem">
              <p className="statsNumber">${calcMc(price, 1500000000000)}</p>
              <p className="statsLabel">Market Cap</p>
            </div>
            <div className="statsItem">
              <p className="statsNumber">${volume ? volume.toLocaleString() : ''}</p>
              <p className="statsLabel">Volume</p>
            </div>
          </div>
        </Parallax>
        </div>

        <video className="loop" loop autoPlay muted>
          <source
            src="https://cdn.dribbble.com/users/32512/screenshots/16110727/media/db20d808a4f04a33a57b962eba5a78b9.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
</div>
    )
}