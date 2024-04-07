import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MarketCard from "../components/MarketCard";
import CatBar from "../components/CatBar";
import "./App.css";

const HomePage = () => {

  return (
    <>
      <section className='home-hero'>
        <div className="homecontent">
        <div style={{ width: '100%', height: 'auto', overflow: 'hidden' }}>
      <video
        src="src\assets\video.mp4"
        autoPlay
        loop
        muted
        style={{ width: '100%', display: 'block' }}
      />
    </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;