import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import ListSubheader from 'material-ui/List/ListSubheader'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Collapse from 'material-ui/transitions/Collapse'
import Question from 'material-ui-icons/QuestionAnswer'
import ExpandLess from 'material-ui-icons/ExpandLess'
import ExpandMore from 'material-ui-icons/ExpandMore'
import { Link } from 'react-router-dom'

var Contact = 'http://www.golfnomads.co/contact'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 8,
    background: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
})

class NestedList extends React.Component {
  state = { open: false, open2: false, open3: false, open4: false }

  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleClick2 = () => {
    this.setState({
      open2: !this.state.open2
    })
  }

  handleClick3 = () => {
    this.setState({
      open3: !this.state.open3
    })
  }

  handleClick4 = () => {
    this.setState({
      open4: !this.state.open4
    })
  }

  render() {
    const { classes } = this.props

    return (
      <List
        className={classes.root}
        subheader={<ListSubheader>Frequently Asked Questions</ListSubheader>}
      >
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <Question />
          </ListItemIcon>
          <ListItemText inset primary="How do I contact Golf Nomads?" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          component="li"
          in={this.state.open}
          timeout="auto"
          unmountOnExit
        >
          <List disablePadding>
            <ListItem button className={classes.nested}>
              <Link to="/contact">
                <ListItemText
                  inset
                  primary="Please visit our Contact page and fill out our contact form"
                />
              </Link>
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={this.handleClick2}>
          <ListItemIcon>
            <Question />
          </ListItemIcon>
          <ListItemText
            inset
            primary="Where can I see a list of all golf courses?"
          />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          component="li"
          in={this.state.open2}
          timeout="auto"
          unmountOnExit
        >
          <List disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText
                inset
                primary="Navigate to the courses page through the bottom navigation and see all the courses you want!"
              />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={this.handleClick3}>
          <ListItemIcon>
            <Question />
          </ListItemIcon>
          <ListItemText inset primary="How can I contact a golf course?" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          component="li"
          in={this.state.open3}
          timeout="auto"
          unmountOnExit
        >
          <List disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText
                inset
                primary="After navigating to a specific courses information there is a button to link you to their website. Alternatively, there is a button you may click to call them directly."
              />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button onClick={this.handleClick4}>
          <ListItemIcon>
            <Question />
          </ListItemIcon>
          <ListItemText
            inset
            primary="How can I see more information about a specific course?"
          />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse
          component="li"
          in={this.state.open4}
          timeout="auto"
          unmountOnExit
        >
          <List disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText
                inset
                primary="From the courses page, you can click on a specific course and you will be brought to that individual course page and see more information."
              />
            </ListItem>
          </List>
        </Collapse>
      </List>
    )
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(NestedList)
