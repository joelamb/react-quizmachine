export function receiveQuestion(result) {
  return {
    type: 'RECEIVE_QUESTION',
    question: result.results[0],
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
