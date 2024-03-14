import React, { useState } from 'react'
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import './Question.css'
import upVote from '../../assets/sortup.svg'
import downVote from '../../assets/sortdown.svg'
import Avatar from '../../Components/Avatar/Avatar'
import DisplayAnswer from './DisplayAnswer'
import { postAnswer, deleteQuestion, voteQuestion } from '../../actions/question.actions'

const QuestionDetails = () => {

    const questionList = useSelector( state => state.questionReducer )
    const user = useSelector(state => state.currentUserReducer)

    const{ id } = useParams()
    const url = 'https://stack-overflow-clone-mern-stack.vercel.app'

    const [answer, setAnswer] = useState('')
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const handlePostAnswer = (e, answerLength) => {
        e.preventDefault()
        if (user === null) {
            alert('Login or Signup to post answer')
            navigate('/auth')
        }else{
            if (answer === '') {
                alert('Enter an answer before submit')
            }else{
                dispatch(postAnswer({
                    id,
                    noOfAnswers: answerLength + 1,
                    answerBody: answer,
                    userAnswered: user?.result?.name,
                    userId: user.result?._id
                }))
            }
        }
        setAnswer('')
    }

    const handleShare = () => {
        copy(url + location.pathname)
        alert('Copied URL: ' + url + location.pathname)
    }

    const handleDelete = () => {
        dispatch(deleteQuestion(
            id,
            navigate
        ))
    }

    const handleUpVote = () => {
        if (user === null) {
            alert("Login or Signup to vote a question")
            navigate('/auth')
        } else {
            dispatch(voteQuestion(
                id,
                'upVote',
                user.result?._id
            ))
        }
    }

    const handleDownVote = () => {
        if (user === null) {
            alert("Login or Signup to vote a question")
            navigate('/auth')
        } else {
            dispatch(voteQuestion(
                id,
                'downVote',
                user.result?._id
            ))
        }
    }

    return (
        <div className='question-details-page mt-[50px]'>
            {
                questionList.data === null ?
                <div className='flex justify-center mt-4'>
                    <svg className='animate-spin h-[50px] w-[50px] border-t-2 border-l-2 border-[#009dff] rounded-full'     viewBox='0 0 24 24'></svg>
                </div> :
                <>
                    {
                        questionList.data?.questionList.filter(question => question?._id === id).map(question => (
                            <div key={question?._id} className='mt-[30px]'>
                                <section className='question-details-container'>
                                    <h1 className='text-2xl font-bold mb-4 flex wrap'>{question.questionTitle}</h1>
                                    <div className='question-details-container-2'>
                                        <div className="question-votes">
                                            <img src={upVote} alt="" width='18' className='votes-icon' onClick={handleUpVote}/>
                                            <p>{question.upVotes.length - question.downVotes.length}</p>
                                            <img src={downVote} alt="" width='18' className='votes-icon' onClick={handleDownVote}/>
                                        </div>
                                        <div style={{width: "100%"}} className='flex flex-col gap-2'>
                                            <p className='question-body'>{question.questionBody}</p>
                                            <div className="question-details-tags">
                                                {
                                                    question.questionTags.map((tag) => (
                                                        <p key={tag}>{tag}</p>
                                                    ))
                                                }
                                            </div>
                                            <div className="question-actions-user">
                                                <div>
                                                    <button type='button' onClick={handleShare}>Share</button>
                                                    {
                                                        user?.result?._id === question?.userId && (
                                                            <button type='button' onClick={handleDelete}>Delete</button>
                                                        )
                                                    }
                                                </div>
                                                <div>
                                                    <p>asked {moment(question.askedOn).fromNow()}</p>
                                                    <Link to={`/Users/${question.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                                        <Avatar backgroundColor="orange" px='8px' py='5px' borderRadius="4px">{question.userPosted.charAt(0).toUpperCase()}</Avatar>
                                                        <div>
                                                            {question.userPosted}
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                {
                                    question.noOfAnswers !== 0 && (
                                        <section>
                                            <h3 className='text-lg font-bold mb-4'>{question.answers.length} Answers</h3>
                                            <DisplayAnswer key={question._id} question={question} handleShare={handleShare}/>
                                        </section>
                                    )
                                }
                                <section className='post-ans-container'>
                                    <h3 className='text-lg font-bold my-6'>Your Answer</h3>
                                    <form onSubmit={ (e) => { handlePostAnswer(e, question.noOfAnswers) }}>
                                        <textarea name="" id="" cols="30" rows="8" value={answer} onChange={e => setAnswer(e.target.value)}></textarea><br />
                                        <input type="submit" className='post-ans-btn' value='Post Your Answer'/>
                                    </form>
                                    <p>
                                        Browse other Question tagged
                                        {
                                            question.questionTags.map((tag) => (
                                                <Link to='/Tags' key={tag} className='ans-tags'> {tag} </Link>
                                            ))
                                        } or 
                                        <Link to='/askquestions' style={{textDecoration: "none", color:"#009dff"}}> ask your own question.</Link>
                                    </p>
                                </section>
                            </div>
                        ))
                    }
                </>
            }
        </div>
    )
}

export default QuestionDetails