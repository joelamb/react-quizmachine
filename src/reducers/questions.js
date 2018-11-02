import { stringify } from "querystring";

// export function deEntisize(text) {
//   return text.replace(/\&#039;/gi, '’').replace(/\&amp;/gi, '&').replace(/\s\&quot;/gi, ' ‘').replace(/\&quot;?\?/gi, '’ ');
// }

// export function deEntisize(text) {
//   return text.replace('&#039;', '’').replace('&amp;', '&').replace(' &quot;', ' ‘').replace('&quot;', '’ ');
// }

function questions(state = { question: {}, answers: [], score: 0 }, action) {
  // let tidyAnswer = '';
  // if (action.question) {
  //   tidyAnswer = deEntisize();
  // }
  switch (action.type) {
    case 'RECEIVE_QUESTION':
      return Object.assign({}, state, { question: Object.assign({}, action.question, { question: action.question.question }), answers: action.answers });
    case 'RECEIVE_ANSWER':
      console.log(state);
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
