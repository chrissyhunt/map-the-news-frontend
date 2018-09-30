function searchReducer(state = {
  searchActive: false,
  currentSearch: null
}, action) {
  switch (action.type) {
    case "ACTIVATE_SEARCH":
      return {
        searchActive: true,
        currentSearch: action.payload
      };

    case "CLEAR_SEARCH":
      return {
        ...state,
        searchActive: false,
        currentSearch: null
      };

    default:
      return state;
  }
}

export default searchReducer;
