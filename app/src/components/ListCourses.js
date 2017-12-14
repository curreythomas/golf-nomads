import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import IconButton from 'material-ui/IconButton'
import InfoIcon from 'material-ui-icons/Info'
import { setCourses } from '../action-creators/courses'
import { map } from 'ramda'
import { connect } from 'react-redux'
import history from '../history'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'

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
    minWidth: 182,
    marginBottom: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    paddingTop: 0
  }
})

class ListCourses extends React.Component {
  componentDidMount() {
    this.props.onMount()
    this.props.history
  }
  render() {
    const { classes } = this.props
    console.log('this.props', this.props.courses)
    return (
      <div className={classes.container}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="filter">Filter By</InputLabel>
          <Select
            value={this.props.courses}
            onChange={this.handleChange}
            input={<Input name="Filter By" id="filter" />}
          >
            <MenuItem value="" />
            <MenuItem value={this.props.city}>City</MenuItem>
            <MenuItem value={this.props.holes}>Holes</MenuItem>
            <MenuItem value={this.props.golfers}>Golfers</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="sort">Sort</InputLabel>
          <Select
            value={this.props.courses}
            onChange={this.handleChange}
            input={<Input name="Sort" id="Sort" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={this.props.city}>A to Z</MenuItem>
            <MenuItem value={this.props.name}>Z to A</MenuItem>
          </Select>
        </FormControl>
        <GridList cellHeight={180} className={classes.gridList}>
          {this.props.courses.map(course => (
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
          ))}
        </GridList>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { courses: state.courses }
}
const mapActionsToProps = dispatch => {
  return {
    onMount: () => {
      dispatch(setCourses, history)
    }
  }
}

ListCourses.propTypes = {
  classes: PropTypes.object.isRequired
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(withStyles(styles)(ListCourses))
