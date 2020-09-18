import React from 'react';
import Game from '../components/game';
import Movies from '../components/movies';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import { Grid } from '@material-ui/core';
import Footer from '../components/footer';
import Routes from '../routes/pageRoutes';

const HomePage = () => {
  return (
    <>
      <Grid direction="column">
      <Grid item>
        <Header/>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <Sidebar/>
        </Grid>
        <Grid item xs={10}>
          <Game/>
          <Movies/>
          <Routes/>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer/>
      </Grid>
    </Grid>
    </>
  );
}

export default HomePage