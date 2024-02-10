import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import upVote from '../../assets/sortup.svg'
import downVote from '../../assets/sortdown.svg'
import Avatar from '../../Components/Avatar/Avatar'

const QuestionDetails = () => {

    //dummy data for designing
    
    var questionsList = [{
        _id: '1',
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
        _id: '2',
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
        _id: '3',
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

    const{ id } = useParams()
    const [votes, setVotes] = useState(0)

    return (
        <div className='max-w-[calc(100%-330px)]  w-[100%] inline-block mt-[50px]'>
            {
                questionsList === null ?
                <div className='flex justify-center mt-2'>
                    <svg className='animate-spin h-[50px] w-[50px] border-t-2 border-l-2 border-[#009dff] rounded-full' viewBox='0 0 24 24'></svg>
                </div> : 
                <div className='border-b border-[#0000003e] max-h-[200px]'>
                    {
                        questionsList.filter(question => (question._id === id)).map(question => (
                            <>
                                <div key={question._id}>
                                    <h1 className='text-2xl font-bold'>{question.questionTitle}</h1>
                                </div>
                                <div key={question._id} className='mt-8 mb-4'>
                                    <div>
                                        <img src={upVote} width='20' alt='upvote' />
                                        <p className='px-1 text-2xl'>{votes}</p>
                                        <img src={downVote} width='20' alt='downvote' />
                                    </div>
                                    <div className='relative left-[50px] top-[-85px]'>
                                        <div>
                                            <p>{question.questionBody}</p>
                                            {question.questionTags.map(tag => (
                                                <span className='mr-2 p-1 bg-[#e1ecf4] text-[#39739d] text-[13px] rounded' key={tag}>{tag}</span>
                                            ))}
                                        </div>
                                        <div className='w-[calc(100%-50px)] flex justify-between'>
                                            <div className='flex gap-4 my-4'>
                                                <button className='text-sm text-[#939292] active:border-b active:border-[#0000003e]' type='button'>Share</button>
                                                <button className='text-sm text-[#939292] active:border-b active:border-[#0000003e]' type='button'>Delete</button>
                                            </div>
                                            <div className='text-sm'>
                                                <p> Asked on {question.askedOn} by</p>
                                                <Link to={`/user/${question.userId}`} className='flex gap-1'>
                                                    <Avatar value={question.userPosted.charAt(0).toUpperCase()} backgroundColor='orange' borderRadius='4px' color='white' width='20px' cursor='pointer'/>
                                                    <p className='text-[#0086d8]'>{question.userPosted}</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))
                    }
                </div>
            }
        </div>
    )
}

export default QuestionDetails