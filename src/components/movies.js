import React, {Component} from 'react'
import axios from 'axios'
import {Rating} from '@material-ui/lab'
import {Container, Grid, Paper} from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { Link } from 'react-router-dom'

const useStyle = theme => ({
  movieCardImage: {
    width: "100%",
    height: "275px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "flex-end",
  },

  movieRating: {
    padding: "3px",
    width: "100%",
    backgroundColor: "rgba(250, 250, 250, .5)"
  }
})

class Movie extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    axios.get(`http://backendexample.sanbercloud.com/api/movies`)
    .then(res => {
      const movies = res.data;
      this.setState({ movies });
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <Container>
          <h2>Movie List</h2>
          <Grid container spacing={2}>
            {
              this.state.movies.map(movie => {
              const movieRating = Math.round(movie.rating)
              return (
                <Grid item xs={3}>
                  <Paper className={classes.movieCardImage} style={{backgroundImage: `url('${movie.image_url}')`}}>
                    <Rating 
                      name="read-only"
                      value={movieRating} 
                      max={10}
                      readOnly
                      size="small" 
                      className={classes.movieRating}/>
                  </Paper>
                  <Link to={`/movie/detail/${movie.id}`}>{movie.title}</Link>
                </Grid>
              )})
            }
          </Grid>
        </Container>
      </>
    )
  }
}

export default withStyles(useStyle)(Movie);