import React from 'react';
import Question from '../../src/components/Question';
import renderer from 'react-test-renderer';

describe('Question', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<Question question={{
        category: "Sports",
        correct_answer: "Duck",
        difficulty: "medium",
        incorrect_answers: ["Bye", "Beamer", "Carry"],
        question: "What cricketing term denotes a batsman being dismissed with a score of zero?",
        type: "multiple"
      }} answers={["Bye", "Beamer", "Duck", "Carry"]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})