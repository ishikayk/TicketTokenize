import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from React Router

import { Typography, Button, Card, CardContent, CardMedia } from "@mui/material";

const Pay = () => {
  const [ticketName, setTicketName] = useState('');
  const [ticketImage, setTicketImage] = useState(null);
  const [transactionResult, setTransactionResult] = useState('');
  const navigate = useNavigate(); // Get navigate function from React Router

  const handlePay = () => {
    // Here you can perform payment processing if needed
    // For now, let's assume payment is successful
    setTransactionResult("Payment successful.");
  };

  const handleCreateTicket = () => {
    // Here you can perform ticket creation logic
    // For now, let's assume ticket creation is successful
    // Redirect to My Tickets page and pass ticket image and name as state
    navigate('/mytickets', { state: { ticketImage, ticketName } });
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', marginTop: "5em" }}>
      <Card sx={{ width: '40%', height: '87vh', marginLeft: '20px', marginRight: '20px'}}>
        <CardMedia
            component="img"
            alt="green iguana"
            height="700"
            image="src/assets/beatles.jpg"
        />
      </Card>
      <div style={{display: 'flex', flexFlow:'column', textAlign: 'left'}}>
        <div>
          <Typography variant="h5" >Sold by: username</Typography>
          <Typography variant="h1" style={{color: 'white', fontWeight: '500'}}>The Beatles</Typography>
        </div>
        <Card sx={{ backgroundColor: 'gray', width: '93%' }}>
          <CardContent sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexFlow: 'column' }}>
              <Typography variant="h7" sx={{ color: "black" }}>Price set</Typography>
              <Typography variant="h3" sx={{ color: "green" }}>0.36 SOL</Typography>
              <Typography variant="h4" sx={{ color: "white", marginTop: '20px' }}>Description</Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
              "Experience the magic of the legendary Beatles in a mesmerizing concert event! Join us as we journey back in time to relive the iconic music and energy of the Fab Four. Get ready to sing along, dance, and create memories that will last a lifetime at this must-see Beatles concert!"
              </Typography>
              <Button sx={{width: "10em", backgroundColor: 'green'}} variant='filled' id="buy-button">Buy Now</Button>
            </div>
            
          </CardContent>
        </Card>
        <div>
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
          <Button onClick={handleCreateTicket}>Create Ticket</Button>
          <p>{transactionResult}</p>
        </div>
        <div className='ticket'>
        </div>
      </div>
    </div>
  );
}

export default Pay;