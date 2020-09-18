import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../pages/login'
import Logout from '../pages/logout'
import Register from '../pages/register'

const UserRoutes = () => {
  return(
    <>
      <Switch>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/logout" exact component={Logout}/>
      </Switch>
    </>
  )
}

export default UserRoutes