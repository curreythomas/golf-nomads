import React from 'react'
import { Link } from 'react-router-dom'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'
import Button from 'material-ui/Button'
import Background from '../../images/golf3.jpg'
import FaqExpand from '../../components/FaqExpand'

const styles = {
  height: '100vh'
}

class Faq extends React.Component {
  render() {
    return (
      <div style={styles}>
        <MenuAppBar title="FAQ" />
        <FaqExpand />
        <SimpleBottomNavigation />
      </div>
    )
  }
}
export default Faq
