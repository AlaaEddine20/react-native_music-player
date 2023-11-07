export const loggingIn = (loggingIn) => ({
  type: "AUTH_LOGGING_IN",
  payload: loggingIn,
});

export const loggedIn = (data) => ({
  type: "AUTH_LOGGED_IN",
  payload: data,
});

export const loggedOut = (loggedOut) => ({
  type: "AUTH_LOGGED_OUT",
  payload: loggedOut,
});

export const errorLogIn = (errorMessage) => ({
  type: "AUTH_ERR_LOG_IN",
  payload: errorMessage,
});
