import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { MovieContext } from './movieContext';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },

}));

export default function MovieForm() {
  const classes = useStyles();

  const [movie, setMovie] = useContext(MovieContext)
  const [input, setInput] = useState({title: "", description: "", year: 2020, duration: 120, genre: "", rating: 0, image_url: ""})

  useEffect(()=>{
    if (movie.statusForm === "changeToEdit"){
      let movieData = movie.lists.find(x=> x.id === movie.selectedId)
      setInput({title: movieData.title, description: movieData.description, year: movieData.year, duration: movieData.duration, genre: movieData.genre, rating: movieData.rating, image_url: movieData.image_url})
      setMovie({...movie, statusForm: "edit"})
    }
  },[movie, setMovie])

  const handleChange = (event) =>{
    let typeOfInput = event.target.name

    switch (typeOfInput){
      case "title":
      {setInput({...input, title: event.target.value}); 
        break
      }
      case "description":
      {
        setInput({...input, description: event.target.value});
        break
      }
      case "year":
      {
        setInput({...input, year: event.target.value});
          break
      }
      case "genre":
      {
        setInput({...input, genre: event.target.value});
        break
      }
      case "duration":
      {
        setInput({...input, duration: event.target.value});
        break
      }
      case "rating":
      {
        setInput({...input, rating: event.target.value});
        break
      }
      case "image":
      {
        setInput({...input, image_url: event.target.value});
        break
      }
    default:
      {break;}
    }
    console.log(input)
  }
  
  const handleSubmit = (event) =>{
    // menahan submit
    event.preventDefault()

    const title = input.title
    const description = input.description
    const year = input.year
    const duration = input.duration
    const genre = input.genre
    const rating = input.rating
    const image = input.image_url

    if (movie.statusForm === "create"){        
      axios.post(`http://backendexample.sanbercloud.com/api/movies`, {title: title, description: description, year: year, duration: duration, genre: genre, rating: rating, image_url: image})
      .then(res => {
          setMovie(
            {statusForm: "create", selectedId: 0,
            lists: [
              ...movie.lists, 
              { id: res.data.id, 
                title: title, 
                description: description, 
                year: year, 
                duration: duration, 
                genre: genre, 
                rating: rating, 
                image_url: image
              }]
            })
      })
    }else if(movie.statusForm === "edit"){
      axios.put(`http://backendexample.sanbercloud.com/api/movies/${movie.selectedId}`, {title: title, description: description, year: year, duration: duration, genre: genre, rating: rating, image_url: image})
      .then(() => {
          let movieData = movie.lists.find(el=> el.id === movie.selectedId)
          movieData.title = title
          movieData.description = description
          movieData.year = year
          movieData.duration = duration
          movieData.genre = genre
          movieData.rating = rating
          movieData.image_url = image
          setMovie({statusForm: "create", selectedId: 0, lists: [...movie.lists]})
      })
    }

    setInput({title: "", description: "", year: 2020, duration: 120, genre: "", rating: 0, image_url: ""})

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5"> Movie Form </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={9}>
              <TextField
                autoComplete="title"
                name="title"
                variant="outlined"
                required
                fullWidth
                id="title"
                label="Movie Title"
                defaultValue={input.title}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="year"
                label="Year"
                name="year"
                type="number"
                autoComplete="year"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="duration"
                label="Duration"
                name="duration"
                type="number"
                autoComplete="duration"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="genre"
                label="Genre"
                name="genre"
                autoComplete="genre"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                rows={4}
                required
                fullWidth
                multiline
                label="Multiline"
                variant="outlined"
                defaultValue="Default Value"
                id="outlined-multiline-static"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
