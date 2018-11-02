import { shuffle } from 'lodash';


export function submitAnswer(answer) {
  return {
    type: 'RECEIVE_ANSWER',
    answer
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
  return function (dispatch) {
    return fetch('https://opentdb.com/api.php?amount=1&category=20&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then((result) => {
        dispatch(receiveQuestion(result));
      })
      .catch((error) => { console.log(error.message); });
  };
}
