import { mapStateToProps } from '../../src/containers/GameOverContainer';

describe('mapStateToProps', () => {
  test('it extracts score, hiscores and playerName from state', () => {
    const testState = {
      results: {
        score: 23,
        hiscores: [{ name: "joe", score: 24 }, { name: "ben", score: 18 }],
        playerName: "JOE",
      }
    }
    const expectedOutput = {
      score: 23,
      hiscores: [{ name: "joe", score: 24 }, { name: "ben", score: 18 }],
      playerName: "JOE",
    }
    const output = mapStateToProps(testState);
    expect(output).toEqual(expectedOutput);
  });
});