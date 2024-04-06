import './App.css'
import React from 'react';
import { 
  Menu,
  MenuItem, 
  Button 
} from '@mui/material';
import MarketCard from '../components/MarketCard';

const Buy= () => {

  return (
    <>
          <section className='hero'>
            <div className='buy-hero'>
            </div>
          </section>
          <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>
              <MarketCard eventname='Concert' type='concert' user='nilay' location='Chennai' cost="$500"/>
              <MarketCard eventname='Concert' type='concert' user='nilay' location='Chennai' cost="$500"/>
              <MarketCard eventname='Concert' type='concert' user='nilay' location='Chennai' cost="$500"/>
              <MarketCard eventname='Concert' type='sports' user='nilay' location='Chennai' cost="$500"/>
              <MarketCard eventname='Concert' type='show' user='nilay' location='Chennai' cost="$500"/>
              <MarketCard eventname='Concert' type='sports' user='nilay' location='Chennai' cost="$500"/>
              <MarketCard eventname='Concert' type='concert' user='nilay' location='Chennai' cost="$500"/>
              <MarketCard eventname='Concert' type='sports' user='nilay' location='Chennai' cost="$500"/>
              <MarketCard eventname='Concert' type='sports' user='nilay' location='Chennai' cost="$500"/>
              <MarketCard eventname='Concert' type='show' user='nilay' location='Chennai' cost="$500"/>
            </div>
    </>
    );
}

export default Buy;