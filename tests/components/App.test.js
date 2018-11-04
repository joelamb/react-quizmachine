import React from 'react'
import App from '../../src/components/App';
import renderer from 'react-test-renderer';

describe('App', () => {
  test('should render correctly', () => {
    const mockFetchHiScores = jest.fn();
    const mockFetchQuestion = jest.fn();
    const tree = renderer
      .create(<App fetchHiScores={mockFetchHiScores} fetchQuestion={mockFetchQuestion} />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
})