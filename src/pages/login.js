import React, {useContext, useState} from 'react'
import axios from "axios"
import { UserContext } from "../components/userContext"
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline, TextField, Link } from '@material-ui/core'
import { Grid, Container, Button, Typography, Box } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  loginImage: {
    width: "100%",
    height: "525px",
    backgroundImage: "url('https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },

  loginForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  form: {
    width: '75%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Login = () => {
  const classes = useStyle()
  const [, setUser] = useContext(UserContext)
  const [input, setInput] = useState({email: "" , password: ""})

  const handleSubmit = (event) =>{
    event.preventDefault()
    axios.post("https://backendexample.sanbersy.com/api/user-login", {
      email: input.email, 
      password: input.password
    }).then(
      (res)=>{
        var user = res.data.user
        var token = res.data.token
        var currentUser = {name: user.name, email: user.email, token }
        setUser(currentUser)
        localStorage.setItem("user", JSON.stringify(currentUser))
        localStorage.setItem("login", JSON.stringify(true))
        window.location.href = '/home'
      }
    ).catch((err)=>{
      alert(err)
    })
  }

  const handleChange = (event) =>{
    let value = event.target.value
    let name = event.target.name
    switch (name){
      case "email":{
        setInput({...input, email: value})
        break;
      }
      case "password":{
        setInput({...input, password: value})
        break;
      }
      default:{break;}
    }
  }

  return (
    <>
      <Grid container direction="row">
        <Grid item ms={6} xs={2} className={classes.loginImage}/>
        <Grid item ms={6} xs={10} className={classes.loginForm}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  required
                  fullWidth
                  autoFocus
                  id="email"
                  name="email"
                  label="Email Address"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  autoComplete="email"
                  />
                <TextField
                  required
                  fullWidth
                  id="password"
                  type="password"
                  name="password"
                  label="Password"
                  margin="normal"
                  variant="outlined"
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" style={{fontSize: "12px"}}>
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" style={{fontSize: "12px"}}>
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={8}>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  )
}

export default Login