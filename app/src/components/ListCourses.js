import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList'
import Subheader from 'material-ui/List/ListSubheader'
import IconButton from 'material-ui/IconButton'
import InfoIcon from 'material-ui-icons/Info'
import tileData from '../tileData/tileData'

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

function ListCourses(props) {
  const { classes } = props

  return (
    <div className={classes.container}>
      <GridList cellHeight={180} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile._id}>
            <img src={tile.picURL} alt={tile.name} />
            <GridListTileBar
              title={tile.name}
              subtitle={<span>{tile.city + ', ' + tile.state}</span>}
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

ListCourses.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ListCourses)
