function newsSourceReducer(state = [
  "axios",
  "bloomberg",
  "breitbart-news",
  "buzzfeed",
  "cnn",
  "fox-news",
  "msnbc",
  "national-review",
  "reuters",
  "the-american-conservative",
  "the-huffington-post",
  "the-new-york-times",
  "the-wall-street-journal",
  "the-washington-post",
  "usa-today",
  "the-hill",
  "politico",
  "the-economist",
  "the-washington-times"
], action) {
  switch (action.type) {

    default:
      return state;
  }
}

export default newsSourceReducer;
