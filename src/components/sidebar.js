import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Grid, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  sidebarTitle: {
    padding: "7px 7px",
    fontSize: "16px",
    background: "#bbdefb",
    color: "#002171" ,
  },

  sidebarItem : {
    textDecoration: "none",
    display: "block",
    margin: "3px 21px 12px",
    color: "#002171",
    fontSize: "14px",
  }

}))

const Sidebar = (props) => {
  const classes = useStyles();

  return (
    <>
    <Grid>
      <Typography gutterBottom className={classes.sidebarTitle}>Game Categories</Typography>
      <Link to="/test" className={classes.sidebarItem}>Action</Link>
      <Link to="/test" className={classes.sidebarItem}>Adventure</Link>
      <Link to="/test" className={classes.sidebarItem}>Arcade</Link>
      <Link to="/test" className={classes.sidebarItem}>Sport</Link>
      <Link to="/test" className={classes.sidebarItem}>Simulation</Link>
      <Link to="/test" className={classes.sidebarItem}>Board</Link>
      <Link to="/test" className={classes.sidebarItem}>Racing</Link>
      <Link to="/test" className={classes.sidebarItem}>Card</Link>
      <Link to="/test" className={classes.sidebarItem}>Casino</Link>
      <Link to="/test" className={classes.sidebarItem}>Casual</Link>
      <Link to="/test" className={classes.sidebarItem}>Education</Link>
      <Link to="/test" className={classes.sidebarItem}>Music</Link>
    </Grid>
    <Grid>
      <Typography gutterBottom className={classes.sidebarTitle}>Movie Categories</Typography>
      <Link to="/test" className={classes.sidebarItem}>Action</Link>
      <Link to="/test" className={classes.sidebarItem}>Adventure</Link>
      <Link to="/test" className={classes.sidebarItem}>Arcade</Link>
      <Link to="/test" className={classes.sidebarItem}>Sport</Link>
      <Link to="/test" className={classes.sidebarItem}>Simulation</Link>
      <Link to="/test" className={classes.sidebarItem}>Board</Link>
      <Link to="/test" className={classes.sidebarItem}>Racing</Link>
      <Link to="/test" className={classes.sidebarItem}>Card</Link>
      <Link to="/test" className={classes.sidebarItem}>Casino</Link>
      <Link to="/test" className={classes.sidebarItem}>Casual</Link>
      <Link to="/test" className={classes.sidebarItem}>Education</Link>
      <Link to="/test" className={classes.sidebarItem}>Music</Link>
    </Grid>

    </>
  );
}

export default Sidebar