import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { updateProfile } from '../../actions/user.actions'

const EditprofileForm = ({loggedInUser, setToggle}) => {

    const [displayname, setDisplayname] = useState(loggedInUser?.result?.name)
    const [email, setEmail] = useState(loggedInUser.result?.email)
    const [about, setAbout] = useState(loggedInUser.result?.about)
    const [tags, setTags] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(tags.length === 0){
            dispatch(updateProfile( loggedInUser?.result?._id, { displayname, email, about, tags: loggedInUser?.result?.tags }))
        } else{
            dispatch(updateProfile( loggedInUser?.result?._id, { displayname, email, about, tags }))
        }
        setToggle(false)
    }

    return (
        <div className='mt-6 divide-solid divide-y-2 w-[1100px]'>
            <h3 className='text-3xl font-semibold py-4'>Edit your profile</h3>
            <div>
                <h3 className='text-2xl my-4 text-[#717171]'>Public information</h3>
                <form className='border p-4 rounded-[5px]' onSubmit={handleSubmit}>
                    <label htmlFor='name'>
                        <h3 className='font-bold py-2 text-xl'>Display name</h3>
                        <input className='w-[50%] border p-2' id='name' value={displayname} onChange={(e) => setDisplayname(e.target.value)}/>
                    </label>
                    <label htmlFor='email'>
                        <h3 className='font-bold py-2 text-xl'>Email</h3>
                        <input className='w-[50%] border p-2' id='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </label>
                    <label htmlFor='about'>
                        <h3 className='font-bold py-2 text-xl'>About me</h3>
                        <textarea rows='7' className='w-[50%] border p-2' id='about' value={about} onChange={(e) => setAbout(e.target.value)}></textarea>
                    </label>
                    <label htmlFor='tags'>
                        <h3 className='font-bold py-2 text-xl'>Watched tags</h3>
                        <p className='pb-2'>Add tags separated by comma (,)</p>
                        <input className='w-[50%] border p-2' id='tags' onChange={(e) => setTags(e.target.value.split(','))}/>
                    </label>
                    <br/>
                    <input type='submit' value='Save Profile' className='py-[10px] px-[15px] rounded-[4px] bg-[#009dff] hover:bg-[#0086d8] transition ease-in-out duration-200 text-white font-semibold text-sm my-6'/>
                    <button className='mx-6 text-sm text-[#0a95ff]' onClick={() => setToggle(false)}>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default EditprofileForm