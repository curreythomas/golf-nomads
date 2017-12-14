import React from 'react'
import Button from 'material-ui/Button'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle
} from 'material-ui/Dialog'

import Slide from 'material-ui/transitions/Slide'
//import NoSSR from 'docs/src/modules/components/NoSSR' // Temporary workaround for SSR Portal issue.
import TextField from 'material-ui/TextField'

const styles = {
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: '1em',
    marginRight: '1em',
    width: 200
  },
  button: {
    position: 'relative',
    marginLeft: '1em'
  }
}

function Transition(props) {
  return <Slide direction="up" {...props} />
}

class BookTeeTime extends React.Component {
  state = {
    open: false
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
        <Button
          raised
          color="primary"
          onClick={this.handleClickOpen}
          style={styles.button}
        >
          Book A Tee Time
        </Button>

        <Dialog
          open={this.state.open}
          transition={Transition}
          keepMounted
          onRequestClose={this.handleRequestClose}
        >
          <DialogTitle>{'Book Your Tee Time!'}</DialogTitle>
          <DialogContent>
            <form style={styles.container} noValidate>
              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue=""
                style={styles.textField}
                InputLabelProps={{
                  shrink: true
                }}
              />
              <TextField
                id="time"
                label="Time"
                type="time"
                defaultValue=""
                style={styles.textField}
                InputLabelProps={{
                  shrink: true
                }}
                inputProps={{
                  step: 300 // 5 min
                }}
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Confirm Tee Time
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default BookTeeTime
