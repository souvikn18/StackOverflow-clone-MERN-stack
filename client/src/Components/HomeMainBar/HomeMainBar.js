import React from 'react'
import './HomeMainBar.css'
import { Link, useLocation } from 'react-router-dom'
import Button from '../Button'
import QuestionList from './QuestionList'

const HomeMainBar = () => {

    // we are creating this array of objects for just designing purpose, after completion the original data will come from server side

    var questionsList = [{
        _id: 1,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 2,
        questionTitle: "What is a function?",
        questionBody: "It meant to be",
        questionTags: ["java", "node js", "react js", "mongo db", "express js"],
        userPosted: "souvik",
        userId: 1,
        askedOn: "jan 1",
        answer: [{
            answerBody: "Answer",
            userAnswered: 'suvo',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },{ 
        _id: 2,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a class?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "souvik",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'suvo',
            answeredOn: "jan 2",
            userId: 2,
        }]
    },{ 
        _id: 3,
        upVotes: 3,
        downVotes: 2,
        noOfAnswers: 0,
        questionTitle: "What is a call back function?",
        questionBody: "It meant to be",
        questionTags: ["javascript", "R", "python"],
        userPosted: "souvik",
        askedOn: "jan 1",
        userId: 1,
        answer: [{
            answerBody: "Answer",
            userAnswered: 'suvo',
            answeredOn: "jan 2",
            userId: 2,
        }]
    }]

    const location = useLocation()

    return (
        <div className='max-w-[calc(100%-330px)] w-[100%] inline-block'>
            <div className='flex justify-between mt-[50px]'>
                { location.pathname === '/' ? <h1 className='text-4xl font-[400]'>Top Questions</h1> : <h1 className='text-4xl font-[400]'>All Questions</h1> }
                <Link to='/askquestions'><Button>Ask Questions</Button></Link>
            </div>
            {
                questionsList === null ?
                <div className='flex justify-center mt-2'>
                    <svg className='animate-spin h-[50px] w-[50px] border-t-2 border-l-2 border-[#009dff] rounded-full' viewBox='0 0 24 24'></svg>
                </div> :
                <div className='mt-8 mb-4'>
                    {questionsList.length+" Questions"}
                </div>
            }
            {
                questionsList.map(question => (
                    <QuestionList key={question._id} question={question}/>
                ))
            }
        </div>
    )
}

export default HomeMainBar