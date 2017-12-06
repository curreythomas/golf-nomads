import React from 'react'
import { Link } from 'react-router-dom'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'

class Login extends React.Component {
  render() {
    return (
      <div>
        <MenuAppBar title="Login" />
        <h1>Login</h1>
        <SimpleBottomNavigation />
      </div>
    )
  }
}
export default Login
