import { mapStateToProps } from '../../src/containers/QuestionContainer';

describe('mapStateToProps', () => {
  test('extracts question, answers and difficulty from state', () => {
    const testState = {
      quiz: {
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
    }
    const expectedOutput = {
      question: {
        category: "Sports",
        correct_answer: "Duck",
        difficulty: "medium",
        incorrect_answers: ["Bye", "Beamer", "Carry"],
        question: "What cricketing term denotes a batsman being dismissed with a score of zero?",
        type: "multiple"
      },
      answers: ["Bye", "Beamer", "Duck", "Carry"],
      difficulty: "medium",
    }

    const output = mapStateToProps(testState);
    expect(output).toEqual(expectedOutput);
  });
});