import React from 'react'
import { Link } from 'react-router-dom'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'
import SignupFields from '../../components/Signup'
import { withStyles } from 'material-ui/styles'
import Overlay from '../../images/overlay.png'

const styles = {
  overlay: {
    height: '100vh',
    width: '100vw',
    flexGrow: 1,
    backgroundImage: `url(${Overlay})`,
    zIndex: '-98'
  }
}

class SignUp extends React.Component {
  render() {
    return (
      <div style={styles.overlay}>
        <MenuAppBar title="Sign Up" />
        <SignupFields />
        <SimpleBottomNavigation />
      </div>
    )
  }
}
export default withStyles(styles)(SignUp)
