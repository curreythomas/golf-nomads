import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import AccountCircle from 'material-ui-icons/AccountCircle'
import Menu, { MenuItem } from 'material-ui/Menu'
import { Link } from 'react-router-dom'
import GoBackIcon from 'material-ui-icons/KeyboardArrowLeft'
import history from '../history'

const styles = {
  root: {
    width: '100%',
    top: '0',
    position: 'fixed',
    zIndex: '100',
    flexGrow: 1
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
  },
  account: {
    position: 'absolute',
    flex: 1,
    top: 0,
    right: 0,
    paddingRight: '1.5em',
    paddingTop: '.5em'
  },
  goBack: {
    fontSize: 32,
    marginRight: '1em'
  }
}

class SimpleAppBar extends React.Component {
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
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              color="contrast"
              aria-label="goBack"
              onClick={e => history.push('/courses')}
            >
              <GoBackIcon style={styles.goBack} />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.title}>
              {this.props.title}
            </Typography>
            <div className={classes.account}>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="contrast"
                className={classes.account}
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
                  <MenuItem onClick={this.handleRequestClose}>Sign Up</MenuItem>
                </Link>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SimpleAppBar)
