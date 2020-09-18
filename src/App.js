import React from 'react';
import HomePage from './pages/home';
import './App.css'
import UserRoutes from './routes/userRoutes'
import PageRoutes from './routes/pageRoutes'
import {Route} from 'react-router-dom'
import { UserProvider } from './components/userContext';

function App() {
  return (
    <>
      <PageRoutes/>
      <UserProvider>
        <UserRoutes/>
      </UserProvider>
      <Route path="/home" exact><HomePage/></Route>
    </>
  );
}

export default App;
