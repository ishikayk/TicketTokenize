import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook from React Router

function CreateEvent() {
  const [formData, setFormData] = useState({
    eventName: '',
    aptosAddress: '',
    date: '',
    eventImage: '',
    numTickets: '',
    originalPrice: '',
    newPrice: ''
  });

  const [newPriceError, setNewPriceError] = useState('');
  const navigate = useNavigate(); // Get history object from React Router

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { originalPrice, newPrice } = formData;

    if (parseFloat(newPrice) !== parseFloat(originalPrice) && (parseFloat(newPrice) < parseFloat(originalPrice) || parseFloat(newPrice) > parseFloat(originalPrice) * 1.5)) {
      setNewPriceError("New price must be equal to the original price or less than or equal to 50% higher than the original price.");
    } else {
      setNewPriceError("");
      // Redirect to Market component
      navigate('/market');
    }
  };

  return (
    <div className="container" style={{marginTop: '200px'}}>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="eventName">Event Name:</label>
        <input type="text" id="eventName" name="eventName" value={formData.eventName} onChange={handleChange} required />
        
        <label htmlFor="aptosAddress">Aptos Address:</label>
        <input type="text" id="aptosAddress" name="aptosAddress" value={formData.aptosAddress} onChange={handleChange} required />
        
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
        
        <label htmlFor="eventImage">Event Image:</label>
        <input type="file" id="eventImage" name="eventImage" accept="image/*" onChange={handleChange} required />
        
        <label htmlFor="numTickets">Number of Tickets:</label>
        <input type="number" id="numTickets" name="numTickets" value={formData.numTickets} onChange={handleChange} required />
        
        <label htmlFor="originalPrice">Original Price:</label>
        <input type="number" id="originalPrice" name="originalPrice" value={formData.originalPrice} onChange={handleChange} required />
        
        <label htmlFor="newPrice">New Price (Max 50% Higher Than Original Price):</label>
        <input type="number" id="newPrice" name="newPrice" value={formData.newPrice} onChange={handleChange} required />
        <span className="error-message">{newPriceError}</span>
        
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;