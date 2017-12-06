import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import Divider from 'material-ui/Divider'
import MenuIcon from 'material-ui-icons/Menu'
import { Link } from 'react-router-dom'
import Menu, { MenuItem, MenuList } from 'material-ui/Menu'

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  inset: {
    marginLeft: '10px',
    marginRight: '10px',
    height: '3px',
    backgroundColor: '#E3F2FD'
  },
  menu: {
    position: 'relative',
    zIndex: 0,
    width: '50vw',
    outline: 'none',
    outlineStyle: 'none',
    boxShadow: 'none',
    textDecoration: 'none',
    borderRadius: '50'
  }
})

class LeftNavMenu extends React.Component {
  state = {
    anchorEl: null,
    open: false
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  }

  handleRequestClose = () => {
    this.setState({ open: false, anchorEl: null })
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)
    return (
      <div>
        <IconButton
          className={classes.menuButton}
          aria-owns={this.state.open ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="contrast"
        >
          <MenuIcon />
        </IconButton>
        <Menu
          autoWidth={true}
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <div className={classes.menu}>
            <Link to="/" className={classes.menu}>
              <MenuItem onClick={this.handleRequestClose}>Home</MenuItem>
            </Link>
            <Link to="/about" className={classes.menu}>
              <MenuItem onClick={this.handleRequestClose}>About</MenuItem>
            </Link>
            <Link to="/courses" className={classes.menu}>
              <MenuItem onClick={this.handleRequestClose}>Courses</MenuItem>
            </Link>
            <Divider className={classes.inset} />
            <Link to="/faq" className={classes.menu}>
              <MenuItem onClick={this.handleRequestClose}>FAQ</MenuItem>
            </Link>
            <Link to="/contact" className={classes.menu}>
              <MenuItem onClick={this.handleRequestClose}>Contact</MenuItem>
            </Link>
          </div>
        </Menu>
      </div>
    )
  }
}
LeftNavMenu.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LeftNavMenu)
