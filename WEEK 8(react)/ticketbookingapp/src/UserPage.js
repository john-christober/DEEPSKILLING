import React from 'react';
import FlightList from './FlightList';

export default function UserPage() {
  return (
    <div>
      <h1>Welcome back!</h1>
      <FlightList />
      <p>You can now book your tickets.</p>
      <button onClick={() => alert('Ticket booked!')}>Book Ticket</button>
    </div>
  );
}
