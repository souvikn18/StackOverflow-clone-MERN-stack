// using axios to fetch data from backend
import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})

export const signUp = (authData) => API.post('/api/v1/user/signup', authData)
export const logIn = (authData) => API.post('/api/v1/user/login', authData)
export const postQuestion = (questionData) => API.post('/api/v1/question/askquestions', questionData)