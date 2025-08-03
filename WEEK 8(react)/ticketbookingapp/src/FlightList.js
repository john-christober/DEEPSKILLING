import React from 'react';

const flights = [
  { id: 1, from: 'Delhi', to: 'Mumbai', price: 5000 },
  { id: 2, from: 'Chennai', to: 'Bangalore', price: 3000 },
  { id: 3, from: 'Kolkata', to: 'Hyderabad', price: 4500 },
];

export default function FlightList() {
  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.from} → {flight.to} : ₹{flight.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
