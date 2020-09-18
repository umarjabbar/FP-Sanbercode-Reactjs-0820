import React from 'react'
import Header from '../components/header';
import { MovieProvider } from '../components/movieContext';
import MovieForm from '../components/movieForm';
import MovieTable from '../components/movieTable';

const MovieData = () => {
  return (
    <>
      <Header/>
      <MovieProvider>
        <MovieTable/>
        <MovieForm/>
      </MovieProvider>
    </>
  );
}


export default MovieData