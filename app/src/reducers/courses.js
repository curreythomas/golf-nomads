import { SET_COURSES, SET_CURRENT_COURSE } from '../constants'

export const courses = (state = [], action) => {
  switch (action.type) {
    case SET_COURSES:
      return action.payload
    default:
      return state
  }
}

export const currentCourse = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_COURSE:
      return action.payload
    default:
      return state
  }
}
