import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import AccountCircle from 'material-ui-icons/AccountCircle'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginRight: theme.spacing.unit * 5,
    marginLeft: theme.spacing.unit * 5,
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  }),
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '75%',
    flexGrow: 1,
    textAlign: 'center'
  },
  buttonDiv: {
    flexGrow: 1,
    textAlign: 'center'
  },
  button: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  icon: {
    height: 75,
    width: 75,
    color: '#3f51b5',
    backgroundColor: '#fff',
    textAlign: 'center'
  },
  container: {
    textAlign: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  signup: {
    textDecoration: 'none'
  },
  form: {
    paddingTop: '2em',
    paddingBottom: '2em'
  },
  link: {
    textDecoration: 'none'
  }
})

function LoginFields(props) {
  const { classes } = props

  return (
    <div>
      <form className={classes.form}>
        <Paper className={classes.root} elevation={4}>
          <div className={classes.container}>
            <AccountCircle className={classes.icon} />
            <Typography type="headline" component="h3">
              Golf Nomads
            </Typography>
            <TextField
              id="required"
              label="Email"
              type="email"
              autoComplete="current-email"
              className={classes.textField}
              margin="normal"
              required="true"
            />
            <TextField
              id="required"
              label="Password"
              className={classes.textField}
              type="password"
              autoComplete="current-password"
              margin="normal"
              required="true"
            />
            <div className={classes.button}>
              <Link to="/" className={classes.link}>
                <Button
                  raised
                  color="primary"
                  type="submit"
                  className={classes.button}
                >
                  Login
                </Button>
              </Link>
            </div>
            <a href="/signup" className={classes.signup}>
              Create a Profile
            </a>
          </div>
        </Paper>
      </form>
    </div>
  )
}

LoginFields.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginFields)
