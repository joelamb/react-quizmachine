const results = (state = {
  answer: '',
  correctAnswer: '',
  lives: 0,
  score: 19,
  questionsAnswered: 12,
  hiscores: [],
  playerName: 'JAC'
}, action) => {
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
        return Object.assign({}, state, { answer: action.answer, score: state.score + scoreIncrement, correctAnswer: true, questionsAnswered: state.questionsAnswered + 1 });
      } else {
        return Object.assign({}, state, { answer: action.answer, lives: state.lives - 1, correctAnswer: false, questionsAnswered: state.questionsAnswered + 1 });
      }
    case 'RECEIVE_HISCORES':
      return Object.assign({}, state, { hiscores: action.hiscores });
    case 'SET_PLAYER_NAME':
      return Object.assign({}, state, { playerName: action.playerName })
    default:
      return state;
  }
}

export default results;