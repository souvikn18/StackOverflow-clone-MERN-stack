import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './App.css';
import Navbar from './Components/Navabr/Navbar';
import AllRoutes from './AllRoutes';
import { fetchAllQuestions } from './actions/question.actions'; 
import { fetchAllUser } from './actions/user.actions';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions())
    dispatch(fetchAllUser())
  }, [dispatch])

  return (
    <Router>
      <Navbar/>
      <AllRoutes/>
    </Router>
  );
}

export default App;
