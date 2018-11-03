import React from 'react';

const Scoreboard = ({ score, lives }) => (
  <div>
    <p>Lives: {lives}</p>
    <p>Score: {score}</p>
  </div>
)

export default Scoreboard;