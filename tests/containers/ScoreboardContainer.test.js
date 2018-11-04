import { mapStateToProps } from '../../src/containers/ScoreboardContainer';

describe('mapStateToProps', () => {
  test('it extracts score and lives from state', () => {
    const testState = {
      results: {
        score: 3,
        lives: 2
      }
    }
    const expectedOutput = {
      score: 3,
      lives: 2
    }
    const output = mapStateToProps(testState);
    expect(output).toEqual(expectedOutput);
  })
})