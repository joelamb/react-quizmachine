import React from 'react'
import GameOver from '../../src/components/GameOver';
import renderer from 'react-test-renderer';

describe('GameOver', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<GameOver hiscores={[{ name: "joe", score: 24 }, { name: "ben", score: 18 }]} />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
})