require('dotenv').config();

const express = require('express');
const app = express();
const pgp = require('pg-promise')();
const boom = require('express-boom');

const db = pgp({
  host: 'localhost',
  port: 5432,
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
});

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(boom());

app.set('port', process.env.PORT || 8080);
app.use('/static', express.static('static'));
app.set('view engine', 'hbs');

// get all player hi-scores
app.get('/api/scores', (req, res) => {
  db.any(`SELECT player.name, MAX(game.score) as score FROM game, player
    WHERE game.player_id = player.id
    GROUP BY player.name
    ORDER BY score DESC
    LIMIT 10`)
    .then(hiscores => res.json(hiscores))
    .catch(error => {
      res.boom.notFound(`Sorry, there are no hi-scores`);
    });
});

// get player hi-score by id
app.get('/api/score/:id', (req, res) => {
  db.one(
    `SELECT player.name, game.score FROM game, player
    WHERE game.player_id = player.id
    AND player_id = $1
    ORDER BY score DESC
    LIMIT 1`, [req.params.id])
    .then(hiscore => res.json(hiscore))
    .catch(error => {
      res.boom.notFound(`Sorry, that player does not exist`);
    });
});

app.post('/api/score', (req, res) => {
  const { name, score, questions } = req.body
  db.one(
    `INSERT INTO player (name) VALUES ($1) RETURNING id`, [name]
  )
    .then(result => {
      const id = result.id;
      db.none(
        `INSERT INTO game (score, questions, player_id) VALUES ($1, $2, $3)`, [score, questions, id]
      )
        .then(res.json({ "message": "score saved" }));
    })
    .catch(error =>
      res.boom.badRequest(`Sorry, we could not save your hi-score`)
    );
});

app.use((req, res) => {
  res.render('index');
})

app.listen(app.get('port'), () => {
  console.log('Listening on port 8080');
})