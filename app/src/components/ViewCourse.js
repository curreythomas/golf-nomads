import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import FavoriteIcon from 'material-ui-icons/Favorite'
import PhoneIcon from 'material-ui-icons/Phone'
import DirectionsIcon from 'material-ui-icons/Directions'
import { withStyles } from 'material-ui/styles'
import Card, {
  CardActions,
  CardContent,
  CardMedia,
  CardHeader
} from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import {
  not,
  isNil,
  slice,
  toUpper,
  contains,
  head,
  drop,
  compose,
  toLower,
  join,
  split,
  pathOr
} from 'ramda'
import { setCurrentCourse } from '../action-creators/courses'
import { connect } from 'react-redux'
import history from '../history'

const styles = {
  card: {
    maxWidth: '100%'
  },
  cardHeader: {
    fontSize: '16px'
  },
  media: {
    height: '30vh',
    paddingTop: '5vh'
  },
  avatar: {
    margin: 10
  },
  bigAvatar: {
    width: 100,
    height: 100
  },
  container: {
    flex: 1
  },
  button: {
    position: 'absolute',
    right: 0,
    marginRight: '1em'
  }
}

class ViewCourseCard extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.setCurrentCourse(id)
  }
  render() {
    const currentID = pathOr('', ['currentCourse', '_id'], props)
    const websiteButton = not(isNil(this.props.currentCourse.website)) ? (
      <Button
        dense
        color="primary"
        onClick={() => window.open(this.props.currentCourse.website)}
      >
        Website
      </Button>
    ) : null
    const { classes } = this.props
    const removeArticles = arrData =>
      contains(head(arrData), ['the', 'a', 'an']) ? drop(1, arrData) : arrData
    const props = this.props.currentCourse
    console.log('PROPSSSSS', this.props)
    return (
      <div className={classes.container}>
        <Card className={classes.card} style={{ marginBottom: 32 }}>
          <CardMedia className={classes.media}>
            <img
              title={props.name}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={props.picURL}
              // allowFullScreen
            />
          </CardMedia>
          <CardHeader
            className={classes.cardHeader}
            avatar={
              <Avatar
                aria-label="Course"
                classesName={(classes.avatar, classes.bigAvatar)}
                src={props.logo}
              />
            }
            title={props.name}
            subheader={props.address + ', ' + props.city + ', ' + props.state}
          />
          <CardContent>
            <Typography component="p">{props.description}</Typography>
          </CardContent>
          <div className={classes.container}>
            <CardActions>
              <a href={'tel:' + props.phoneNumber}>
                <IconButton color="primary">
                  <PhoneIcon />
                </IconButton>
              </a>

              {websiteButton}

              <a href={props.directions}>
                <IconButton color="primary">
                  <DirectionsIcon />
                </IconButton>
              </a>

              <Button raised color="primary" className={classes.button}>
                Book A Tee Time
              </Button>
            </CardActions>
          </div>

          <CardMedia className={classes.media}>
            <iframe
              title={props.name}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src={`https://www.google.com/maps/embed/v1/place?key=${
                process.env.REACT_APP_MAP
              }&q=${encodeURI(props.name)}`}
              allowFullScreen
            />
          </CardMedia>
        </Card>
      </div>
    )
  }
}

ViewCourseCard.propTypes = {
  classes: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    currentCourse: state.currentCourse
  }
}

const mapActionsToProps = dispatch => {
  return {
    setCurrentCourse: id => dispatch(setCurrentCourse(id), history)
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(withStyles(styles)(ViewCourseCard))
