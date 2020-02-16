import React from 'react';

const GameStatus = ({points, timer}) => {
  return (
    <div className="game-status">
      <span>Points: {points}</span>
      <span className="game-timer">0:{timer}</span>
    </div>
  );
};

export default GameStatus;
