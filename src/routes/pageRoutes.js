import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MovieData from '../pages/movieData'
import MovieDetail from '../pages/movieDetail'

const Routes = () => {
  return(
    <>
      <Switch>
        <Route path="/movie-data" exact><MovieData/></Route>
        <Route path="/movie/detail/:id" exact><MovieDetail/></Route>
        {/* <Route path="/movies" component={MovieList}/> */}
        {/* <Route path="/movie/detail/" component={MovieDetail}/> */}
        {/* <Route path="/games" component={GameList}/> */}
        {/* <Route path="/game/detail/" component={gameDetail}/> */}
      </Switch>
    </>
  )
}

export default Routes