import React from 'react'
import './HomeMainBar.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '../Button'
import QuestionList from './QuestionList'

const HomeMainBar = () => {

    const questionsList = useSelector(state => state.questionReducer)
    const User = useSelector(state => state.currentUserReducer)
    const location = useLocation()
    const navigate = useNavigate()
    
    const checkAuth = () => {
        if (User === null) {
            alert('Login or Signup to ask a question')
            navigate("/auth")
        }
        else{
            navigate("/askquestions")
        }
    }

    return (
        <div className='max-w-[calc(100%-330px)] w-[100%] inline-block'>
            <div className='flex justify-between mt-[50px]'>
                { location.pathname === '/' ? <h1 className='text-4xl font-[400]'>Top Questions</h1> : <h1 className='text-4xl font-[400]'>All Questions</h1> }
                <button onClick={checkAuth}><Button>Ask Questions</Button></button>
            </div>
            {
                questionsList.data === null ?
                <div className='flex justify-center mt-2'>
                    <svg className='animate-spin h-[50px] w-[50px] border-t-2 border-l-2 border-[#009dff] rounded-full' viewBox='0 0 24 24'></svg>
                </div> :
                <div className='mt-8 mb-4'>
                    {questionsList?.data?.questionList.length+" Questions"}
                </div>
            }
            {
                questionsList?.data?.questionList.reverse().map(question => (
                    <QuestionList key={question._id} question={question}/>
                ))
            }
        </div>
    )
}

export default HomeMainBar