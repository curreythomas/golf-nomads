import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'
import ViewCourseCard from '../../components/ViewCourse'
import SimpleAppBar from '../../components/SecondaryNavbar'

class ViewCourse extends React.Component {
  render() {
    return (
      <div>
        <SimpleAppBar title="Book A Tee Time" />
        <ViewCourseCard {...this.props} />
        <SimpleBottomNavigation />
      </div>
    )
  }
}

export default ViewCourse
