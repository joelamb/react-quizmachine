function questions(state = { question: {}, answers: [], score: 0 }, action) {
  switch (action.type) {
    case 'RECEIVE_QUESTION':
      console.log(state);
      return Object.assign({}, state, { question: action.question, answers: action.answers });
    case 'RECEIVE_ANSWER':
      console.log(state);
      return Object.assign({}, state, { answer: action.answer, score: state.score + 1 });
    default:
      return state;
  }
}

export default questions;
