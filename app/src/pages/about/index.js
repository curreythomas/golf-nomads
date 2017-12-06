import React from 'react'
import { Link } from 'react-router-dom'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'
import Background from '../../images/golf2.jpg'
import Overlay from '../../images/overlay.png'

const styles = {
  background: {
    flexGrow: 1,
    background: 'no-repeat 45% 50%',
    height: '100vh',
    backgroundImage: `url(${Background})`,
    zIndex: '-99'
  },
  overlay: {
    height: '100vh',
    width: '100vw',
    flexGrow: 1,
    backgroundImage: `url(${Overlay})`,
    zIndex: '-98'
  }
}

class About extends React.Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.overlay}>
          <MenuAppBar title="About" />
          <h1>About</h1>
          <SimpleBottomNavigation />
        </div>
      </div>
    )
  }
}
export default About
