import React from 'react'
import { Link } from 'react-router-dom'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import Background from '../../images/golf.jpg'
import Overlay from '../../images/overlay.png'

const styles = {
  background: {
    flexGrow: 1,
    height: '100vh',
    background: 'no-repeat 20% 60%',
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
    paddingTop: '10em',
    flexGrow: 1,
    justifyContent: 'center',
    textAlign: 'center'
  },
  button: {
    flexGrow: 1,
    textAlign: 'center'
  },
  link: {
    textDecoration: 'none'
  }
}

class Home extends React.Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.overlay}>
          <MenuAppBar title="Golf Nomads" />

          <div style={styles.container}>
            <Typography
              type="headline"
              align="center"
              style={{ color: 'white' }}
            >
              Golf Nomads
            </Typography>
            <hr style={{ width: '50%' }} />
            <Typography
              type="title"
              align="center"
              gutterBottom
              style={{ color: 'white' }}
            >
              The Best Travel Planning Site For Golfers
            </Typography>
          </div>
          <div style={styles.button}>
            <Link to="/courses" style={styles.link}>
              <Button raised>Book a Tee Time</Button>
            </Link>
          </div>
        </div>
        <SimpleBottomNavigation />
      </div>
    )
  }
}
export default Home
