import { createStore, combineReducers, applyMiddleware } from 'redux'
import { courses, currentCourse } from './reducers/courses'
import thunk from 'redux-thunk'

const store = createStore(
  combineReducers({
    courses,
    currentCourse
  }),
  applyMiddleware(thunk)
)
store.subscribe(() => {
  console.log('store.getState()', store.getState())
})

export default store
