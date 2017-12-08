import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'
import Background from '../../images/golf5.jpg'
import Overlay from '../../images/overlay.png'
import ContactForm from '../../components/ContactForm'

const styles = {
  background: {
    flex: 1,
    height: '100vh',
    background: 'no-repeat 63% 30% fixed',
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

class Contact extends React.Component {
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.overlay}>
          <MenuAppBar title="Contact Us" />
          <ContactForm />
          <SimpleBottomNavigation />
        </div>
      </div>
    )
  }
}
export default Contact
