import React from 'react';

const GameOver = ({ hiscores, score, playerName, setPlayerName }) => (
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
    <h3>Your score: {score}</h3>
    <form onSubmit={e => {
      e.preventDefault();
    }}>
      <label htmlFor="playerName">
        <input
          type="text"
          name="playerName"
          id="playerName"
          onChange={() => setPlayerName(e.target.value)}
          value={playerName} />
      </label>
      <input type="submit" value="Save Score" />
    </form>

  </div>
)

export default GameOver;
