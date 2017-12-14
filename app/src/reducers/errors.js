import { TOGGLE_EMAIL_ERROR } from '../constants'

export const errors = (state = { displayEmailError: false }, action) => {
  switch (action.type) {
    case TOGGLE_EMAIL_ERROR:
      return { displayEmailError: !state.displayEmailError }
    default:
      return state
  }
}
