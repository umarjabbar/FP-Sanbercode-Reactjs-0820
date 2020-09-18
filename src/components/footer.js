import React, {Component} from 'react'
import { withStyles } from '@material-ui/styles'
import { Link, Typography } from '@material-ui/core'

const useStyle = theme => ({
  footer: {
    backgroundColor: "#bbdefb",
    height: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "42px"
  },
})


class Footer extends Component {
  render() {
    const {classes} = this.props
    return (
      <>
        <footer className={classes.footer}>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
              Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </footer>
      </>
    )
  }
}

export default withStyles(useStyle)(Footer);