import { createStore, combineReducers, applyMiddleware } from 'redux'
import { courses, currentCourse, filteredCourses } from './reducers/courses'
import { setNewMessage, newMessage, isActive } from './reducers/contact'
import { errors } from './reducers/errors'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    courses,
    currentCourse,
    filteredCourses,
    setNewMessage,
    newMessage,
    isActive,
    errors
  }),
  applyMiddleware(thunk)
)
store.subscribe(() => {
  console.log('store.getState()', store.getState())
})

export default store
