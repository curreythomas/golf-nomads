import React from 'react'
import { Switch, Router, Route } from 'react-router-dom'
import Home from './pages/home/index'
import About from './pages/about/index'
import Faq from './pages/faq/index'
import Contact from './pages/contact/index'
import Courses from './pages/courses/index'
import ViewCourseCard from './pages/courses/view'
import Login from './pages/login/index'
import SignUp from './pages/signup/index'
import history from './history'

const App = props => {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
          <Route path="/contact" component={Contact} />
          <Route path="/courses/:id" component={ViewCourseCard} />
          <Route path="/courses" component={Courses} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
