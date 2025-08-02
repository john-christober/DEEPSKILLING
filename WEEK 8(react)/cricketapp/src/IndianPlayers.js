import React from 'react';

const IndianPlayers = () => {
  const team = ["Sachin", "Dhoni", "Virat", "Rohit", "Yuvaraj", "Raina"];

  const [first, second, third, fourth, fifth, sixth] = team;

  const oddPlayers = [
    { position: "First", player: first },
    { position: "Third", player: third },
    { position: "Fifth", player: fifth }
  ];

  const evenPlayers = [
    { position: "Second", player: second },
    { position: "Fourth", player: fourth },
    { position: "Sixth", player: sixth }
  ];

  const T20players = [
    "Mr. First Player",
    "Mr. Second Player",
    "Mr. Third Player"
  ];
  const RanjiTrophyPlayers = [
    "Mr. Fourth Player",
    "Mr. Fifth Player",
    "Mr. Sixth Player"
  ];

  const mergedPlayers = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h2>Odd Players</h2>
      <ul>
        {oddPlayers.map((p, index) => (
          <li key={index}>
            {p.position} : {p.player}{index + 1}
          </li>
        ))}
      </ul>

      <hr />

      <h2>Even Players</h2>
      <ul>
        {evenPlayers.map((p, index) => (
          <li key={index}>
            {p.position} : {p.player}{index + 2}
          </li>
        ))}
      </ul>

      <hr />

      <h2>List of Indian Players Merged:</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
