import './App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MarketCard from '../components/MarketCard';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Market = () => {
  const [sortOrder, setSortOrder] = useState('lowToHigh');
  const [eventType, setEventType] = useState('');

 
  const marketCardData = [
    { eventname: 'The Lead Pipes', type: 'concert', user: 'nilay', location: 'Chennai', cost: "$500" },
    { eventname: 'Evolution', type: 'concert', user: 'aditya', location: 'Chennai', cost: "$500" },
    { eventname: 'PBKS vs RCB', type: 'sports', user: 'ishika', location: 'Chennai', cost: "$500" },
    { eventname: 'CSK vs GT', type: 'sports', user: 'nilay', location: 'Chennai', cost: "$500" },
    { eventname: 'Matrix', type: 'show', user: 'ishika', location: 'Chennai', cost: "$250" },
    { eventname: 'LAC vs BRO', type: 'sports', user: 'ishika', location: 'Chennai', cost: "$5000" },
    { eventname: 'The Beatles', type: 'concert', user: 'nilay', location: 'Chennai', cost: "$500" },
    { eventname: 'HUN vs TIG', type: 'sports', user: 'aditya', location: 'Chennai', cost: "$300" },
    { eventname: 'Kings vs LA', type: 'sports', user: 'ishika', location: 'Chennai', cost: "$500" },
    { eventname: 'Blade Runner', type: 'show', user: 'aditya', location: 'Chennai', cost: "$500" }
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
        <section className='market-hero' style={{display: 'flex', alignItems: 'flex-start'}}>
            <h1 style={{marginTop: '90px', color: 'white', fontSize: '100px', fontWeight: '700'}}>Marketplace</h1>
        </section>
        <h2>Buy tickets here</h2>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          <FormControl style={{ margin: '10px', width: '200px' }}>
            <InputLabel id="sort-order-label" style={{color:'white'}}>Price</InputLabel>
            <Select
            style={{color:'white'}}
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
              style={{color:'white'}}
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
            style={{color:'white'}}
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
              <Link to={`/pay`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <MarketCard
                  key={index}
                  eventname={card.eventname}
                  type={card.type}
                  user={card.user}
                  location={card.location}
                  cost={card.cost}
              />
              </Link>
            ))}
          </div>
      </div>
    </section>
  );
};

export default Market;