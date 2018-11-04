import { mapStateToProps } from '../../src/containers/AppContainer';

describe('mapStateToProps', () => {
  test('it extracts score and lives from state', () => {
    const testState = {
      results: {
        lives: 3
      },
      options: {
        show: true
      }
    }
    const expectedOutput = {
      lives: 3,
      show: true
    }
    const output = mapStateToProps(testState);
    expect(output).toEqual(expectedOutput);
  });
});