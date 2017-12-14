import {
  SET_CONTACT_MSG,
  IS_ACTIVE,
  UPDATE_NEW_CONTACT_FORM
} from '../constants'
import { merge } from 'ramda'

export const setNewMessage = (state = {}, action) => {
  switch (action.type) {
    case SET_CONTACT_MSG:
      return newMessageDefault
    default:
      return state
  }
}

const newMessageDefault = {
  to: 'currey.thomas@gmail.com',
  from: '',
  subject: '',
  text: '',
  html: ''
}

export const newMessage = (state = newMessageDefault, action) => {
  switch (action.type) {
    case UPDATE_NEW_CONTACT_FORM:
      return merge(state, action.payload)
    case SET_CONTACT_MSG:
      return newMessageDefault
    default:
      return state
  }
}

export const isActive = (state = true, action) => {
  switch (action.type) {
    case IS_ACTIVE:
      return action.payload
    default:
      return state
  }
}
