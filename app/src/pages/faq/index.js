import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'
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
