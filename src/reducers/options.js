function options(state = { categoryID: 0, difficulty: "", show: false }, action) {
  const level = action.difficulty === "any" ? "" : action.difficulty;

  switch (action.type) {
    case 'SHOW_OPTIONS':
      return Object.assign({}, state, { show: action.show })
    case 'SET_OPTIONS':
      return Object.assign(
        {},
        state,
        { categoryID: action.categoryID, difficulty: level }
      );
    default:
      return state;
  }
}

export default options;