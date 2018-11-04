import results from '../../src/reducers/results';

describe('results reducer', () => {
  test('executes RECEIVE_ANSWER action', () => {
    const initialState = {
      hidden: true,
      answer: '',
      correctAnswer: '',
      lives: 3,
      score: 0,
      questionsAnswered: 0,
      hiscores: [],
      playerName: ''
    }
    const action = {
      type: 'RECEIVE_ANSWER',
      answer: "Red October",
      difficulty: "easy",
      correctAnswer: "Blair Witch Project",
    }
    const expectedState = {
      hidden: true,
      answer: "Red October",
      correctAnswer: false,
      lives: 2,
      score: 0,
      questionsAnswered: 1,
      hiscores: [],
      playerName: ''
    }
    const outputState = results(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

  test('executes SET_PLAYER_NAME action', () => {
    const initialState = {
      hidden: true,
      answer: '',
      correctAnswer: '',
      lives: 3,
      score: 0,
      questionsAnswered: 0,
      hiscores: [],
      playerName: ''
    }
    const action = {
      type: 'SET_PLAYER_NAME',
      playerName: "joe",
    }
    const expectedState = {
      hidden: true,
      answer: '',
      correctAnswer: '',
      lives: 3,
      score: 0,
      questionsAnswered: 0,
      hiscores: [],
      playerName: 'joe'
    }
    const outputState = results(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

  test('executes HIDE_RESULT action', () => {
    const initialState = {
      hidden: true,
      answer: '',
      correctAnswer: '',
      lives: 3,
      score: 0,
      questionsAnswered: 0,
      hiscores: [],
      playerName: ''
    }
    const action = {
      type: 'HIDE_RESULT',
      hidden: false,
    }
    const expectedState = {
      hidden: false,
      answer: '',
      correctAnswer: '',
      lives: 3,
      score: 0,
      questionsAnswered: 0,
      hiscores: [],
      playerName: ''
    }
    const outputState = results(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

  test('executes RECEIVE_HISCORES action', () => {
    const initialState = {
      hidden: true,
      answer: '',
      correctAnswer: '',
      lives: 3,
      score: 0,
      questionsAnswered: 0,
      hiscores: [],
      playerName: ''
    }
    const action = {
      type: 'RECEIVE_HISCORES',
      hiscores: [{ name: "joe", score: 24 }, { name: "ben", score: 18 }]
    }
    const expectedState = {
      hidden: true,
      answer: '',
      correctAnswer: '',
      lives: 3,
      score: 0,
      questionsAnswered: 0,
      hiscores: [{ name: "joe", score: 24 }, { name: "ben", score: 18 }],
      playerName: ''
    }
    const outputState = results(initialState, action);
    expect(outputState).toEqual(expectedState);
  });
});

