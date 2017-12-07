import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'
import Background from '../../images/golf4.jpg'

const styles = {
  height: '100vh',
  background: 'no-repeat center center fixed',
  backgroundImage: `url(${Background})`
}

class Contact extends React.Component {
  render() {
    return (
      <div style={styles}>
        <MenuAppBar title="Contact Us" />
        <h1>Contact Us</h1>
        <SimpleBottomNavigation />
      </div>
    )
  }
}
export default Contact
