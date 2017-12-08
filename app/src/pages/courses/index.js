import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'
import ListCourses from '../../components/ListCourses'

class Courses extends React.Component {
  render() {
    return (
      <div>
        <MenuAppBar title="Courses" />
        <ListCourses />
        <SimpleBottomNavigation />
      </div>
    )
  }
}
export default Courses
