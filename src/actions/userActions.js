import * as types from '../constaints/actionTypes';

export const login = data => dispatch => {
  dispatch({
    type: types.USER_LOGGING_IN
  })

  setTimeout(() => {
    dispatch({
      type: types.USER_LOGGED_IN,
      payload: data
    })
  }, 2000);
}

export const logout = () => ({
  type: types.USER_LOGOUT
})
