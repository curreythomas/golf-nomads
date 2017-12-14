import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import history from '../history'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 5
  }),
  textField: {
    margin: theme.spacing.unit,
    width: '75%',
    flexGrow: 1,
    textAlign: 'left'
  },
  buttonDiv: {
    flexGrow: 1,
    textAlign: 'center'
  },
  button: {
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    textDecoration: 'none'
  },
  container: {
    textAlign: 'left',
    flexGrow: 1
  },
  form: {
    paddingTop: '2em',
    paddingBottom: '2em'
  },
  title: {
    marginLeft: theme.spacing.unit
  },
  link: {
    textDecoration: 'none'
  }
})

class ContactForm extends React.Component {
  render() {
    const { classes } = this.props
    console.log('this.props', this.props)
    return (
      <div className={classes.root}>
        <form
          className={classes.form}
          onSubmit={e => {
            e.preventDefault()
            this.props.onSubmit()
          }}
        >
          <Paper className={classes.root} elevation={4} opacity="50%">
            <div className={classes.container}>
              <Typography
                type="headline"
                component="h3"
                className={classes.title}
              >
                Contact
              </Typography>
              <TextField
                label="First Name"
                type="name"
                className={classes.textField}
                margin="normal"
                required
                value={this.props.newMessage.subject}
                onChange={e => {
                  this.props.onChange('subject', e.target.value)
                }}
              />
              <TextField
                label="Last Name"
                type="name"
                className={classes.textField}
                margin="normal"
                required
                value={this.props.newMessage.text}
                onChange={e => {
                  this.props.onChange('text', e.target.value)
                }}
              />
              <TextField
                label="Email"
                type="email"
                autoComplete="current-email"
                className={classes.textField}
                margin="normal"
                required
                value={this.props.newMessage.from}
                onChange={e => {
                  this.props.onChange('from', e.target.value)
                }}
              />
              <TextField
                label="Message"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                required
                value={(this.props.newMessage.text, this.props.newMessage.html)}
                onChange={e => {
                  this.props.onChange('html', e.target.value)
                }}
              />
              <div className={classes.button}>
                <Button
                  raised
                  color="primary"
                  type="submit"
                  disabled={this.props.isActive}
                >
                  Submit
                </Button>
              </div>
            </div>
          </Paper>
        </form>
      </div>
    )
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ContactForm)
