function questions(state = { question: {}, answers: [] }, action) {
  switch (action.type) {
    case 'RECEIVE_QUESTION':
      return Object.assign({}, state, { question: Object.assign({}, action.question, { question: action.question.question }), answers: action.answers });
    default:
      return state;
  }
}

export default questions;
