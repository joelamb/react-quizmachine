import React from 'react';
import Result from '../../src/components/Result';
import renderer from 'react-test-renderer';

describe('Result', () => {
  test('renders correctly', () => {
    const tree = renderer
      .create(<Result />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  })
})