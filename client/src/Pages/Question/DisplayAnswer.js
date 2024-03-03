import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Avatar from '../../Components/Avatar/Avatar'

const DisplayAnswer = ({question}) => {

    const User = useSelector((state) => (state.currentUserReducer))

    return (
        <div>
            {
                question.answers.map((ans) => (
                    <div className="display-ans" key={ans._id}>
                        <p className='mt-4 mb-2'>{ans.answerBody}</p>
                        <div className="question-actions-user">
                            <div>
                                <button type="button">Share</button>
                                {
                                    User?.result?._id === ans?.userId && (
                                        <button type='button'>Delete</button>
                                    )
                                }
                            </div>
                            <div>
                                <p>answered {moment(ans.answeredOn).fromNow()}</p>
                                <Link to={`/Users/${ans.userId}`} className='user-link' style={{color:'#0086d8'}}>
                                    <Avatar backgroundColor="lightgreen" px='8px' py='5px' borderRadius='4px'>{ans.userAnswered.charAt(0).toUpperCase()}</Avatar>
                                    <div>
                                        {ans.userAnswered}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default DisplayAnswer
