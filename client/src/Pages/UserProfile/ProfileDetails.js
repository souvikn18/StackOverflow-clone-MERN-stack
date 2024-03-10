import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ProfileDetails = () => {

    const {id} = useParams()
    const User = useSelector(state => state.userReducer)
    const viewUser = User.filter((user) => user._id === id)

    return (
        <div>
            {
                viewUser.map(e => (
                <section key={e._id}>
                    <div>
                        <h3 className='font-bold mt-6 py-2'>Tags Watched</h3>
                        {e.tags.length !== 0 ? 
                        <ul>
                            {e.tags.map(tag => (<li>{tag}</li>))}
                        </ul> : 
                        <p className='text-[#7e7e7e] italic'>No tags found!</p>
                }
                    </div>
                    <div>
                        <h3 className='mt-6 py-2 font-bold'>About</h3>
                        {e.about === null ? 
                        <p>{e.about}</p>
                        :
                        <p className='text-[#7e7e7e] italic'>No bio found</p>}
                    </div>
                </section>
                )
            )}
        </div>
    )
}

export default ProfileDetails