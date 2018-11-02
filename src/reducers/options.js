function options(state = { categoryID: 0, difficulty: 0 }, action) {
  switch (action.type) {
    case 'SET_OPTIONS':
      return Object.assign(
        {},
        state,
        { categoryID: action.categoryID, difficulty: action.difficulty }
      );
    default:
      return state;
  }
}

export default options;