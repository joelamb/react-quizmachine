import React from 'react';
import '../styles/gameover.scss'

const GameOver = ({ hiscores, score, playerName, setPlayerName, submitHiScore }) => (
  <section className="gameover">
    <h2>Game Over</h2>
    <h3>Leaderboard</h3>
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Score</td>
        </tr>
      </thead>
      <tbody>
        {hiscores.map(item => {
          const { name, score } = item;
          return <tr key={name}>
            <td>{name}</td>
            <td>{score}</td>
          </tr>
        })}
      </tbody>
    </table>
    <form onSubmit={e => {
      e.preventDefault();
      submitHiScore();
    }}
      className="score">
      <fieldset>
        <legend>Save your score</legend>
        <p>
          <label htmlFor="score">Your score:
        <input type="number" name="score" id="score" value={score} readOnly />
          </label>
        </p>
        <p>
          <label htmlFor="playerName">Enter your initials:
        <input
              type="text"
              name="playerName"
              id="playerName"
              onChange={e => setPlayerName(e.target.value)}
              value={playerName}
              pattern="[A-Za-z]{3}"
              placeholder="3 characters"
              className="name" />
          </label></p>
        <button type="submit" className="btn btn__primary">Save score</button>
      </fieldset>
    </form>
  </section>
)

export default GameOver;
