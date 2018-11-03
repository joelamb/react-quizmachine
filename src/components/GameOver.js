import React from 'react';

const GameOver = ({ hiscores, score, playerName, setPlayerName, submitHiScore }) => (
  <div>
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
    }}>
      <label htmlFor="score">Your score:
        <input type="number" name="score" id="score" value={score} readOnly />
      </label><br />
      <label htmlFor="playerName">Enter your initials:
        <input
          type="text"
          name="playerName"
          id="playerName"
          onChange={e => setPlayerName(e.target.value)}
          value={playerName}
          pattern="[A-Za-z]{3}"
          placeholder="3 characters" />
      </label><br />
      <input type="submit" value="Save Score" />
    </form>

  </div>
)

export default GameOver;
