import React from 'react';
import Scoreboard from '../../src/components/Scoreboard';
import renderer from 'react-test-renderer';

describe('Scoreboard', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<Scoreboard />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})