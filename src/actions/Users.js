import { handleErrors } from './Application';

export function getToken(userInfo, history) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/user_token', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auth: userInfo})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(result => {
      localStorage.setItem("jwt", result.jwt);
      history.push('/news');
    })
  }
}

export function getUser() {
  return (dispatch) => {
    dispatch({ type: "CLEAR_ERRORS" });
    dispatch({ type: "LOADING_USER" });
    const token = "Bearer " + localStorage.getItem("jwt");
    return fetch('http://localhost:3000/api/user', {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      }
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(json => dispatch({ type: "SET_USER", payload: json }))
  }
}

export function createUser(userInfo, history) {
  return (dispatch) => {
    dispatch({ type: "CLEAR_ERRORS" });
    dispatch({ type: "LOADING_USER" });
    return fetch('http://localhost:3000/api/users', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({auth: userInfo})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(result => {
      // BAD REQUEST returns error message array instead of user object
      if (Array.isArray(result)) {
        dispatch({ type: "ADD_ERRORS", payload: result})
      } else {
        getToken(userInfo, history)()
        dispatch({ type: "SET_USER", payload: result})
      }
    })
  }
}

export function updateUser(userInfo) {
  return (dispatch) => {
    dispatch({ type: "CLEAR_ERRORS "});
    dispatch({ type: "LOADING_USER" });
    const userId = userInfo.id
    const user = {
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      email: userInfo.email,
      password: userInfo.password
    }
    const token = "Bearer " + localStorage.getItem("jwt");
    return fetch(`http://localhost:3000/api/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": token
      },
      body: JSON.stringify({auth: user})
    })
    .then(handleErrors)
    .then(response => response.json())
    .then(result => {
      // BAD REQUEST returns error message array instead of user object
      console.log("inside updateUser: ", result)
      if (Array.isArray(result)) {
        dispatch({ type: "ADD_ERRORS", payload: result })
      } else {
        dispatch({ type: "CLEAR_ERRORS" })
        dispatch({ type: "SET_USER", payload: result})
      }
    })
  }
}

export function logout() {
  console.log("LOGOUT CALLED!!!!!")
  return (dispatch) => {
    dispatch({ type: "SET_TOP_STORIES_MODE" });
    dispatch({ type: "CLEAR_SEARCH" });
    dispatch({ type: "LOGOUT_USER" });
    localStorage.removeItem("jwt");
    window.location.href = '/';
  }
}
