import { handleErrors } from './Application';

export function fetchNews(searchTerms) {
  return (dispatch) => {
    dispatch({ type: "ACTIVATE_SEARCH", payload: searchTerms });
    dispatch({ type: "DEACTIVATE_SEARCH_OPTIONS_BOX" });
    dispatch({ type: "LOADING_DISPLAY", payload: "Loading Search Results" });
    const token = "bearer " + localStorage.getItem("jwt");
    return fetch('http://localhost:3000/api/news_request', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(searchTerms)
      })
      .then(handleErrors)
      .then(response => response.json())
      .then(news => {
        dispatch({type: "IMPORT_NEWS_ITEMS", payload: news});
        dispatch({type: "CLEAR_LOADING_MESSAGE"});
      })
      .catch(err => console.log(err))
  }
}

export function getTopHeadlines() {
  return (dispatch) => {
    dispatch({ type: "CLEAR_SEARCH"});
    dispatch({ type: "DEACTIVATE_SEARCH_OPTIONS_BOX" });
    dispatch({ type: "LOADING_DISPLAY", payload: "Loading Top Headlines" });
    const token = "bearer " + localStorage.getItem("jwt");
    return fetch('http://localhost:3000/api/top_headlines', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(news => {
      dispatch({type: "IMPORT_NEWS_ITEMS", payload: news});
      dispatch({type: "CLEAR_LOADING_MESSAGE"});
    })
    .catch(err => console.log(err))
  }
}
