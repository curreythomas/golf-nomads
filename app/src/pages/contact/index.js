import React from 'react'
import MenuAppBar from '../../components/MenuAppBar'
import SimpleBottomNavigation from '../../components/NavBarBottom'
import Background from '../../images/golf5.jpg'
import Overlay from '../../images/overlay.png'
import ContactForm from '../../components/ContactForm'
import { connect } from 'react-redux'
import {
  updateNewForm,
  addNewMessage,
  isActive
} from '../../action-creators/contact'
import SimpleSnackbar from '../../components/ErrorSnacks'
import { TOGGLE_EMAIL_ERROR } from '../../constants'

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
  componentDidMount() {
    this.props.isSubmitActive()
    this.props.isSubmitActive()
  }
  render() {
    return (
      <div style={styles.background}>
        <div style={styles.overlay}>
          <MenuAppBar title="Contact Us" />
          <ContactForm
            onChange={this.props.onChange}
            newMessage={this.props.newMessage}
            onSubmit={this.props.onSubmit(
              this.props.newMessage,
              this.props.history
            )}
            isActive={this.props.isActive}
          />
          <SimpleSnackbar
            open={this.props.displayEmailError}
            errorConfirm={this.props.errorConfirm}
          />
          <SimpleBottomNavigation />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    newMessage: state.newMessage,
    isActive: state.isActive,
    displayEmailError: state.errors.displayEmailError
  }
}

const mapActionsToProps = dispatch => {
  return {
    onChange: (field, value) => {
      dispatch(updateNewForm(field, value))
      dispatch(isActive)
    },
    onSubmit: (data, history) => e => {
      dispatch(addNewMessage(data, history))
    },
    isSubmitActive: () => dispatch(isActive),

    errorConfirm: () => dispatch(TOGGLE_EMAIL_ERROR)
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Contact)
