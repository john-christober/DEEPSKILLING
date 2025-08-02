import React, { useEffect, useState } from 'react';
import './OfficeSpace.css';

const OfficeSpace = () => {
  const [offices, setOffices] = useState([]);

  useEffect(() => {
    fetch('/officeData.json')
      .then((res) => res.json())
      .then((data) => setOffices(data))
      .catch((err) => console.error('Failed to fetch office data:', err));
  }, []);

  return (
    <div style={{ padding: '30px' }}>
      <h1><b>Office Space , at Affordable Range</b></h1>
      {offices.map((office, index) => (
        <div key={index} style={{ marginBottom: '40px' }}>
          <img src={office.image} alt={office.name} width="300px" />
          <h2>Name: {office.name}</h2>
          <p className={office.rent < 60000 ? 'lowRent' : 'highRent'}>
            Rent: Rs. {office.rent}
          </p>
          <p><strong>Address:</strong> {office.address}</p>
        </div>
      ))}
    </div>
  );
};

export default OfficeSpace;
