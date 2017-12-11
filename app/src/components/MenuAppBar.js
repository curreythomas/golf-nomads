import React from 'react'
import PropTypes from 'prop-types'
import lightBlue from 'material-ui/colors/lightBlue'
import { Link } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Menu, { MenuItem } from 'material-ui/Menu'
import LeftNavMenu from './LeftNavMenu'

const styles = theme => ({
  root: {
    width: '100%',
    top: '0',
    position: 'fixed',
    zIndex: '100'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  menu: {
    position: 'relative',
    outline: 'none',
    outlineStyle: 'none',
    boxShadow: 'none',
    textDecoration: 'none'
  }
})

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked })
  }

  handleMenu = event => {
    this.setState({
      anchorEl: event.currentTarget
    })
  }

  handleRequestClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes } = this.props
    const { auth, anchorEl } = this.state
    const open = Boolean(anchorEl)
    return (
      <div className={classes.root}>
        <AppBar position="static" backgroundColor="lightBlue">
          <Toolbar>
            <LeftNavMenu />
            <Typography type="title" color="inherit" className={classes.flex}>
              {this.props.title}
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="contrast"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  open={open}
                  onRequestClose={this.handleRequestClose}
                >
                  <Link to="/login" className={classes.menu}>
                    <MenuItem onClick={this.handleRequestClose}>Login</MenuItem>
                  </Link>
                  <Link to="/signup" className={classes.menu}>
                    <MenuItem onClick={this.handleRequestClose}>
                      Sign Up
                    </MenuItem>
                  </Link>
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(MenuAppBar)
