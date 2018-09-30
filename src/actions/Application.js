export function handleErrors(response) {
  if (!response.ok) {
    // If token expired
    if (response.status === 401) {
      localStorage.removeItem("jwt");
      window.location.href = '/';
    }
    // If bad request, returns with message
    if (response.status === 400) {
      return response
    }
    throw Error(`Request rejected with status ${response.status}`);
  } else {
    return response
  }
}

export function setActiveNewsSource(source) {
  return { type: "SET_ACTIVE_NEWS_SOURCE", payload: source }
}

export function clearActiveNewsSource() {
  return { type: "CLEAR_ACTIVE_NEWS_SOURCE" }
}

export function activateSearchOptionsBox() {
  return { type: "ACTIVATE_SEARCH_OPTIONS_BOX" }
}

export function deactivateSearchOptionsBox() {
  return { type: "DEACTIVATE_SEARCH_OPTIONS_BOX" }
}

export function setTopStoriesMode() {
  return { type: "SET_TOP_STORIES_MODE" }
}

export function setSearchNewsMode() {
  return { type: "SET_SEARCH_NEWS_MODE" }
}

export function activateUserSettingsBox() {
  return { type: "ACTIVATE_USER_SETTINGS_BOX" }
}

export function deactivateUserSettingsBox() {
  return { type: "DEACTIVATE_USER_SETTINGS_BOX" }
}

export function setErrors(errors) {
  return { type: "ADD_ERRORS", payload: errors }
}

export function clearErrors() {
  return { type: "CLEAR_ERRORS" }
}
