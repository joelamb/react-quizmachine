function questions(state = { question: {}, answers: [], score: 0 }, action) {
  switch (action.type) {
    case 'RECEIVE_QUESTION':
      return Object.assign({}, state, { question: Object.assign({}, action.question, { question: action.question.question }), answers: action.answers });
    case 'RECEIVE_ANSWER':
      if (action.answer === decodeURI(state.question.correct_answer)) {
        return Object.assign({}, state, { answer: action.answer, score: state.score + 1 });
      } else {
        return Object.assign({}, state, { answer: action.answer, score: 0 })
      }
    default:
      return state;
  }
}

export default questions;
