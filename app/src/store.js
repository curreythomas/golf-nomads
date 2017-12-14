import { createStore, combineReducers, applyMiddleware } from 'redux'
import { courses, currentCourse } from './reducers/courses'
import { setNewMessage, newMessage, isActive } from './reducers/contact'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    courses,
    currentCourse,
    setNewMessage,
    newMessage,
    isActive
  }),
  applyMiddleware(thunk)
)
store.subscribe(() => {
  console.log('store.getState()', store.getState())
})

export default store
