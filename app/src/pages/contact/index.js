import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'
import Background from '../../images/golf5.jpg'
import ContactForm from '../../components/ContactForm'

const styles = {
  flex: 1,
  height: '100vh',
  background: 'no-repeat 63% 30% fixed',
  backgroundImage: `url(${Background})`,
  zIndex: '-99'
}

class Contact extends React.Component {
  render() {
    return (
      <div style={styles}>
        <MenuAppBar title="Contact Us" />
        <ContactForm />
        <SimpleBottomNavigation />
      </div>
    )
  }
}
export default Contact
