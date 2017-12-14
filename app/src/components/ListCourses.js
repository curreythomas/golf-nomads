import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList'
import IconButton from 'material-ui/IconButton'
import InfoIcon from 'material-ui-icons/Info'
import { setCourses, filterCourses } from '../action-creators/courses'
import { connect } from 'react-redux'
import history from '../history'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'
import { map } from 'ramda'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',

    overflow: 'hidden',
    background: theme.palette.background.paper,
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 10
  },
  gridList: {
    height: '100vh',
    paddingBottom: theme.spacing.unit * 15
  },
  formControl: {
    minWidth: 160,
    marginBottom: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    paddingTop: 0
  }
})

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

class ListCourses extends React.Component {
  componentDidMount() {
    this.props.onMount()
    this.props.history
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  state = {
    city: '',
    name: ''
  }

  render() {
    console.log('the currently selected city is: ', this.state.city)

    const { classes } = this.props
    const coursesToDisplay =
      this.state.city.length === 0
        ? this.props.courses
        : this.props.filteredCourses
    console.log('this.props', this.props)
    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="filter">Filter By City</InputLabel>
          <Select
            value={this.state.city}
            onChange={e => {
              this.setState({ city: e.target.value })
              this.props.onChange(e.target.value)
            }}
            input={<Input name="Filter By" id="filter" />}
            MenuProps={{
              PaperProps: {
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                  width: 200
                }
              }
            }}
          >
            <MenuItem value="" />
            <MenuItem value={'Charleston'}>Charleston</MenuItem>
            <MenuItem value={'Edisto Island'}>Edisto Island</MenuItem>
            <MenuItem value={'Hollywood'}>Hollywood</MenuItem>
            <MenuItem value={'Isle of Palms'}>Isle of Palms</MenuItem>
            <MenuItem value={'James Island'}>James Island</MenuItem>
            <MenuItem value={'Johns Island'}>Johns Island</MenuItem>
            <MenuItem value={'Kiawah Island'}>Kiawah Island</MenuItem>
            <MenuItem value={'Ladson'}>Ladson</MenuItem>
            <MenuItem value={'Mount Pleasant'}>Mount Pleasant</MenuItem>
            <MenuItem value={'Moncks Corner'}>Moncks Corner</MenuItem>
            <MenuItem value={'North Charleston'}>North Charleston</MenuItem>
            <MenuItem value={'Seabrook Island'}>Seabrook Island</MenuItem>
            <MenuItem value={'Summerville'}>Summerville</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="sort">Sort</InputLabel>
          <Select
            value={this.state.name}
            onChange={this.handleChange}
            input={<Input name="Sort" id="Sort" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={'A to Z'}>A to Z</MenuItem>
            <MenuItem value={'Z to A'}>Z to A</MenuItem>
          </Select>
        </FormControl>
        <GridList cellHeight={180} className={classes.gridList}>
          {map(
            course => (
              <GridListTile
                key={course._id}
                onClick={e => {
                  history.push(`/courses/${course._id}`)
                }}
              >
                <img src={course.picURL} alt={course.name} />
                <GridListTileBar
                  title={course.name}
                  subtitle={<span>{course.city + ', ' + course.state}</span>}
                  actionIcon={
                    <IconButton>
                      <InfoIcon color="rgba(255, 255, 255, 0.54)" />
                    </IconButton>
                  }
                />
              </GridListTile>
            ),
            coursesToDisplay
          )}
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses,
    filteredCourses: state.filteredCourses
  }
}
const mapActionsToProps = dispatch => {
  return {
    onMount: () => {
      dispatch(setCourses, history)
    },
    onChange: city => dispatch(filterCourses(city))
  }
}

ListCourses.propTypes = {
  classes: PropTypes.object.isRequired
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(ListCourses))
