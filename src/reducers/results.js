const results = (state = { answer: '', correctAnswer: false, lives: 3, score: 0, }, action) => {
  console.log(state);
  switch (action.type) {
    case 'RECEIVE_ANSWER':
      let scoreIncrement;
      switch (action.difficulty) {
        case "easy":
          scoreIncrement = 1;
          break;
        case "medium":
          scoreIncrement = 3;
          break;
        case "hard":
          scoreIncrement = 5;
          break;
        default:
          scoreIncrement = 1;
      }
      if (action.answer === action.correctAnswer) {
        return Object.assign({}, state, { answer: action.answer, score: state.score + scoreIncrement, correctAnswer: true });
      } else {
        return Object.assign({}, state, { answer: action.answer, score: 0, correctAnswer: false })
      }
    default:
      return state;
  }
}

export default results;