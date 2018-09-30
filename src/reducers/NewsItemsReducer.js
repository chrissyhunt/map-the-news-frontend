function newsItemsReducer(state = {
  allNews: {},
  loading: false,
  totalResults: null
}, action) {
  switch (action.type) {
    case "LOADING_NEWS_ITEMS":
      return {...state, loading: true}

    case "IMPORT_NEWS_ITEMS":
      // console.log("IMPORT_NEWS_ITEMS payload: ", action.payload)
      const allNews = {
        "axios": action.payload.articles.filter(item => item.source.id === "axios"),
        "bloomberg": action.payload.articles.filter(item => item.source.id === "bloomberg"),
        "breitbart-news": action.payload.articles.filter(item => item.source.id === "breitbart-news"),
        "buzzfeed": action.payload.articles.filter(item => item.source.id === "buzzfeed"),
        "cnn": action.payload.articles.filter(item => item.source.id === "cnn"),
        "fox-news": action.payload.articles.filter(item => item.source.id === "fox-news"),
        "msnbc": action.payload.articles.filter(item => item.source.id === "msnbc"),
        "national-review": action.payload.articles.filter(item => item.source.id === "national-review"),
        "reuters": action.payload.articles.filter(item => item.source.id === "reuters"),
        "the-american-conservative": action.payload.articles.filter(item => item.source.id === "the-american-conservative"),
        "the-huffington-post": action.payload.articles.filter(item => item.source.id === "the-huffington-post"),
        "the-new-york-times": action.payload.articles.filter(item => item.source.id === "the-new-york-times"),
        "the-wall-street-journal": action.payload.articles.filter(item => item.source.id === "the-wall-street-journal"),
        "the-washington-post": action.payload.articles.filter(item => item.source.id === "the-washington-post"),
        "usa-today": action.payload.articles.filter(item => item.source.id === "usa-today"),
        "the-hill": action.payload.articles.filter(item => item.source.id === "the-hill"),
        "politico": action.payload.articles.filter(item => item.source.id === "politico"),
        "the-economist": action.payload.articles.filter(item => item.source.id === "the-economist"),
        "the-washington-times": action.payload.articles.filter(item => item.source.id === "the-washington-times")
      }
      return {
        allNews,
        loading: false,
        totalResults: action.payload.totalResults
      }

    case "CLEAR_SEARCH":
      return {
        allNews: {},
        loading: false,
        totalResults: null
      }

    default:
      return state;
  }
}

export default newsItemsReducer;
