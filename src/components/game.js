import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {GameProvider} from './gameContext'
import { Container, Grid, Paper, Typography, withStyles } from '@material-ui/core'


const useStyle = theme => ({
  headerImage: {
    width: "100%",
    height: "420px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
  },

  gameInfo: {
    backgroundColor: "rgba(0, 0, 0, .25)",
    color: "white",
    width: "100%",
    padding: "12px 17px",
  },

  btnDownload: {
    backgroundColor: "#1565c0",
    color: "white",
    textDecoration: "none",
    padding: "7px 12px",
    borderRadius: "4px"
  },

  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },

  imageCard: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "140px",
    width: "100%",
  },

  gameName: {
    marginTop: "7px",
    height: "21px",
    width: "100%",
    overflow: "hidden",
    fontSize: "14px",
    display: "block",
    textDecoration: "none",
    color: "rgb(0, 0, 0)"
  },
})
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games : []
    }
  }

  componentDidMount() {
    axios.get(`http://backendexample.sanbercloud.com/api/games`)
    .then(hasil => {
      const games = hasil.data;
      this.setState({ games })
    })
  }

  render() {
  const { classes } = this.props;
  return(
   <>
   <GameProvider>
    <header 
      className={classes.headerImage}
      style={{ backgroundImage: `url('{https://source.unsplash.com/random}')`
      }}>
      <div className={classes.gameInfo}>
        <Typography component="h1" variant="h3" color="inherit">
          Nama Game
        </Typography>
        <Typography variant="h5" color="inherit" paragraph>
          Tagline
        </Typography>
        <Link variant="subtitle1" to="/test" className={classes.btnDownload}>Unduh</Link>
      </div>
    </header>

    <Container>
      <h2>Game List</h2>
      <Grid container spacing={2}>
      {this.state.games.map(game => {
        return (
          <>
            <Grid item xs={2}>
              <Paper 
                elevation={3}
                className={classes.imageCard}
                style={{backgroundImage: `url('${game.image_url})`}}
              />
              <Link to="/game" className={classes.gameName}>{game.name}</Link>
            </Grid>
          </>
        )
      })}
      </Grid>
    </Container>
   </GameProvider>
   </>
  )
  }
}

export default withStyles(useStyle)(Game)