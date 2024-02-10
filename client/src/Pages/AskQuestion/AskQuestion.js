import React, { useState } from 'react'
import Button from '../../Components/Button'

const AskQuestion = () => {

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [tags, setTags] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!title) {
            alert('Title is empty!')
        }
        setTitle('');
        setBody('')
        setTags('')
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
                            <input className='p-[10px] border border-[#0000003e] w-[calc(100%-20px)]' type='text' name='ask-question-title' id='ask-question-title' placeholder='e.g. Is there an R function for finding the index of an element in a vector?' value={title} onChange={e => setTitle(e.target.value)} />
                        </label>
                        <label htmlFor='ask-question-body' className='flex flex-col gap-1'>
                            <h3 className='text-md font-bold'>Body</h3>
                            <p className='text-sm'>Include all the information someone would need to answer your question</p>
                            <textarea className='p-[10px] border border-[#0000003e] w-[calc(100%-20px)] resize-y' cols="30" rows="8" id='ask-question-body' value={body} onChange={e => setBody(e.target.value)}></textarea>
                        </label>
                        <label htmlFor='ask-question-tags' className='flex flex-col gap-1'>
                            <h3 className='text-md font-bold'>Tags</h3>
                            <p className='text-sm'>Add up to 5 tags to describe what your question is about</p>
                            <input className='p-[10px] border border-[#0000003e] w-[calc(100%-20px)]' type='text' name='tags' id='ask-question-tags' placeholder='e.g. (xml typescript wordpress)' value={tags} onChange={e => setTags(e.target.value)} />
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