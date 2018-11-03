function options(state = { categoryID: 9, difficulty: "medium" }, action) {
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