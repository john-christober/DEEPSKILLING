import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: "Mr. KL rahul", score: 50 },
    { name: "Mr. Jaiswal", score: 30 },
    { name: "Mr. John", score: 150 },
    { name: "Mr. Pandya", score: 41 },
    { name: "Mr. Dhawan", score: 61 },
    { name: "Mr. Sachin", score: 46 },
    { name: "Mr. Dhoni", score: 101 },
    { name: "Mr. Virat", score: 102 },
    { name: "Mr. Jadeja", score: 64 },
    { name: "Mr. Raina", score: 75 },
    { name: "Mr. Rohit", score: 80 }
  ];

  const lowScorers = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} {player.score}</li>
        ))}
      </ul>
      <hr />
      <h2>List of Players having Scores Less than 70</h2>
      <ul>
        {lowScorers.map((player, index) => (
          <li key={index}>{player.name} {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
