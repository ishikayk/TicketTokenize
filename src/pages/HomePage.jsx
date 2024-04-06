import React, { useState, useEffect } from "react";
import { Box, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import MarketCard from "../components/MarketCard";
import CatBar from "../components/CatBar";
import "./App.css";

const HomePage = () => {
  const eventBanners = [
    "https://i.pinimg.com/736x/0c/c0/d5/0cc0d56f11f3e3b9030010d1eab06013.jpg",
    "https://img.freepik.com/premium-psd/soccer-sports-tournament-banner-flyer-social-media-post_126068-417.jpg",
    "https://img.freepik.com/premium-psd/soccer-sports-match-day-banner-flyer-social-media-post_126068-415.jpg",
  ];

  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % eventBanners.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [eventBanners.length]);

  const recommendedMovies = [
    { eventname: 'Movie 1', type: 'movie', user: 'User 1', location: 'Hollywood', cost: "$10" },
    { eventname: 'Movie 2', type: 'movie', user: 'User 2', location: 'Bollywood', cost: "$15" },
    { eventname: 'Movie 3', type: 'movie', user: 'User 3', location: 'Tollywood', cost: "$12" },
    { eventname: 'Movie 4', type: 'movie', user: 'User 4', location: 'Kollywood', cost: "$18" },
    { eventname: 'Movie 5', type: 'movie', user: 'User 5', location: 'Mollywood', cost: "$20" }
  ];

  return (
    <>
      <section className="recommend-movies">
        <h3>Recommended Movies</h3>
        <TransitionGroup>
          {recommendedMovies.map((movie, index) => (
            <CSSTransition key={index} timeout={500} classNames="fade">
              <div>
                <MarketCard {...movie} />
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </section>
      <section className='home-hero'>
        {/* Image slider */}
        <div className="image-slider">
          <img src={eventBanners[currentBannerIndex]} alt="Event Banner" />
        </div>
      </section>
      <section className='instruct'>
        <h3>About Us</h3>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Accordion sx={{ width: '70%' }}>
            <AccordionSummary>About Our Ticketing App</AccordionSummary>
            <AccordionDetails>
              <p>
                Our ticket buying web app revolutionizes the way you purchase and resell event tickets.
                We leverage blockchain technology, specifically Solana tokens, to ensure secure and transparent
                transactions for ticket purchases and resales.
              </p>
              <p>
                With our app, you can buy tickets for various events hassle-free. Moreover, our built-in
                resale platform ensures that you can resell your tickets at a fair price, eliminating
                the need for black market trades. Every resale transaction requires a valid Solana token,
                guaranteeing authenticity and fairness.
              </p>
            </AccordionDetails>
          </Accordion>
        </Box>
      </section>
    </>
  );
}

export default HomePage;