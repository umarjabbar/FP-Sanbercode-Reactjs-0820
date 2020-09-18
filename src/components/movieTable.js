import React, { useEffect, useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import { Container,  Paper, Button } from '@material-ui/core';
import axios from 'axios'
import {MovieContext} from './movieContext'


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  movieImage: {
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "72px",
    height: "128px"
  }
  
});

const MovieTable = () => {
  const classes = useStyles();
  
  const [movie, setMovie] = useContext(MovieContext);
  console.log(movie)

  useEffect( () => {
    if (movie.lists === null){
      axios.get(`http://backendexample.sanbercloud.com/api/movies`)
      .then(res => {
        setMovie({
          ...movie, 
          lists: res.data.map(movie => {
            return {
              id: movie.id,
              title: movie.title,
              description: movie.description,
              year: movie.year,
              duration: movie.duration, 
              genre: movie.genre, 
              rating: movie.rating, 
              image_url: movie.image_url
            }
          })
        })
      })
    }
  }, [setMovie, movie])

  const handleEdit = (event) =>{
    let movieId = parseInt(event.target.value)
    setMovie({...movie, selectedId: movieId, statusForm: "changeToEdit"})
  }

  const handleDelete = (event) => {
    let movieId = parseInt(event.target.value)

    let newLists = movie.lists.filter(el => el.id !== movieId)

    axios.delete(`http://backendexample.sanbercloud.com/api/movies/${movieId}`)
    .then(res => {
      console.log(res)
    })
          
    setMovie({...movie, lists: [...newLists]})
    
  }

  return (
    <>
      <Container fixed style={{marginTop: "42px"}}>
        <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">Rating</TableCell>
                <TableCell align="right">Genre</TableCell>
                <TableCell align="center">Duration</TableCell>
                <TableCell align="center">Image</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
              movie.lists !== null && movie.lists.map((movie, index) => (

                <TableRow key={index}>
                  <TableCell align="right">{movie.title}</TableCell>
                  <TableCell component="th" scope="movie">
                    {movie.description}
                  </TableCell>
                  <TableCell align="center">{movie.year}</TableCell>
                  <TableCell align="center">{movie.duration}</TableCell>
                  <TableCell align="center">{movie.rating}</TableCell>
                  <TableCell align="center">{movie.genre}</TableCell>
                  <TableCell
                    className={classes.movieImage}
                    style={{backgroundImage: `url('${movie.image_url}')`}}
                  />
                  <TableCell align="center">
                    <Button 
                      color="primary" 
                      variant="contained"
                      onClick={handleEdit}
                      value={movie.id}
                    > Edit </Button>
                    <Button 
                      color="secondary" 
                      variant="contained"
                      onClick={handleDelete}
                      value={movie.id}
                      style={{marginTop: "12px"}}
                    > Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}


export default MovieTable