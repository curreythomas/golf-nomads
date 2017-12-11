import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import IconButton from 'material-ui/IconButton'
import InfoIcon from 'material-ui-icons/Info'
//import tileData from '../tileData/tileData'
import { setCourses } from '../action-creators/courses'
import { map } from 'ramda'
import { connect } from 'react-redux'
import history from '../history'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper,
    paddingRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    paddingTop: theme.spacing.unit * 15
  },
  gridList: {
    height: '100vh',
    paddingBottom: theme.spacing.unit * 15
  }
})

class ListCourses extends React.Component {
  componentDidMount() {
    this.props.onMount()
    this.props.history
  }
  render() {
    const { classes } = this.props
    console.log(this.props)
    return (
      <div className={classes.container}>
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
  console.log('state', state)
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
