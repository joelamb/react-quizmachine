import questions from '../../src/reducers/questions';

describe('questions reducer', () => {
  test('executes RECEIVE_QUESTION action', () => {
    const initialState = { question: {}, answers: [] };
    const action = {
      type: 'RECEIVE_QUESTION',
      question: {
        category: "Sports",
        correct_answer: "Duck",
        difficulty: "medium",
        incorrect_answers: ["Bye", "Beamer", "Carry"],
        question: "What cricketing term denotes a batsman being dismissed with a score of zero?",
        type: "multiple"
      },
      answers: ["Bye", "Beamer", "Duck", "Carry"]
    }
    const expectedState = {
      question: {
        category: "Sports",
        correct_answer: "Duck",
        difficulty: "medium",
        incorrect_answers: ["Bye", "Beamer", "Carry"],
        question: "What cricketing term denotes a batsman being dismissed with a score of zero?",
        type: "multiple"
      },
      answers: ["Bye", "Beamer", "Duck", "Carry"]
    }
    const outputState = questions(initialState, action);
    expect(outputState).toEqual(expectedState);
  })
})



