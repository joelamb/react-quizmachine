import options from '../../src/reducers/options';

describe('options', () => {
  test('executes SHOW_OPTIONS action', () => {
    const initialState = { categoryID: 0, difficulty: "", show: false };
    const expectedState = { categoryID: 0, difficulty: "", show: true };
    const action = {
      type: 'SHOW_OPTIONS',
      show: true
    }
    const outputState = options(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

  test('executes SET_OPTIONS action', () => {
    const initialState = { categoryID: 0, difficulty: "", show: false };
    const expectedState = { categoryID: 9, difficulty: "easy", show: false };
    const action = {
      type: 'SET_OPTIONS',
      categoryID: 9,
      difficulty: "easy",
    }
    const outputState = options(initialState, action);
    expect(outputState).toEqual(expectedState);
  });

})