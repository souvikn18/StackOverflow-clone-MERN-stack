import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import User from './Pages/User/User'
import Question from './Pages/Question/Question'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import ViewQuestion from './Pages/Question/ViewQuestion'

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/auth' Component={Auth}/>
            <Route path='/user' Component={User} />
            <Route path='/questions' Component={Question}/>
            <Route path='/askquestions' Component={AskQuestion}/>
            <Route path='/questions/:id' Component={ViewQuestion} />
        </Routes>
    )
}

export default AllRoutes