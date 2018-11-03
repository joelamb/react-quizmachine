import { shuffle } from 'lodash';


export function setOptions(categoryID, difficulty) {
  return {
    type: 'SET_OPTIONS',
    categoryID,
    difficulty
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
    return fetch(`https://opentdb.com/api.php?amount=1&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then(response => response.json())
      .then((result) => {
        dispatch(receiveQuestion(result));
      })
      .catch((error) => { console.log(error.message); });
  };
}
