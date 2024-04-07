import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation hook from React Router

const MyTickets = () => {
  const location = useLocation();
  const { state } = location;
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem('tickets')) || [];
    setTickets(storedTickets);
  }, []); // Run only on initial render

  useEffect(() => {
    if (state && state.ticketImage && state.ticketName) {
      const newTicket = { ticketImage: state.ticketImage, ticketName: state.ticketName };
      const updatedTickets = [...tickets, newTicket];
      localStorage.setItem('tickets', JSON.stringify(updatedTickets));
      setTickets(updatedTickets);
    }
  }, [state]); // Run only when state changes

  return (
    <div>
      <h1>My Tickets</h1>
      {tickets.map((ticket, index) => (
        <div key={index}>
          <img src={ticket.ticketImage} alt={ticket.ticketName} style={{ width: '200px', height: '200px' }} />
          <p>{ticket.ticketName}</p>
        </div>
      ))}
    </div>
  );
}

export default MyTickets;