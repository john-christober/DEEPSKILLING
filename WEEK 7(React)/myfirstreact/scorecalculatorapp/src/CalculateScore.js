import React from 'react';
import './mystyle.css';

function CalculateScore() {
  const name = "john";
  const school = "st john's School";
  const totalMarks = 417;
  const percentage = ((totalMarks / 500) * 100).toFixed(2);

  return (
    <div className="main-container">
      <h2 className="heading">Student Details:</h2>
      <p><span className="label">Name:</span> <span className="value name">{name}</span></p>
      <p><span className="label">School:</span> <span className="value school">{school}</span></p>
      <p><span className="label">Total:</span> <span className="value total">{totalMarks} Marks</span></p>
      <p><span className="label">Score:</span> <span className="value score">{percentage}%</span></p>
    </div>
  );
}

export default CalculateScore;
