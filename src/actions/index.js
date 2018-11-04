import { shuffle } from 'lodash';


export function showOptions(show) {
  return {
    type: 'SHOW_OPTIONS',
    show: !show,
  }
}

export function setOptions(categoryID, difficulty) {
  return {
    type: 'SET_OPTIONS',
    categoryID,
    difficulty,
  }
}

export function submitAnswer(answer, difficulty, correctAnswer) {
  return {
    type: 'RECEIVE_ANSWER',
    answer,
    difficulty,
    correctAnswer,
  }
}

export function hideResult() {
  return {
    type: 'HIDE_RESULT',
  }
}


export function receiveHiScores(hiscores) {
  return {
    type: 'RECEIVE_HISCORES',
    hiscores
  }
}

export function receiveQuestion(result) {
  const answers = Object.values(result.results[0].incorrect_answers).concat(result.results[0].correct_answer);
  return {
    type: 'RECEIVE_QUESTION',
    question: result.results[0],
    answers: _.shuffle(answers)
  };
}

export function fetchQuestion() {
  return function (dispatch, getState) {
    const category = getState().options.categoryID;
    const difficulty = getState().options.difficulty;
    return fetch(`https://opentdb.com/api.php?amount=1&type=multiple&difficulty=${difficulty}&category=${category}`)
      .then(response => response.json())
      .then((result) => {
        dispatch(receiveQuestion(result));
      })
      .catch((error) => { console.log(error.message); });
  };
}

export function fetchHiScores() {
  return function (dispatch) {
    return fetch(`/api/scores`)
      .then(response => response.json())
      .then(hiscores => {
        dispatch(receiveHiScores(hiscores));
      })
      .catch(error => { console.log(error.message) })
  }
}

export function setPlayerName(playerName) {
  return {
    type: 'SET_PLAYER_NAME',
    playerName
  }
};


export function submitHiScore() {
  return function (dispatch, getState) {
    const name = getState().results.playerName;
    const score = getState().results.score;
    const questions = getState().results.questionsAnswered;
    fetch('/api/score', {
      method: 'POST',
      body: JSON.stringify({ name, score, questions }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        return dispatch(fetchHiScores());
      }
    });
  }
};
