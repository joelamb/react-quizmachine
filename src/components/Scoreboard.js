import React from 'react';
import '../styles/scoreboard.scss'

const Scoreboard = ({ score, lives }) => (
  <section className="scoreboard">
    <p className="scoreboard__lives">Lives<span>{lives}</span></p>
    <p className="scoreboard__score">Score<span>{score}</span></p>
  </section>
)

export default Scoreboard;