import './App.css';
import React, { useState } from 'react';
import MarketCard from '../components/MarketCard';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Market = () => {
  const [sortOrder, setSortOrder] = useState('lowToHigh');
  const [eventType, setEventType] = useState('');

 
  const marketCardData = [
    { eventname: 'Concert', type: 'concert', user: 'nilay', location: 'Chennai', cost: "$500" },
    { eventname: 'Concert', type: 'concert', user: 'aditya', location: 'Chennai', cost: "$500" },
    { eventname: 'Sports', type: 'sports', user: 'ishika', location: 'Chennai', cost: "$500" },
    { eventname: 'Sports', type: 'sports', user: 'nilay', location: 'Chennai', cost: "$500" },
    { eventname: 'Show', type: 'show', user: 'ishika', location: 'Chennai', cost: "$250" },
    { eventname: 'Sports', type: 'sports', user: 'ishika', location: 'Chennai', cost: "$5000" },
    { eventname: 'Concert', type: 'concert', user: 'nilay', location: 'Chennai', cost: "$500" },
    { eventname: 'Sports', type: 'sports', user: 'aditya', location: 'Chennai', cost: "$300" },
    { eventname: 'Sports', type: 'sports', user: 'ishika', location: 'Chennai', cost: "$500" },
    { eventname: 'Show', type: 'show', user: 'aditya', location: 'Chennai', cost: "$500" }
  ];


  const sortedMarketCardData = marketCardData.slice().sort((a, b) => {
    const priceA = parseFloat(a.cost.slice(1)); 
    const priceB = parseFloat(b.cost.slice(1));
    return sortOrder === 'lowToHigh' ? priceA - priceB : priceB - priceA;
  }).filter(card => eventType ? card.type === eventType : true);

  const handleChangeSortOrder = (event) => {
    setSortOrder(event.target.value);
  };

  const handleChangeEventType = (event) => {
    setEventType(event.target.value);
  };

  return (
    <section>
      <div>
        <section className='market-hero'>
          <div className='hero-content'></div>
        </section>
        <h2>Buy tickets here</h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <FormControl style={{ margin: '10px', width: '200px' }}>
            <InputLabel id="sort-order-label" style={{color:'white'}}>Price</InputLabel>
            <Select
              labelId="sort-order-label"
              id="sort-order"
              value={sortOrder}
              onChange={handleChangeSortOrder}
            >
              <MenuItem value="lowToHigh">Low to High</MenuItem>
              <MenuItem value="highToLow">High to Low</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ margin: '10px', width: '200px' }}>
            <InputLabel id="event-type-label" style={{color:'white'}}>Type</InputLabel>
            <Select
              labelId="event-type-label"
              id="event-type"
              value={eventType}
              onChange={handleChangeEventType}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="concert">Concert</MenuItem>
              <MenuItem value="sports">Sports</MenuItem>
              <MenuItem value="show">Show</MenuItem>
            </Select>
          </FormControl>
          <FormControl style={{ margin: '10px', width: '200px' }}>
            <InputLabel id="event-type-label" style={{color:'white'}}>City</InputLabel>
            <Select
              labelId="event-type-label"
              id="event-type"
              value={eventType}
              onChange={handleChangeEventType}
            >
              <MenuItem value="">Bangalore</MenuItem>
              <MenuItem value="concert">Chennai</MenuItem>
              <MenuItem value="sports">Hyderabad</MenuItem>
              <MenuItem value="show">Pune</MenuItem>
            </Select>
          </FormControl>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {sortedMarketCardData.map((card, index) => (
              <MarketCard
                key={index}
                eventname={card.eventname}
                type={card.type}
                user={card.user}
                location={card.location}
                cost={card.cost}
              />
            ))}
          </div>
      </div>
    </section>
  );
};

export default Market;