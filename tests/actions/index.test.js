import { showOptions, setOptions, submitAnswer, hideResult, receiveHiScores, receiveQuestion, setPlayerName } from '../../src/actions';

describe('actions', () => {
  test('showOptions returns expected action', () => {
    const action = showOptions(true);
    const expectedACtion = {
      type: 'SHOW_OPTIONS',
      show: false,
    }
    expect(action).toEqual(expectedACtion);
  });

  test('setOptions returns expected action', () => {
    const action = setOptions(9, "easy");
    const expectedACtion = {
      type: 'SET_OPTIONS',
      categoryID: 9,
      difficulty: "easy",
    }
    expect(action).toEqual(expectedACtion);
  });

  test('submitAnswer returns expected action', () => {
    const action = submitAnswer("Red October", "easy", "Blair Witch Project");
    const expectedACtion = {
      type: 'RECEIVE_ANSWER',
      answer: "Red October",
      difficulty: "easy",
      correctAnswer: "Blair Witch Project",
    }
    expect(action).toEqual(expectedACtion);
  });

  test('hideResult returns expected action', () => {
    const action = hideResult();
    const expectedACtion = {
      type: 'HIDE_RESULT',
    }
    expect(action).toEqual(expectedACtion);
  });

  test('receiveHiScores returns expected action', () => {
    const action = receiveHiScores([{ name: "joe", score: 24 }, { name: "ben", score: 18 }]);
    const expectedACtion = {
      type: 'RECEIVE_HISCORES',
      hiscores: [{ name: "joe", score: 24 }, { name: "ben", score: 18 }]
    }
    expect(action).toEqual(expectedACtion);
  });

  // how to mock lodash shuffle?
  // test('receiveQuestion returns expected action', () => {
  //   const action = receiveQuestion(
  //     {
  //       response_code: 0,
  //       results: [{
  //         category: "Sports",
  //         correct_answer: "Duck",
  //         difficulty: "medium",
  //         incorrect_answers: ["Bye", "Beamer", "Carry"],
  //         question: "What cricketing term denotes a batsman being dismissed with a score of zero?",
  //         type: "multiple"
  //       }]
  //     });
  //   const expectedACtion = {
  //     type: 'RECEIVE_QUESTION',
  //     question: result.results[0],
  //     answers: _.shuffle(answers)
  //   }
  //   expect(action).toEqual(expectedACtion);
  // });

  test('setPlayerName returns expected action', () => {
    const action = setPlayerName("joe");
    const expectedACtion = {
      type: 'SET_PLAYER_NAME',
      playerName: "joe",
    }
    expect(action).toEqual(expectedACtion);
  });
});


// TODO: write tests for async functions


