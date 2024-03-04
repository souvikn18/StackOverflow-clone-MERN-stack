// using axios to fetch data from backend
import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:5000'})

export const signUp = (authData) => API.post('/api/v1/user/signup', authData)
export const logIn = (authData) => API.post('/api/v1/user/login', authData)
export const postQuestion = (questionData) => API.post('/api/v1/question/askquestions', questionData)
export const getAllQuestions = () => API.get('/api/v1/question/get')
export const postAnswer = (id, noOfAnswers, userAnswered, answerBody, userId) => API.patch(`/api/v1/answer/post/${id}`, {
    noOfAnswers,
    userAnswered,
    answerBody,
    userId
})
export const deleteQuestion = (id) => API.delete(`/api/v1/question/delete/${id}`)
export const deleteAnswer = (id, answerId, noOfAnswers) => API.patch(`/api/v1/answer/delete/${id}`, {
    answerId,
    noOfAnswers
})