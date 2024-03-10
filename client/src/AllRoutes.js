import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import Users from './Pages/User/Users'
import Question from './Pages/Question/Question'
import AskQuestion from './Pages/AskQuestion/AskQuestion'
import ViewQuestion from './Pages/Question/ViewQuestion'
import Tags from './Pages/Tags/Tags'
import UserProfile from './Pages/UserProfile/UserProfile'

const AllRoutes = () => {
    return (
        <Routes>
            <Route exact path='/' Component={Home}/>
            <Route exact path='/auth' Component={Auth}/>
            <Route path='/users' Component={Users} />
            <Route path='/questions' Component={Question}/>
            <Route path='/askquestions' Component={AskQuestion}/>
            <Route path='/questions/:id' Component={ViewQuestion} />
            <Route path='/tags' Component={Tags} />
            <Route path='/users/:id' Component={UserProfile} />
        </Routes>
    )
}

export default AllRoutes