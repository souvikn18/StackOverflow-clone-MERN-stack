import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const QuestionList = ({question}) => {
    return (
        <section className='min-h-[80px] flex items-center w-[100%] gap-6 py-5 pl-4 bg-[#fdf7e2] border-b border-b-[#edeff0]'>
            <div className='text-center'>
                <p>{question.upVotes.length - question.downVotes.length}</p>
                <p>Votes</p>
            </div>
            <div className='text-center'>
                <p>{question.answers.length}</p>
                <p>Answers</p>
            </div>
            <div className="display-question-details">
                <Link to={`/questions/${question._id}`}>
                    <p className='text-[#037ecb] pb-2 transition ease-in-out duration-300 hover:text-[#009dff]'>{question.questionTitle}</p>
                </Link>
                <div className='display-tags-time'>
                    <div  className='display-tags'>
                        {question.questionTags.map(tag => (
                            <p key={tag}>{tag}</p>
                        ))}
                    </div>
                    <p className='display-time'>asked {moment(question.askedOn).fromNow()} by {question.userPosted}</p>
                </div>
            </div>
        </section>
    )
}

export default QuestionList