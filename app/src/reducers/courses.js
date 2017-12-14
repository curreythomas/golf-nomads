import {
  SET_COURSES,
  SET_CURRENT_COURSE,
  SET_FILTERED_COURSES
} from '../constants'

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

export const filteredCourses = (state = [], action) => {
  switch (action.type) {
    case SET_FILTERED_COURSES:
      return action.payload
    default:
      return state
  }
}
