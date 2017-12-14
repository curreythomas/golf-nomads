import fetch from 'isomorphic-fetch'
import {
  SET_COURSES,
  SET_CURRENT_COURSE,
  SET_FILTERED_COURSES
} from '../constants'
const url = process.env.REACT_APP_BASE_URL

export const setCourses = async (dispatch, getState) => {
  const response = await fetch(`${url}/courses`).then(res => res.json())
  dispatch({ type: SET_COURSES, payload: response })
}

export const setCurrentCourse = id => async (dispatch, getState) => {
  const response = await fetch(`${url}/courses/${id}`).then(res => res.json())
  dispatch({
    type: SET_CURRENT_COURSE,
    payload: response
  })
}

export const filterCourses = city => async (dispatch, getState) => {
  const response = await fetch(`${url}/courses?filter=city:${city}`).then(res =>
    res.json()
  )
  dispatch({ type: SET_FILTERED_COURSES, payload: response })
}
