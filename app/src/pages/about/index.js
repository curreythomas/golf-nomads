import React from 'react'
import { Link } from 'react-router-dom'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'
import Background from '../../images/golf2.jpg'
import Overlay from '../../images/overlay.png'
import Typography from 'material-ui/Typography'

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
  },
  container: {
    paddingTop: '5em',
    paddingLeft: '1em',
    paddingRight: '1em'
  }
}

class About extends React.Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.overlay}>
          <MenuAppBar title="About" />
          <div style={styles.container}>
            <Typography
              type="Title"
              style={{ color: 'white', fontSize: '3em' }}
            >
              About
            </Typography>
            <Typography type="body" style={{ color: 'white', align: 'center' }}>
              <p>
                Golf Nomads is an app that allows users to view golf courses
                near them and find out more information about the course. This
                app was designed as a final project at the JRS Coding School.
              </p>
              <p>
                The app is created in react and uses redux to manage the state.
                The styling follows the guidelines and uses components from
                Googles Material Design.
              </p>
            </Typography>
          </div>
          <SimpleBottomNavigation />
        </div>
      </div>
    )
  }
}
export default About
