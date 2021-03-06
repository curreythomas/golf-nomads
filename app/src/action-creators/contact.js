import fetch from 'isomorphic-fetch'
import {
  SET_CONTACT_MSG,
  UPDATE_NEW_CONTACT_FORM,
  IS_ACTIVE,
  TOGGLE_EMAIL_ERROR
} from '../constants'
import history from '../history'
import { isEmpty } from 'ramda'
const url = process.env.REACT_APP_BASE_URL

export const updateNewForm = (field, value) => (dispatch, getState) => {
  dispatch({ type: UPDATE_NEW_CONTACT_FORM, payload: { [field]: value } })
}

export const addNewMessage = (data, history) => async (dispatch, getState) => {
  const headers = {
    'Content-Type': 'application/json'
  }
  const method = 'POST'
  const body = JSON.stringify(data)

  const result = await fetch(`${url}/messages`, {
    headers,
    method,
    body
  }).then(res => res.json())
  if (!result.ok) {
    dispatch(TOGGLE_EMAIL_ERROR)
  } else {
    dispatch(setMessage)
    history.push('/')
  }
}

export const isActive = async (dispatch, getState) => {
  const currentData = !isEmpty(getState().newMessage)
    ? getState().newMessage
    : getState().newMessage
  const { from, message, email } = currentData

  if (isEmpty(from) || isEmpty(message) || isEmpty(email)) {
    dispatch({ type: IS_ACTIVE, payload: true })
  } else {
    dispatch({ type: IS_ACTIVE, payload: false })
  }
}

export const setMessage = async (dispatch, getState) => {
  const response = await fetch(`${url}`)
    .then(res => res.json())
    .catch(err => console.log('this is your error:', err))
  dispatch({ type: SET_CONTACT_MSG })
}
