import React, {useState} from 'react';
import { AppBar, Toolbar, Typography, Grid, Button, Menu, MenuItem } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  textCenter: {
    textAlign: "center"
  },

  topSticky: {
    position: "sticky",
    top: 0
  }

}))
const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <AppBar className={classes.topSticky}>
        <Toolbar>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <Typography> Movies & Games </Typography>
            </Grid>
            <Grid item xs={8}>
            </Grid>
            <Grid item xs={1} className={classes.textCenter}>
              <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <AccountCircleOutlinedIcon style={{color: "white"}}/>
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link to="/logout">Logout</Link>
                </MenuItem>
              </Menu>
            </Grid>
          </Grid>
          
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
