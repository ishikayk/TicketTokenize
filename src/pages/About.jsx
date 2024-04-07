import { useState } from "react";
import { Box, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import "./App.css";

const About = () => {
  return (
    <>
      <section style={{marginTop: '200px'}}>
        <div sx={{display: 'flex', justifyContent: 'center', marginLeft: "20px"}}>
          <h2 style={{color: '#7C8DB0'}}>About Aptickets</h2>
              <p style={{color: 'white', margin: '80px' }}>
                Our ticket buying web app revolutionizes the way you purchase and resell event tickets. 
                We leverage blockchain technology, specifically Aptos tokens, to ensure secure and transparent 
                transactions for ticket purchases and resales.
              </p>
              <p style={{color: 'white' }}>
                With our app, you can buy tickets for various events hassle-free. Moreover, our built-in 
                resale platform ensures that you can resell your tickets at a fair price, eliminating 
                the need for black market trades. Every resale transaction requires a valid Aptos token, 
                guaranteeing authenticity and fairness.
              </p>
          </div>
      </section>
      <section className="contact-info">
        <h3 style={{color: '#7C8DB0'}}>Contact Us</h3>
        <p style={{color: 'white' }}>Email: info@trifecta.com</p>
        <p style={{color: 'white' }}>Phone: 123-456-7890</p>
        <p style={{color: 'white' }}>Address: 123 Main Street, City, Country</p>
      </section>
    </>
  );
}

export default About;