import { handleErrors } from './Application';

export function saveSearch(searchTerms) {
  console.log("Hit saveSearch action: ", searchTerms)
  return (dispatch) => {
    const token = "Bearer " + localStorage.getItem("jwt");
    return fetch('http://localhost:3000/api/searches', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify(searchTerms)
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(data => dispatch({type: "SAVE_SEARCH", payload: data}))
    .catch(err => console.log(err))
  }
}

export function deleteSearch(id) {
  return (dispatch) => {
    dispatch({ type: "DELETE_SAVED_SEARCH", payload: id });
    const token = "Bearer " + localStorage.getItem("jwt");
    return fetch(`http://localhost:3000/api/searches/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
    .then(handleErrors)
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }
}

export function clearSearch() {
  return { type: "CLEAR_SEARCH" }
}
