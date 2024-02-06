import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import User from './Pages/User/User'

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/auth' Component={Auth}/>
            <Route path='/user' Component={User} />
        </Routes>
    )
}

export default AllRoutes