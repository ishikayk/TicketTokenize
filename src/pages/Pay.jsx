import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import { Typography, Button, Card, CardContent, CardMedia } from "@mui/material";

const Pay = () => {
  const [ticketName, setTicketName] = useState('');
  const [ticketImage, setTicketImage] = useState(null);
  const [transactionResult, setTransactionResult] = useState('');
  const navigate = useNavigate(); // Get navigate function from React Router

  const TransactionIds = ['123456', '789012', '345678', '901234']; // Dummy transaction IDs

  const handleCreateTicket = () => {
    const enteredTransactionId = prompt("Enter the transaction ID:");
    if (TransactionIds.includes(enteredTransactionId)) {
      setTransactionResult("Ticket already purchased.");
    } else {
      setTransactionResult("");
      window.open('https://explorer.aptoslabs.com/txn/7973018?network=devnet', '_blank');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: "5em" }}>
      <Card sx={{ width: '100%', height: '87vh', marginLeft: '20px', marginRight: '20px'}}>
        <CardMedia
            component="img"
            alt="poster"
            height="700"
            image="src/assets/BB2.png"
        />
      </Card>
      <div style={{display: 'flex', flexFlow:'column', textAlign: 'left'}}>
        <div>
          <Typography variant="h5" >Sold by: BFIofficial</Typography>
          <Typography variant="h1" style={{color: 'white', fontWeight: '500'}}>LAC vs BRO</Typography>
        </div>
        <Card sx={{ backgroundColor: '#474b4f', width: '93%' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexFlow: 'column' }}>
              <Typography variant="h7" sx={{ color: "black" }}>Price set</Typography>
              <Typography variant="h3" sx={{ color: "#ff5500" }}>0.77 APT</Typography>
              <Typography variant="h4" sx={{ color: "black", marginTop: '20px' }}>Description</Typography>
              <Typography variant="body1" sx={{ color: "black" }}>
              "Experience the magic of the legendary Beatles in a mesmerizing concert event! Join us as we journey back in time to relive the iconic music and energy of the Fab Four. Get ready to sing along, dance, and create memories that will last a lifetime at this must-see Beatles concert!"
              </Typography>
              <Typography variant='p' sx={{margin:'6px'}}>Date: December 28</Typography>
              <Typography variant='p' sx={{margin:'6px'}}>Venue: ECR Sheraton Grand</Typography>
              <div style={{display: 'flex', }}>
                <Button sx={{width: "10em", backgroundColor: 'green'}} variant='filled' onClick={handleCreateTicket}>Buy Now</Button>
                <div style={{marginLeft: '20px', backgroundColor: 'black', color: 'white', borderRadius: 'px'}}>
                  Send to: 0x6078a71b6d807a3a350317285676119829a8a6b9e539d7e4f051b6ca3368db09
                </div>
              </div>            
            </div>
            
          </CardContent>
        </Card>
        <Typography variant='h5' sx={{marginTop: '20px', color: 'white'}}>Get your Ticket as a token here</Typography>
        <div style={{marginTop:'10px'}}>
          <input
            type="text"
            placeholder="Enter ticket name"
            value={ticketName}
            onChange={(e) => setTicketName(e.target.value)}
            required
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setTicketImage(URL.createObjectURL(e.target.files[0]))}
            required
          />
          <Button href='/myticket'>Create Ticket</Button>
          <p style={{color: 'red'}}>{transactionResult}</p>
        </div>
        <div className='ticket'>
        </div>
      </div>
    </div>
  );
}

export default Pay;