import React from 'react'
import Options from '../../src/components/Options';
import renderer from 'react-test-renderer';

describe('Options', () => {
  test('should render correctly', () => {
    const tree = renderer
      .create(<Options />)
      .toJSON()
    expect(tree).toMatchSnapshot();
  });
})