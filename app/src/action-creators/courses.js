import fetch from 'isomorphic-fetch'
import { SET_COURSES, SET_CURRENT_COURSE } from '../constants'
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
