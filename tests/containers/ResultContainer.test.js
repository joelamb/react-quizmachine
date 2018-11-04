import { mapStateToProps } from '../../src/containers/ResultContainer';

describe('mapStateToProps', () => {
  test('extracts correctAnsers, questions answered and hidden from state', () => {
    const testState = {
      results: {
        correctAnswer: true,
        questionsAnswered: 4,
        hidden: false,
      }
    };

    const expectedOutput = {
      correctAnswer: true,
      questionsAnswered: 4,
      hidden: false,
    };

    const output = mapStateToProps(testState);
    expect(output).toEqual(expectedOutput);
  }
  )
});

