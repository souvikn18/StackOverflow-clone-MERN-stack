import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Button from '../../Components/Button'
import {askQuestion} from '../../actions/question.actions'

const AskQuestion = () => {

    const [questionTitle, setQuestionTitle] = useState('')
    const [questionBody, setQuestionBody] = useState('')
    const [questionTags, setQuestionTags] = useState('')

    const dispatch = useDispatch()
    const user = useSelector((state) => (state.currentUserReducer))
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ questionTitle, questionBody, questionTags});
        console.log(user?.existingUser?.name);
        dispatch(askQuestion({ questionTitle, questionBody, questionTags, userPosted: user?.existingUser?.name, userId: user?.existingUser?._id}, navigate))
        if (!questionTitle) {
            alert('Title is empty!')
        }
        setQuestionTitle('');
        setQuestionBody('')
        setQuestionTags('')
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            setBody(body + "\n")
        }
    }


    return (
        <section className='min-h-[100vh] w-[100%] bg-[#f1f2f3]'>
            <div className='m-auto max-w-[1200px] py-[5%] flex flex-col gap-[40px]'>
                <div>
                    <h1 className='text-3xl font-bold'>Ask a Public Question</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='p-4 bg-white rounded shadow-lg flex flex-col gap-4'>
                        <label htmlFor='ask-question-title' className='flex flex-col gap-1'>
                            <h3 className='text-md font-bold'>Title</h3>
                            <p className='text-sm'>Be specific and imagine you’re asking a question to another person</p>
                            <input className='p-[10px] border border-[#0000003e] w-[calc(100%-20px)]' type='text' name='ask-question-title' id='ask-question-title' placeholder='e.g. Is there an R function for finding the index of an element in a vector?' onChange={(e) => {setQuestionTitle(e.target.value)}} />
                        </label>
                        <label htmlFor='ask-question-body' className='flex flex-col gap-1'>
                            <h3 className='text-md font-bold'>Body</h3>
                            <p className='text-sm'>Include all the information someone would need to answer your question</p>
                            <textarea className='p-[10px] border border-[#0000003e] w-[calc(100%-20px)] resize-y' cols="30" rows="8" id='ask-question-body' onChange={(e) => {setQuestionBody(e.target.value)}} onKeyPress={handleEnter}></textarea>
                        </label>
                        <label htmlFor='ask-question-tags' className='flex flex-col gap-1'>
                            <h3 className='text-md font-bold'>Tags</h3>
                            <p className='text-sm'>Add up to 5 tags to describe what your question is about</p>
                            <input className='p-[10px] border border-[#0000003e] w-[calc(100%-20px)]' type='text' name='tags' id='ask-question-tags' placeholder='e.g. (xml typescript wordpress)' onChange={(e) => {setQuestionTags(e.target.value.split(","))}} />
                        </label>
                    </div>
                    <div className='mt-8'>
                        <Button type='submit'>Review your questions</Button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AskQuestion