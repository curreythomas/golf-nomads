import React from 'react'
import { Link } from 'react-router-dom'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <MenuAppBar title="Sign Up" />
        <h1>SignUp</h1>
        <SimpleBottomNavigation />
      </div>
    )
  }
}
export default SignUp
